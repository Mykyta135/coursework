// src/modules/bookings/bookings.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { BookingStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.booking.findMany({
      include: {
        flight: {
          include: {
            airline: true,
            departureAirport: true,
            arrivalAirport: true,
          },
        },
        passengers: {
          include: {
            passenger: true,
          },
        },
        tickets: true,
        payments: true,
      },
    });
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        flight: {
          include: {
            airline: true,
            departureAirport: true,
            arrivalAirport: true,
          },
        },
        passengers: {
          include: {
            passenger: true,
          },
        },
        tickets: true,
        payments: true,
      },
    });

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return booking;
  }

  async create(data: any) {
    // Generate a unique booking reference (e.g., 6 character alphanumeric)
    const bookingReference = this.generateBookingReference();

    // Create the booking with reference
    return this.prisma.booking.create({
      data: {
        ...data,
        bookingReference,
        status: BookingStatus.PENDING,
      },
      include: {
        flight: true,
        user: true,
      },
    });
  }

  async update(id: string, data: any) {
    try {
      return await this.prisma.booking.update({
        where: { id },
        data,
        include: {
          flight: true,
          user: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.booking.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }

  async getBookingTickets(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        tickets: {
          include: {
            passenger: true,
            flightSeat: true,
          },
        },
      },
    });

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    return booking.tickets;
  }

  async confirmBooking(id: string) {
    // First, check if booking exists and is in PENDING status
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        tickets: true,
        payments: true,
      },
    });

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    if (booking.status !== BookingStatus.PENDING) {
      throw new BadRequestException(`Booking is not in PENDING status`);
    }

    // Check if payment is completed
    const paymentCompleted = booking.payments.some(
      (p) => p.status === 'COMPLETED',
    );
    if (!paymentCompleted) {
      throw new BadRequestException(
        'Cannot confirm booking: payment not completed',
      );
    }

    // Update booking status to CONFIRMED
    return this.prisma.booking.update({
      where: { id },
      data: {
        status: BookingStatus.CONFIRMED,
      },
    });
  }

  async cancelBooking(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        tickets: true,
      },
    });

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    // Define a type guard function
    function isCancellableStatus(
      status: BookingStatus,
    ): status is 'PENDING' | 'CONFIRMED' {
      return (
        status === BookingStatus.PENDING || status === BookingStatus.CONFIRMED
      );
    }

    // Use the type guard in the condition
    if (!isCancellableStatus(booking.status)) {
      throw new BadRequestException(
        `Cannot cancel booking with status ${booking.status}`,
      );
    }

    // Update booking and all associated tickets to CANCELLED
    return this.prisma.$transaction([
      // Update all tickets to CANCELLED
      this.prisma.ticket.updateMany({
        where: { bookingId: id },
        data: { status: 'CANCELLED' },
      }),
      // Update booking status to CANCELLED
      this.prisma.booking.update({
        where: { id },
        data: { status: BookingStatus.CANCELLED },
      }),
    ]);
  }

  private generateBookingReference(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
