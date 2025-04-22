// src/services/user.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      return null;
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    
    if (!isPasswordValid) {
      return null;
    }
    
    const { passwordHash, ...result } = user;
    return result;
  }
}