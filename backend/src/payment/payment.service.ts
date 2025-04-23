// src/modules/payments/payments.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PaymentStatus } from '@prisma/client';


import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.payment.findMany({
      include: {
        booking: true
      }
    });
  }

  async findOne(id: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { id },
      include: {
        booking: {
          include: {
            flight: true,
            user: true
          }
        }
      }
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    return payment;
  }

  async create(data: any) {
    // Verify booking exists
    const booking = await this.prisma.booking.findUnique({
      where: { id: data.bookingId }
    });

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${data.bookingId} not found`);
    }

    // Generate a random transaction ID
    const transactionId = this.generateTransactionId();

    // Create payment record with PENDING status
    return this.prisma.payment.create({
      data: {
        ...data,
        transactionId,
        status: PaymentStatus.PENDING
      },
      include: {
        booking: true
      }
    });
  }
  
  async processPayment(id: string) {
    const payment = await this.prisma.payment.findUnique({
      where: { id }
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    if (payment.status !== PaymentStatus.PENDING) {
      throw new BadRequestException(`Payment with status ${payment.status} cannot be processed`);
    }

    // In a real application, this would integrate with a payment gateway
    // For this example, we'll just simulate a successful payment
    
    // In 90% of cases, make the payment successful
    const isSuccessful = Math.random() < 0.9;
    
    if (isSuccessful) {
      return this.prisma.payment.update({
        where: { id },
        data: {
          status: PaymentStatus.COMPLETED
        }
      });
    } else {
      return this.prisma.payment.update({
        where: { id },
        data: {
          status: PaymentStatus.FAILED
        }
      });
    }
  }
  
  private generateTransactionId(): string {
    // Example: TXN-XXXXXXXX
    const random = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return `TXN-${random}`;
  }
}