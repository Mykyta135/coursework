// src/controllers/flight.controller.ts
import { Controller, Get, Query, Param, HttpException, HttpStatus } from '@nestjs/common';
// import { PrismaService } from '../services/prisma.service';
import { FlightSearchDto } from './dto/flight-search.dto';
import { z } from 'zod';
import { FlightSearchSchema } from '../../schemas/validation';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('flights')
export class FlightController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll(@Query() searchParams: FlightSearchDto) {
    try {
      // Validate with Zod
      FlightSearchSchema.parse(searchParams);
      
      const { 
        departureAirportCode, 
        arrivalAirportCode, 
        departureDate, 
        returnDate,
        seatClass 
      } = searchParams;

      // Prepare date filters
      let departureDateFilter = {};
      if (departureDate) {
        const date = new Date(departureDate);
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        
        departureDateFilter = {
          departureTime: {
            gte: date,
            lt: nextDay
          }
        };
      }

      // Build the query
      const whereClause: any = {
        ...departureDateFilter,
      };

      // Add airport filters if provided
      if (departureAirportCode) {
        whereClause.departureAirport = {
          code: departureAirportCode
        };
      }
      
      if (arrivalAirportCode) {
        whereClause.arrivalAirport = {
          code: arrivalAirportCode
        };
      }

      // Get flights matching criteria
      const flights = await this.prisma.flight.findMany({
        where: whereClause,
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true,
          flightSeats: seatClass ? {
            where: {
              seatClass,
              isAvailable: true
            }
          } : {
            where: {
              isAvailable: true
            }
          }
        },
        orderBy: {
          departureTime: 'asc'
        }
      });

      // Enrich flight data with available seats count and lowest price
      const enrichedFlights = flights.map(flight => {
        const availableSeatsCount = flight.flightSeats.length;
        const lowestPrice = flight.flightSeats.length > 0 
          ? Math.min(...flight.flightSeats.map(seat => Number(seat.price)))
          : Number(flight.baseFare);
          
        return {
          id: flight.id,
          flightNumber: flight.flightNumber,
          airline: {
            name: flight.airline.name,
            code: flight.airline.code,
            logoUrl: flight.airline.logoUrl
          },
          departure: {
            airport: flight.departureAirport.name,
            code: flight.departureAirport.code,
            city: flight.departureAirport.city,
            time: flight.departureTime
          },
          arrival: {
            airport: flight.arrivalAirport.name,
            code: flight.arrivalAirport.code,
            city: flight.arrivalAirport.city,
            time: flight.arrivalTime
          },
          duration: this.calculateDuration(flight.departureTime, flight.arrivalTime),
          availableSeats: availableSeatsCount,
          lowestPrice: lowestPrice,
          status: flight.status
        };
      });

      return enrichedFlights;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid search parameters',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const flight = await this.prisma.flight.findUnique({
      where: { id },
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true,
        flightSeats: {
          where: {
            isAvailable: true
          }
        }
      }
    });

    if (!flight) {
      throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
    }

    // Group seats by class
    const seatsByClass = flight.flightSeats.reduce((acc, seat) => {
      if (!acc[seat.seatClass]) {
        acc[seat.seatClass] = [];
      }
      acc[seat.seatClass].push(seat);
      return acc;
    }, {});

    return {
      id: flight.id,
      flightNumber: flight.flightNumber,
      airline: {
        name: flight.airline.name,
        code: flight.airline.code,
        logoUrl: flight.airline.logoUrl
      },
      departure: {
        airport: flight.departureAirport.name,
        code: flight.departureAirport.code,
        city: flight.departureAirport.city,
        country: flight.departureAirport.country,
        time: flight.departureTime
      },
      arrival: {
        airport: flight.arrivalAirport.name,
        code: flight.arrivalAirport.code,
        city: flight.arrivalAirport.city,
        country: flight.arrivalAirport.country,
        time: flight.arrivalTime
      },
      duration: this.calculateDuration(flight.departureTime, flight.arrivalTime),
      baseFare: flight.baseFare,
      status: flight.status,
      seatsByClass
    };
  }

  @Get(':id/seats')
  async getFlightSeats(@Param('id') id: string, @Query('seatClass') seatClass?: string) {
    const whereClause: any = {
      flightId: id,
      isAvailable: true
    };

    if (seatClass) {
      whereClause.seatClass = seatClass;
    }

    const seats = await this.prisma.flightSeat.findMany({
      where: whereClause,
      orderBy: {
        seatNumber: 'asc'
      }
    });

    return seats;
  }

  private calculateDuration(departure: Date, arrival: Date): string {
    const diff = arrival.getTime() - departure.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  }
}

