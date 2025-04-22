// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (isPasswordValid) {
      const { passwordHash, ...result } = user;
      return result;
    }
    
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      role: user.role
    };
    
    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(email: string, password: string) {
    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User with this email already exists');
    }

    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await this.prisma.user.create({
      data: {
        email,
        passwordHash,
        role: 'CUSTOMER', // Default role
      },
    });

    // Return user data without password hash
    const { passwordHash: _, ...result } = newUser;
    return result;
  }
}