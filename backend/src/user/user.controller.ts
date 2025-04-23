// src/modules/users/users.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes } from '@nestjs/common';
import { UserSchema } from '../../schemas/validation';
import { UsersService } from './user.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(UserSchema))
  async create(@Body() data: any) {
    return this.usersService.create(data);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(UserSchema))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
  
  @Get(':id/bookings')
  async getUserBookings(@Param('id') id: string) {
    return this.usersService.getUserBookings(id);
  }
  
  @Post('login')
  async login(@Body() credentials: { email: string; password: string }) {
    return this.usersService.login(credentials);
  }
  
  @Post('register')
  @UsePipes(new ZodValidationPipe(UserSchema))
  async register(@Body() data: any) {
    return this.usersService.register(data);
  }
  
  @Post(':id/verify')
  async verifyUser(@Param('id') id: string) {
    return this.usersService.verifyUser(id);
  }
}