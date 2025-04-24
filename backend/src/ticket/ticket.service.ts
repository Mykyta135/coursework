// src/ticket/ticket.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as PDFDocument from 'pdfkit';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            flight: {
              include: {
                departureAirport: true,
                arrivalAirport: true,
                airline: true
              }
            }
          }
        },
        passenger: true,
        flightSeat: true,
        refund: true
      }
    });
    
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    
    return ticket;
  }

  async generateTicketPdf(id: string): Promise<Buffer> {
    const ticket = await this.findById(id);
    
    return new Promise((resolve, reject) => {
      try {
        const buffers: Buffer[] = [];
        const doc = new PDFDocument();
        
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
          const pdfData = Buffer.concat(buffers);
          resolve(pdfData);
        });
        
        // Build the PDF
        doc.fontSize(20).text('Boarding Pass', { align: 'center' });
        doc.moveDown();
        
        doc.fontSize(12).text(`Passenger: ${ticket.passenger.firstName} ${ticket.passenger.lastName}`);
        doc.text(`Flight: ${ticket.booking.flight.flightNumber}`);
        doc.text(`From: ${ticket.booking.flight.departureAirport.name} (${ticket.booking.flight.departureAirport.code})`);
        doc.text(`To: ${ticket.booking.flight.arrivalAirport.name} (${ticket.booking.flight.arrivalAirport.code})`);
        doc.text(`Date: ${ticket.booking.flight.departureTime.toLocaleDateString()}`);
        doc.text(`Time: ${ticket.booking.flight.departureTime.toLocaleTimeString()}`);
        doc.text(`Seat: ${ticket.flightSeat.seatNumber}`);
        doc.text(`Class: ${ticket.flightSeat.seatClass}`);
        doc.text(`Ticket #: ${ticket.ticketNumber}`);
        doc.moveDown();
        
        doc.text('Please arrive at the airport at least 2 hours before departure.', { align: 'center' });
        
        // Finalize the PDF
        doc.end();
      } catch (error) {
        reject(new BadRequestException('Failed to generate ticket PDF'));
      }
    });
  }

  async checkIn(id: string) {
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
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    
    if (ticket.status !== 'ISSUED') {
      throw new BadRequestException(`Ticket already checked in or not eligible for check-in`);
    }
    
    // Generate a boarding pass
    const boardingPass = `BP-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Update ticket status
    const updatedTicket = await this.prisma.ticket.update({
      where: { id },
      data: {
        status: 'CHECKED_IN',
        boardingPass
      },
      include: {
        booking: {
          include: {
            flight: {
              include: {
                departureAirport: true,
                arrivalAirport: true
              }
            }
          }
        },
        passenger: true,
        flightSeat: true
      }
    });
    
    return updatedTicket;
  }

  async requestRefund(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        flightSeat: true,
        refund: true
      }
    });
    
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    
    if (ticket.refund) {
      throw new BadRequestException(`Refund already requested for this ticket`);
    }
    
    if (!['ISSUED', 'CHECKED_IN'].includes(ticket.status)) {
      throw new BadRequestException(`Ticket not eligible for refund`);
    }
    
    // Create refund request
    const refund = await this.prisma.refund.create({
      data: {
        amount: ticket.flightSeat.price,
        reason: 'Customer requested refund',
        status: 'PENDING',
        ticketId: id
      }
    });
    
    // Update ticket status
    await this.prisma.ticket.update({
      where: { id },
      data: {
        status: 'CANCELLED'
      }
    });
    
    return refund;
  }
}