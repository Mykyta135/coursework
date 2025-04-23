// src/modules/tickets/tickets.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';

import { TicketStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.ticket.findMany({
      include: {
        booking: true,
        passenger: true,
        flightSeat: {
          include: {
            flight: {
              include: {
                airline: true,
                departureAirport: true,
                arrivalAirport: true,
              }
            }
          }
        },
      }
    });
  }

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: true,
        passenger: true,
        flightSeat: {
          include: {
            flight: {
              include: {
                airline: true,
                departureAirport: true,
                arrivalAirport: true,
              }
            }
          }
        },
      }
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    return ticket;
  }

  async create(data: any) {
    // Generate a unique ticket number
    const ticketNumber = this.generateTicketNumber();
    
    // Check if the seat is available
    const flightSeat = await this.prisma.flightSeat.findUnique({
      where: { id: data.flightSeatId }
    });
    
    if (!flightSeat?.isAvailable) {
      throw new BadRequestException('The selected seat is not available');
    }
    
    // Create the ticket and mark the seat as unavailable in a transaction
    return this.prisma.$transaction([
      // Create the ticket
      this.prisma.ticket.create({
        data: {
          ...data,
          ticketNumber,
          status: TicketStatus.ISSUED,
        },
        include: {
          passenger: true,
          flightSeat: true,
        }
      }),
      // Mark the seat as unavailable
      this.prisma.flightSeat.update({
        where: { id: data.flightSeatId },
        data: { isAvailable: false }
      })
    ]).then(results => results[0]);  // Return the ticket
  }

  async update(id: string, data: any) {
    try {
      return await this.prisma.ticket.update({
        where: { id },
        data,
        include: {
          passenger: true,
          flightSeat: true,
        }
      });
    } catch (error) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    // First, get the ticket to free up the seat
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: { flightSeat: true }
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    // Delete the ticket and free up the seat in a transaction
    return this.prisma.$transaction([
      // Delete the ticket
      this.prisma.ticket.delete({
        where: { id }
      }),
      // Mark the seat as available again
      this.prisma.flightSeat.update({
        where: { id: ticket.flightSeatId },
        data: { isAvailable: true }
      })
    ]).then(results => results[0]);  // Return the deleted ticket
  }
  
  async generateBoardingPass(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        passenger: true,
        flightSeat: {
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

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    if (ticket.status !== TicketStatus.CHECKED_IN) {
      throw new BadRequestException('Passenger must be checked in to generate a boarding pass');
    }

    // Generate boarding pass data (could be JSON, PDF data, etc.)
    const boardingPassData = this.generateBoardingPassData(ticket);

    // Update the ticket with boarding pass data
    return this.prisma.ticket.update({
      where: { id },
      data: {
        boardingPass: boardingPassData
      },
      include: {
        passenger: true,
        flightSeat: {
          include: { flight: true }
        }
      }
    });
  }
  
  async checkIn(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        booking: true,
        flightSeat: {
          include: { flight: true }
        }
      }
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    if (ticket.booking.status !== 'CONFIRMED') {
      throw new BadRequestException('Cannot check in: booking is not confirmed');
    }

    if (ticket.status !== TicketStatus.ISSUED) {
      throw new BadRequestException(`Cannot check in: ticket status is ${ticket.status}`);
    }

    // Check if it's within check-in window (e.g., 24-48 hours before flight)
    const flight = ticket.flightSeat.flight;
    const now = new Date();
    const departureTime = new Date(flight.departureTime);
    const hoursDifference = (departureTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (hoursDifference > 48) {
      throw new BadRequestException('Check-in is not yet available (more than 48 hours before flight)');
    }

    if (hoursDifference < 0) {
      throw new BadRequestException('Check-in has closed (flight has already departed)');
    }

    // Update ticket status to CHECKED_IN
    return this.prisma.ticket.update({
      where: { id },
      data: {
        status: TicketStatus.CHECKED_IN
      }
    });
  }
  
  private generateTicketNumber(): string {
    // Example: TKT-XXXXXXXX
    const random = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return `TKT-${random}`;
  }
  
  private generateBoardingPassData(ticket: any): string {
    // In a real application, you might generate a PDF or HTML or some other format
    // Here, we'll just create a JSON string with the boarding pass data
    const boardingPassJson = {
      ticketNumber: ticket.ticketNumber,
      passenger: {
        firstName: ticket.passenger.firstName,
        lastName: ticket.passenger.lastName,
      },
      flight: {
        flightNumber: ticket.flightSeat.flight.flightNumber,
        airline: ticket.flightSeat.flight.airline.name,
        departureAirport: ticket.flightSeat.flight.departureAirport.code,
        arrivalAirport: ticket.flightSeat.flight.arrivalAirport.code,
        departureTime: ticket.flightSeat.flight.departureTime,
        arrivalTime: ticket.flightSeat.flight.arrivalTime,
      },
      seat: {
        seatNumber: ticket.flightSeat.seatNumber,
        seatClass: ticket.flightSeat.seatClass,
      },
      boardingTime: new Date(ticket.flightSeat.flight.departureTime.getTime() - 30 * 60 * 1000), // 30 min before departure
      boardingGate: 'TBD', // In a real app, this would be fetched from somewhere
      barcode: `BP${ticket.ticketNumber}`,
    };
    
    return JSON.stringify(boardingPassJson);
  }
}