// src/user/user.service.ts
import { Injectable, NotFoundException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async register(data: any) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email }
    });
    
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(data.password, 10);
    
    // Create user
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        role: data.role || 'CUSTOMER',
        verificationToken: Math.random().toString(36).substring(2, 12),
        verificationExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      }
    });
    
    // Generate JWT token
    const token = this.generateToken(user);
    
    // Return user data and token
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      token
    };
  }

  async login(email: string, password: string) {
    // Find user
    const user = await this.prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Check password
    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    // Generate JWT token
    const token = this.generateToken(user);
    
    // Return user data and token
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      token
    };
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    
    return { user };
  }

  async getUserWithPassenger(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        passenger: true
      }
    });
    
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    
    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        isVerified: user.isVerified,
        passenger: user.passenger
      }
    };
  }

  async updateProfile(userId: string, data: any) {
    // First check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        passenger: true
      }
    });
    
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    
    if (user.passenger) {
      // Update existing passenger
      return this.prisma.passenger.update({
        where: { userId },
        data
      });
    } else {
      // Create new passenger
      return this.prisma.passenger.create({
        data: {
          ...data,
          userId
        }
      });
    }
  }

  async getUserBookings(userId: string) {
    return this.prisma.booking.findMany({
      where: { userId },
      include: {
        flight: {
          include: {
            departureAirport: true,
            arrivalAirport: true,
            airline: true
          }
        },
        passengers: {
          include: {
            passenger: true
          }
        },
        tickets: true
      },
      orderBy: {
        bookingDate: 'desc'
      }
    });
  }

  async getUserTickets(userId: string) {
    // First get the passenger ID for this user
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { passenger: true }
    });
    
    if (!user || !user.passenger) {
      return [];
    }
    
    return this.prisma.ticket.findMany({
      where: { passengerId: user.passenger.id },
      include: {
        booking: {
          include: {
            flight: {
              include: {
                departureAirport: true,
                arrivalAirport: true,
                airline: true
              }
            }
          }
        },
        flightSeat: true,
        refund: true
      },
      orderBy: {
        issueDate: 'desc'
      }
    });
  }

  private generateToken(user: any) {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role
    };
    
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '24h'
    });
  }
}