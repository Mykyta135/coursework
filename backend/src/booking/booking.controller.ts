// src/booking/booking.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';

import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { BookingSchema } from '../../schemas/validation';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { BookingService } from './booking.service';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body(new ZodValidationPipe(BookingSchema)) data: any) {
    return this.bookingService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.bookingService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body(new ZodValidationPipe(BookingSchema)) data: any) {
    return this.bookingService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookingService.remove(id);
  }
}