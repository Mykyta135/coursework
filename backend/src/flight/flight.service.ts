// src/flight/flight.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SeatClass } from '@prisma/client';

@Injectable()
export class FlightService {
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
  
  async getFlightSeats(id: string, seatClass?: string) {
    const where: any = { flightId: id };
    
    if (seatClass) {
      where.seatClass = seatClass as SeatClass;
    }
    
    const seats = await this.prisma.flightSeat.findMany({
      where,
      orderBy: { seatNumber: 'asc' }
    });
    
    if (seats.length === 0 && !seatClass) {
      // Verify if the flight exists
      const flight = await this.prisma.flight.findUnique({
        where: { id }
      });
      
      if (!flight) {
        throw new NotFoundException(`Flight with ID ${id} not found`);
      }
    }
    
    return seats;
  }
  
  async searchAirports(query: string) {
    if (!query || query.length < 2) {
      throw new BadRequestException('Search query must be at least 2 characters');
    }
    
    return this.prisma.airport.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { code: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } }
        ]
      },
      take: 10
    });
  }
  
  async getPopularRoutes() {
    // This is a more complex query that would need to be based on actual usage
    // Here I'm implementing a simplified version that returns the most common routes
    
    const flights = await this.prisma.flight.findMany({
      include: {
        departureAirport: true,
        arrivalAirport: true,
      },
      take: 10,
    });
    
    // Group flights by route
    const routeMap = new Map();
    
    for (const flight of flights) {
      const routeKey = `${flight.departureAirport.code}-${flight.arrivalAirport.code}`;
      
      if (!routeMap.has(routeKey)) {
        routeMap.set(routeKey, {
          departureCode: flight.departureAirport.code,
          departureCity: flight.departureAirport.city,
          arrivalCode: flight.arrivalAirport.code,
          arrivalCity: flight.arrivalAirport.city,
          flightCount: 0
        });
      }
      
      routeMap.get(routeKey).flightCount++;
    }
    
    // Convert map to array and sort by flightCount
    const routes = Array.from(routeMap.values())
      .sort((a, b) => b.flightCount - a.flightCount)
      .slice(0, 5);
    
    return routes;
  }
}