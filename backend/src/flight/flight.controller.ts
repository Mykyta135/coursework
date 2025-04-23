// src/modules/flights/flights.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, Query, UsePipes } from '@nestjs/common';

import { FlightSchema, FlightSearchSchema } from '../../schemas/validation';
import { FlightsService } from './flight.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';


@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async findAll(@Query(new ZodValidationPipe(FlightSearchSchema)) query?: any) {
    return this.flightsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.flightsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(FlightSchema))
  async create(@Body() data: any) {
    return this.flightsService.create(data);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(FlightSchema))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.flightsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.flightsService.remove(id);
  }
  
  @Get(':id/seats')
  async getFlightSeats(@Param('id') id: string) {
    return this.flightsService.getFlightSeats(id);
  }
}