// src/modules/tickets/tickets.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes } from '@nestjs/common';

import { TicketSchema } from '../../schemas/validation';
import { TicketsService } from './ticket.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  async findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(TicketSchema))
  async create(@Body() data: any) {
    return this.ticketsService.create(data);
  }

  @Put(':id')
  @UsePipes(new ZodValidationPipe(TicketSchema))
  async update(@Param('id') id: string, @Body() data: any) {
    return this.ticketsService.update(id, data);
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }
  
  @Post(':id/generate-boarding-pass')
  async generateBoardingPass(@Param('id') id: string) {
    return this.ticketsService.generateBoardingPass(id);
  }
  
  @Post(':id/check-in')
  async checkIn(@Param('id') id: string) {
    return this.ticketsService.checkIn(id);
  }
}