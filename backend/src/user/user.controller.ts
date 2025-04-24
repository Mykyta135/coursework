// src/user/user.controller.ts
import { Controller, Get, Post, Put, Body, UseGuards, Request } from '@nestjs/common';

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { UserSchema, PassengerSchema } from '../../schemas/validation';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body(new ZodValidationPipe(UserSchema)) data: any) {
    return this.userService.register(data);
  }

  @Post('login')
  async login(@Body() data: { email: string; password: string }) {
    return this.userService.login(data.email, data.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return this.userService.findById(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getUserProfile(@Request() req) {
    return this.userService.getUserWithPassenger(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(
    @Request() req,
    @Body(new ZodValidationPipe(PassengerSchema)) data: any
  ) {
    return this.userService.updateProfile(req.user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('bookings')
  async getUserBookings(@Request() req) {
    return this.userService.getUserBookings(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('tickets')
  async getUserTickets(@Request() req) {
    return this.userService.getUserTickets(req.user.id);
  }
}