// src/booking/booking.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    // Generate a unique booking reference
    const bookingReference = uuidv4().substring(0, 8).toUpperCase();
    
    // Create the booking
    const booking = await this.prisma.booking.create({
      data: {
        ...data,
        bookingReference,
      },
      include: {
        flight: {
          include: {
            departureAirport: true,
            arrivalAirport: true,
            airline: true,
          }
        },
        passengers: {
          include: {
            passenger: true
          }
        }
      }
    });
    
    return booking;
  }

  async findById(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: {
        flight: {
          include: {
            departureAirport: true,
            arrivalAirport: true,
            airline: true,
          }
        },
        passengers: {
          include: {
            passenger: true
          }
        },
        tickets: true,
        payments: true
      }
    });
    
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    
    return booking;
  }

  async update(id: string, data: any) {
    try {
      return await this.prisma.booking.update({
        where: { id },
        data,
        include: {
          flight: true,
          passengers: {
            include: {
              passenger: true
            }
          }
        }
      });
    } catch (error) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.booking.delete({
        where: { id }
      });
    } catch (error) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
}