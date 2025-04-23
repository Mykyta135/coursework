// src/modules/flights/flights.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlightsService {
  constructor(private prisma: PrismaService) {}

  async findAll(params: any = {}) {
    const { 
      departureAirportCode, 
      arrivalAirportCode, 
      departureDate, 
      returnDate, 
      passengers, 
      seatClass 
    } = params;

    const where: any = {};

    if (departureAirportCode) {
      where.departureAirport = {
        code: departureAirportCode
      };
    }

    if (arrivalAirportCode) {
      where.arrivalAirport = {
        code: arrivalAirportCode
      };
    }

    if (departureDate) {
      const startOfDay = new Date(departureDate);
      startOfDay.setHours(0, 0, 0, 0);
      
      const endOfDay = new Date(departureDate);
      endOfDay.setHours(23, 59, 59, 999);
      
      where.departureTime = {
        gte: startOfDay,
        lte: endOfDay
      };
    }

    return this.prisma.flight.findMany({
      where,
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true,
      }
    });
  }

  async findOne(id: string) {
    const flight = await this.prisma.flight.findUnique({
      where: { id },
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true,
      }
    });

    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }

    return flight;
  }

  async create(data: any) {
    return this.prisma.flight.create({
      data,
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true,
      }
    });
  }

  async update(id: string, data: any) {
    try {
      return await this.prisma.flight.update({
        where: { id },
        data,
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true,
        }
      });
    } catch (error) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.flight.delete({
        where: { id }
      });
    } catch (error) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }
  }
  
  async getFlightSeats(id: string) {
    const flight = await this.prisma.flight.findUnique({
      where: { id },
      include: {
        flightSeats: true,
      }
    });

    if (!flight) {
      throw new NotFoundException(`Flight with ID ${id} not found`);
    }

    return flight.flightSeats;
  }
}