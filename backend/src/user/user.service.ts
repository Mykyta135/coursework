// src/modules/users/users.service.ts
import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
        passenger: true
      }
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
        passenger: true
      }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async create(data: any) {
    // Check if user with email already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new ConflictException(`User with email ${data.email} already exists`);
    }

    // Hash the password
    const passwordHash = await this.hashPassword(data.password);

    // Create the user
    return this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        role: data.role || 'CUSTOMER'
      },
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  async update(id: string, data: any) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // If email is being changed, check for conflicts
    if (data.email && data.email !== user.email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email }
      });

      if (existingUser) {
        throw new ConflictException(`User with email ${data.email} already exists`);
      }
    }

    // Prepare update data
    const updateData: any = {
      email: data.email,
      role: data.role,
      isVerified: data.isVerified
    };

    // Hash the new password if provided
    if (data.password) {
      updateData.passwordHash = await this.hashPassword(data.password);
    }

    // Update the user
    return this.prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
        passenger: true
      }
    });
  }

  async remove(id: string) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        bookings: true
      }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Check if user has any bookings
    if (user.bookings.length > 0) {
      throw new BadRequestException(`Cannot delete user with existing bookings`);
    }

    // Delete the user
    return this.prisma.user.delete({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true
      }
    });
  }
  
  async getUserBookings(id: string) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Get user's bookings
    return this.prisma.booking.findMany({
      where: { userId: id },
      include: {
        flight: {
          include: {
            airline: true,
            departureAirport: true,
            arrivalAirport: true
          }
        },
        tickets: {
          include: {
            passenger: true,
            flightSeat: true
          }
        },
        payments: true
      }
    });
  }
  
  async login(credentials: { email: string; password: string }) {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email: credentials.email }
    });

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    // Verify password
    const passwordValid = await bcrypt.compare(credentials.password, user.passwordHash);

    if (!passwordValid) {
      throw new BadRequestException('Invalid email or password');
    }

    // In a real application, you would generate and return a JWT token here
    // For this example, we'll just return the user object without sensitive fields
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified
    };
  }
  
  async register(data: any) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new ConflictException(`User with email ${data.email} already exists`);
    }

    // Hash the password
    const passwordHash = await this.hashPassword(data.password);

    // Create a new user
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        role: 'CUSTOMER', // Default role for new registrations
        isVerified: false // User needs to verify email
      }
    });

    // In a real application, you would send a verification email here

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified
    };
  }
  
  async verifyUser(id: string) {
    // Check if user exists
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Mark user as verified
    return this.prisma.user.update({
      where: { id },
      data: {
        isVerified: true
      },
      select: {
        id: true,
        email: true,
        role: true,
        isVerified: true
      }
    });
  }
  
  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }
}