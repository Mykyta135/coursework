// src/modules/refunds/refunds.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { RefundStatus, TicketStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RefundsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.refund.findMany({
      include: {
        ticket: {
          include: {
            passenger: true,
            flightSeat: {
              include: {
                flight: {
                  include: {
                    airline: true,
                    departureAirport: true,
                    arrivalAirport: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const refund = await this.prisma.refund.findUnique({
      where: { id },
      include: {
        ticket: {
          include: {
            passenger: true,
            flightSeat: {
              include: {
                flight: {
                  include: {
                    airline: true,
                    departureAirport: true,
                    arrivalAirport: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!refund) {
      throw new NotFoundException(`Refund with ID ${id} not found`);
    }

    return refund;
  }

  async create(data: any) {
    // Verify ticket exists and is eligible for refund
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: data.ticketId },
      include: {
        flightSeat: {
          include: {
            flight: true,
          },
        },
        refund: true,
      },
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${data.ticketId} not found`);
    }

    if (ticket.refund) {
      throw new BadRequestException(
        'A refund request already exists for this ticket',
      );
    }

    // Define a type guard function
    function isRefundableStatus(
      status: TicketStatus,
    ): status is 'ISSUED' | 'CHECKED_IN' {
      return (
        status === TicketStatus.ISSUED || status === TicketStatus.CHECKED_IN
      );
    }

    // Update the condition to use the type guard
    if (!isRefundableStatus(ticket.status)) {
      throw new BadRequestException(
        `Tickets with status ${ticket.status} cannot be refunded`,
      );
    }

    // Check if flight has already departed
    const now = new Date();
    const departureTime = new Date(ticket.flightSeat.flight.departureTime);
    if (now > departureTime) {
      throw new BadRequestException(
        'Cannot refund ticket: flight has already departed',
      );
    }

    // Create refund request
    return this.prisma.refund.create({
      data: {
        ...data,
        status: RefundStatus.PENDING,
      },
      include: {
        ticket: {
          include: {
            passenger: true,
            flightSeat: true,
          },
        },
      },
    });
  }

  async approve(id: string) {
    const refund = await this.prisma.refund.findUnique({
      where: { id },
    });

    if (!refund) {
      throw new NotFoundException(`Refund with ID ${id} not found`);
    }

    if (refund.status !== RefundStatus.PENDING) {
      throw new BadRequestException(
        `Cannot approve refund with status ${refund.status}`,
      );
    }

    return this.prisma.refund.update({
      where: { id },
      data: {
        status: RefundStatus.APPROVED,
      },
    });
  }

  async reject(id: string) {
    const refund = await this.prisma.refund.findUnique({
      where: { id },
    });

    if (!refund) {
      throw new NotFoundException(`Refund with ID ${id} not found`);
    }

    if (refund.status !== RefundStatus.PENDING) {
      throw new BadRequestException(
        `Cannot reject refund with status ${refund.status}`,
      );
    }

    return this.prisma.refund.update({
      where: { id },
      data: {
        status: RefundStatus.REJECTED,
      },
    });
  }

  // src/modules/refunds/refunds.service.ts (continued)
  async process(id: string) {
    const refund = await this.prisma.refund.findUnique({
      where: { id },
      include: {
        ticket: true,
      },
    });

    if (!refund) {
      throw new NotFoundException(`Refund with ID ${id} not found`);
    }

    if (refund.status !== RefundStatus.APPROVED) {
      throw new BadRequestException(`Only approved refunds can be processed`);
    }

    // Process the refund in a transaction
    return this.prisma
      .$transaction([
        // Update refund status to PROCESSED
        this.prisma.refund.update({
          where: { id },
          data: {
            status: RefundStatus.PROCESSED,
            processedDate: new Date(),
          },
        }),
        // Update ticket status to REFUNDED
        this.prisma.ticket.update({
          where: { id: refund.ticketId },
          data: {
            status: TicketStatus.REFUNDED,
          },
        }),
        // Mark the seat as available again
        this.prisma.flightSeat.update({
          where: { id: refund.ticket.flightSeatId },
          data: {
            isAvailable: true,
          },
        }),
      ])
      .then((results) => results[0]); // Return the processed refund
  }
}
