// src/controllers/ticket.controller.ts
import { 
  Controller, 
  Get, 
  Param, 
  UseGuards, 
  Req, 
  Res,
  HttpException,
  HttpStatus,
  Post
} from '@nestjs/common';
import { Response } from 'express';
import { TicketService } from './ticket.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('tickets')
export class TicketController {
  constructor(
    private prisma: PrismaService,
    private ticketService: TicketService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: true,
        passenger: true,
        flightSeat: true,
        refund: true
      }
    });

    if (!ticket) {
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND);
    }

    // Check if ticket belongs to user
    if (ticket.booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Get flight details
    const flight = await this.prisma.flight.findUnique({
      where: { id: ticket.booking.flightId },
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true
      }
    });

    return {
      ...ticket,
      flight
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/download')
  async downloadTicket(@Param('id') id: string, @Req() req, @Res() res: Response) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: true,
        passenger: true,
        flightSeat: true
      }
    });

    if (!ticket) {
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND);
    }

    // Check if ticket belongs to user
    if (ticket.booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Get flight details
    const flight = await this.prisma.flight.findUnique({
      where: { id: ticket.booking.flightId },
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true
      }
    });
    if (!flight) {
      throw new Error('Flight information is required to generate ticket');
    }
    // Generate PDF ticket
    const pdfBuffer = await this.ticketService.generateTicketPdf({
      ticket,
      flight,
      passenger: ticket.passenger
    });

    // Set response headers for PDF download
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="ticket-${ticket.ticketNumber}.pdf"`,
      'Content-Length': pdfBuffer.length
    });

    // Send PDF as response
    res.end(pdfBuffer);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/check-in')
  async checkIn(@Param('id') id: string, @Req() req) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            flight: true
          }
        }
      }
    });

    if (!ticket) {
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND);
    }

    // Check if ticket belongs to user
    if (ticket.booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Check if flight departure is within 48 hours
    const now = new Date();
    const departureTime = new Date(ticket.booking.flight.departureTime);
    const hoursUntilDeparture = (departureTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (hoursUntilDeparture > 48) {
      throw new HttpException(
        'Online check-in is only available within 48 hours of departure',
        HttpStatus.BAD_REQUEST
      );
    }

    if (hoursUntilDeparture < 1) {
      throw new HttpException(
        'Online check-in is closed. Please proceed to the airport check-in counter',
        HttpStatus.BAD_REQUEST
      );
    }

    // Check if ticket is already checked in
    if (ticket.status === 'CHECKED_IN' || ticket.status === 'BOARDED') {
      throw new HttpException(
        'Ticket is already checked in',
        HttpStatus.BAD_REQUEST
      );
    }

    // Generate boarding pass
    const boardingPass = await this.ticketService.generateBoardingPass(ticket);

    // Update ticket status
    const updatedTicket = await this.prisma.ticket.update({
      where: { id },
      data: {
        status: 'CHECKED_IN',
        boardingPass
      },
      include: {
        passenger: true,
        flightSeat: true,
        booking: {
          include: {
            flight: {
              include: {
                airline: true,
                departureAirport: true,
                arrivalAirport: true
              }
            }
          }
        }
      }
    });

    return {
      success: true,
      message: 'Check-in successful',
      ticket: updatedTicket
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/refund')
  async requestRefund(@Param('id') id: string, @Req() req) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            flight: true
          }
        },
        refund: true
      }
    });

    if (!ticket) {
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND);
    }

    // Check if ticket belongs to user
    if (ticket.booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Check if ticket is already refunded or has a pending refund
    if (ticket.status === 'REFUNDED') {
      throw new HttpException('Ticket is already refunded', HttpStatus.BAD_REQUEST);
    }

    if (ticket.refund) {
      throw new HttpException(
        `Refund already requested with status: ${ticket.refund.status}`,
        HttpStatus.BAD_REQUEST
      );
    }

    // Check refund eligibility based on flight departure time
    const now = new Date();
    const departureTime = new Date(ticket.booking.flight.departureTime);
    const hoursUntilDeparture = (departureTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    // Calculate refund amount based on time until departure
    let refundPercentage = 0;
    if (hoursUntilDeparture > 72) {
      refundPercentage = 0.85; // 85% refund if more than 72 hours before departure
    } else if (hoursUntilDeparture > 48) {
      refundPercentage = 0.70; // 70% refund if between 48-72 hours before departure
    } else if (hoursUntilDeparture > 24) {
      refundPercentage = 0.50; // 50% refund if between 24-48 hours before departure
    } else {
      throw new HttpException(
        'Refunds are only available more than 24 hours before departure',
        HttpStatus.BAD_REQUEST
      );
    }

    // Get seat price
    const flightSeat = await this.prisma.flightSeat.findUnique({
      where: { id: ticket.flightSeatId }
    });

    const refundAmount = Number(flightSeat?.price) * refundPercentage;

    // Process refund using PostgreSQL stored procedure
    await this.prisma.$executeRaw`
      CALL process_refund(${id}, ${refundAmount})
    `;

    // Get updated ticket with refund information
    const updatedTicket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        refund: true,
        passenger: true,
        flightSeat: true,
        booking: {
          include: {
            flight: {
              include: {
                airline: true,
                departureAirport: true,
                arrivalAirport: true
              }
            }
          }
        }
      }
    });

    return {
      success: true,
      message: 'Refund processed successfully',
      ticket: updatedTicket,
      refund: updatedTicket?.refund
    };
  }
}
