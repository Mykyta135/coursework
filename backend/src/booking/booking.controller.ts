// src/controllers/booking.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Req,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import cuid = require('cuid');
import { BookingSchema, PaymentSchema } from 'schemas/validation';
import { z } from 'zod';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ProcessPaymentDto } from './dto/process-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Passenger, Ticket } from '@prisma/client';

@Controller('bookings')
export class BookingController {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto, @Req() req) {
    try {
      // Validate with Zod
      BookingSchema.parse({
        ...createBookingDto,
        userId: req.user.id,
      });

      const { flightId, passengers, selectedSeats } = createBookingDto;

      // Check if flight exists
      const flight = await this.prisma.flight.findUnique({
        where: { id: flightId },
      });

      if (!flight) {
        throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
      }

      // Check if selected seats are available
      const seatsToBook = await this.prisma.flightSeat.findMany({
        where: {
          id: { in: selectedSeats },
          isAvailable: true,
        },
      });

      if (seatsToBook.length !== selectedSeats.length) {
        throw new HttpException(
          'One or more selected seats are not available',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Calculate total amount
      const totalAmount = seatsToBook.reduce(
        (sum, seat) => sum + Number(seat.price),
        0,
      );

      function generateUniqueReference() {
        return `BOOK-${cuid()}`;
      }
      // Create booking in a transaction
      return await this.prisma.$transaction(async (prisma) => {
        // Create booking
        const bookingReference = generateUniqueReference(); // Implement this function
        const booking = await prisma.booking.create({
          data: {
            userId: req.user.id,
            flightId,
            totalAmount,
            status: 'PENDING',
            bookingReference, // Add the required unique reference
            bookingDate: new Date(), // Also good practice to set explicitly
          },
        });

        // Process passengers
        const passengerRecords: Passenger[] = [];
        for (const passenger of passengers) {
          // Check if passenger already exists by email
          let passengerRecord = await prisma.passenger.findUnique({
            where: { email: passenger.email },
          });

          // Create passenger if doesn't exist
          if (!passengerRecord) {
            passengerRecord = await prisma.passenger.create({
              data: {
                firstName: passenger.firstName,
                lastName: passenger.lastName,
                email: passenger.email,
                phone: passenger.phone,
                passportNumber: passenger.passportNumber,
                dateOfBirth: passenger.dateOfBirth,
                nationality: passenger.nationality,
              },
            });
          }

          // Associate passenger with booking
          await prisma.bookingPassenger.create({
            data: {
              bookingId: booking.id,
              passengerId: passengerRecord.id,
              isMainContact: passenger.isMainContact || false,
            },
          });

          passengerRecords.push(passengerRecord);
        }

        // Create tickets for each passenger and seat
        const tickets: Ticket[] = [];
        for (let i = 0; i < selectedSeats.length; i++) {
          const passengerIndex = i % passengerRecords.length;
          function generateTicketNumber() {
            return `TKT-${cuid()}`; // Example: TKT-cls2q7zpd00003h6v5d4q7q6d
          }
          const ticket = await prisma.ticket.create({
            data: {
              bookingId: booking.id,
              passengerId: passengerRecords[passengerIndex].id,
              flightSeatId: selectedSeats[i],
              status: 'ISSUED',
              ticketNumber: generateTicketNumber(), // Add unique ticket number
              issueDate: new Date(), // Explicitly set issue date (optional but recommended)
            },
          });

          tickets.push(ticket);
        }

        // Return booking with related data
        return prisma.booking.findUnique({
          where: { id: booking.id },
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
            tickets: {
              include: {
                flightSeat: true,
              },
            },
          },
        });
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Invalid booking data',
            details: error.errors,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/payments')
  async processPayment(
    @Param('id') bookingId: string,
    @Body() paymentDto: ProcessPaymentDto,
    @Req() req,
  ) {
    try {
      // Validate with Zod
      PaymentSchema.parse({
        ...paymentDto,
        bookingId,
      });

      // Find booking
      const booking = await this.prisma.booking.findUnique({
        where: { id: bookingId },
        include: {
          tickets: true,
        },
      });

      if (!booking) {
        throw new HttpException('Booking not found', HttpStatus.NOT_FOUND);
      }

      // Verify booking belongs to user
      if (booking.userId !== req.user.id) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      // Mock payment processing logic
      // In a real implementation, this would integrate with a payment gateway
      const success = Math.random() > 0.1; // 90% success rate for demo

      if (!success) {
        throw new HttpException(
          'Payment processing failed',
          HttpStatus.PAYMENT_REQUIRED,
        );
      }

      const transactionId =
        'TRX' + Date.now() + Math.floor(Math.random() * 1000);

      // Process payment in transaction
      return await this.prisma.$transaction(async (prisma) => {
        // Create payment record
        const payment = await prisma.payment.create({
          data: {
            bookingId,
            amount: Number(booking.totalAmount),
            paymentMethod: paymentDto.paymentMethod,
            transactionId,
            status: 'COMPLETED',
          },
        });

        // Update booking status
        await prisma.booking.update({
          where: { id: bookingId },
          data: { status: 'CONFIRMED' },
        });

        // Return payment details
        return {
          success: true,
          payment: {
            id: payment.id,
            amount: payment.amount,
            paymentMethod: payment.paymentMethod,
            transactionId: payment.transactionId,
            status: payment.status,
            paymentDate: payment.paymentDate,
          },
          booking: {
            id: booking.id,
            bookingReference: booking.bookingReference,
            status: 'CONFIRMED',
          },
        };
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Invalid payment data',
            details: error.errors,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    const bookings = await this.prisma.booking.findMany({
      where: { userId: req.user.id },
      include: {
        flight: {
          include: {
            airline: true,
            departureAirport: true,
            arrivalAirport: true,
          },
        },
        payments: true,
        tickets: {
          include: {
            passenger: true,
          },
        },
      },
      orderBy: {
        bookingDate: 'desc',
      },
    });

    return bookings;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
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
        payments: true,
        tickets: {
          include: {
            passenger: true,
            flightSeat: true,
          },
        },
        passengers: {
          include: {
            passenger: true,
          },
        },
      },
    });

    if (!booking) {
      throw new HttpException('Booking not found', HttpStatus.NOT_FOUND);
    }

    // Check if booking belongs to user
    if (booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return booking;
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/cancel')
  async cancelBooking(@Param('id') id: string, @Req() req) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        tickets: true,
        flight: true,
      },
    });

    if (!booking) {
      throw new HttpException('Booking not found', HttpStatus.NOT_FOUND);
    }

    // Check if booking belongs to user
    if (booking.userId !== req.user.id) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Check if flight departure is more than 24 hours away
    const now = new Date();
    const departureTime = new Date(booking.flight.departureTime);
    const hoursUntilDeparture =
      (departureTime.getTime() - now.getTime()) / (1000 * 60 * 60);

    if (hoursUntilDeparture < 24) {
      throw new HttpException(
        'Cancellation is only allowed more than 24 hours before departure',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Process cancellation in transaction
    return await this.prisma.$transaction(async (prisma) => {
      // Update booking status
      await prisma.booking.update({
        where: { id },
        data: { status: 'CANCELLED' },
      });

      // Update ticket statuses
      for (const ticket of booking.tickets) {
        await prisma.ticket.update({
          where: { id: ticket.id },
          data: { status: 'CANCELLED' },
        });
      }

      // Create refund records if payment was made
      const payment = await prisma.payment.findFirst({
        where: {
          bookingId: id,
          status: 'COMPLETED',
        },
      });

      if (payment) {
        // Calculate refund amount (80% of payment amount for demo)
        const refundAmount = Number(payment.amount) * 0.8;

        // Create refund for each ticket
        for (const ticket of booking.tickets) {
          const ticketRefundAmount = refundAmount / booking.tickets.length;

          // Call the PostgreSQL procedure
          await prisma.$executeRaw`
            CALL process_refund(${ticket.id}, ${ticketRefundAmount})
          `;
        }
      }

      return {
        success: true,
        message: 'Booking cancelled successfully',
        refundInitiated: !!payment,
      };
    });
  }
}
