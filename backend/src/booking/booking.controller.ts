// src/modules/bookings/bookings.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, Query, UsePipes } from '@nestjs/common';

import { BookingSchema } from '../../schemas/validation';
import { BookingsService } from './booking.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  async findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(BookingSchema))
  async create(@Body() data: any) {
    return this.bookingsService.create(data);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(BookingSchema))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.bookingsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookingsService.remove(id);
  }
  
  @Get(':id/tickets')
  async getBookingTickets(@Param('id') id: string) {
    return this.bookingsService.getBookingTickets(id);
  }
  
  @Post(':id/confirm')
  async confirmBooking(@Param('id') id: string) {
    return this.bookingsService.confirmBooking(id);
  }
  
  @Post(':id/cancel')
  async cancelBooking(@Param('id') id: string) {
    return this.bookingsService.cancelBooking(id);
  }
}