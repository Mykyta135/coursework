// src/flight/flight.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, Query, UsePipes } from '@nestjs/common';

import { FlightSchema, FlightSearchSchema } from '../../schemas/validation';
import { FlightService } from './flight.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('flights')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Get()
  async findAll(@Query(new ZodValidationPipe(FlightSearchSchema)) query?: any) {
    return this.flightService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.flightService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(FlightSchema))
  async create(@Body() data: any) {
    return this.flightService.create(data);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(FlightSchema))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.flightService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.flightService.remove(id);
  }
  
  @Get(':id/seats')
  async getFlightSeats(@Param('id') id: string, @Query('seatClass') seatClass?: string) {
    return this.flightService.getFlightSeats(id, seatClass);
  }

  @Get('airports/search')
  async searchAirports(@Query('query') query: string) {
    return this.flightService.searchAirports(query);
  }

  @Get('schedules/routes')
  async getPopularRoutes() {
    return this.flightService.getPopularRoutes();
  }
}