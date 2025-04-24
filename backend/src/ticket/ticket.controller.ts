// src/ticket/ticket.controller.ts
import { Controller, Get, Post, Param, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard';
import { TicketService } from './ticket.service';


@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.ticketService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/download')
  async downloadTicket(@Param('id') id: string, @Res() res: Response) {
    const pdfBuffer = await this.ticketService.generateTicketPdf(id);
    
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="ticket-${id}.pdf"`,
      'Content-Length': pdfBuffer.length,
    });
    
    res.end(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/check-in')
  async checkIn(@Param('id') id: string) {
    return this.ticketService.checkIn(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/refund')
  async requestRefund(@Param('id') id: string) {
    return this.ticketService.requestRefund(id);
  }
}