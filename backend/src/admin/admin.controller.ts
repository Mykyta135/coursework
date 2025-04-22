// src/controllers/admin/admin.controller.ts
import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  Query,
  UseGuards,
  HttpException,
  HttpStatus 
} from '@nestjs/common';

import { z } from 'zod';
import { 
  FlightSchema, 
  FlightSeatSchema, 
  AirlineSchema, 
  AirportSchema 
} from '../../schemas/validation';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { CreateFlightSeatDto } from './dto/create-flight-seat.dto';
import { CreateAirlineDto } from './dto/create-airliine.dto';
import { CreateAirportDto } from './dto/create-airport.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guards';
import { BookingStatus, FlightStatus } from '@prisma/client';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AdminController {
  constructor(private prisma: PrismaService) {}

  // Dashboard statistics
  @Get('dashboard')
  async getDashboardStats() {
    const now = new Date();
    const today = new Date(now.setHours(0, 0, 0, 0));
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const [
      totalFlights,
      totalBookings,
      totalPayments,
      dailyBookings,
      flightsByStatus,
      recentBookings,
      upcomingFlights
    ] = await Promise.all([
      // Total flights count
      this.prisma.flight.count(),
      
      // Total bookings count
      this.prisma.booking.count(),
      
      // Total payments amount
      this.prisma.payment.aggregate({
        _sum: { amount: true },
        where: { status: 'COMPLETED' }
      }),
      
      // Today's bookings
      this.prisma.booking.count({
        where: {
          bookingDate: {
            gte: today,
            lt: tomorrow
          }
        }
      }),
      
      // Flights by status
      this.prisma.flight.groupBy({
        by: ['status'],
        _count: true
      }),
      
      // Recent bookings
      this.prisma.booking.findMany({
        take: 5,
        orderBy: { bookingDate: 'desc' },
        include: {
          user: true,
          flight: {
            include: {
              airline: true,
              departureAirport: true,
              arrivalAirport: true
            }
          }
        }
      }),
      
      // Upcoming flights
      this.prisma.flight.findMany({
        where: {
          departureTime: {
            gte: now
          }
        },
        take: 5,
        orderBy: { departureTime: 'asc' },
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true,
          _count: {
            select: { bookings: true }
          }
        }
      })
    ]);

    return {
      statistics: {
        totalFlights,
        totalBookings,
        totalRevenue: totalPayments._sum.amount || 0,
        dailyBookings
      },
      flightsByStatus,
      recentBookings,
      upcomingFlights
    };
  }

  // Flight management
  @Get('flights')
  async getAllFlights(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('status') status?: string,
    @Query('search') search?: string
  ) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;
    
    const where: any = {};
    
    if (status) {
      where.status = status;
    }
    
    if (search) {
      where.OR = [
        { flightNumber: { contains: search, mode: 'insensitive' } },
        { airline: { name: { contains: search, mode: 'insensitive' } } },
        { departureAirport: { name: { contains: search, mode: 'insensitive' } } },
        { departureAirport: { code: { contains: search, mode: 'insensitive' } } },
        { arrivalAirport: { name: { contains: search, mode: 'insensitive' } } },
        { arrivalAirport: { code: { contains: search, mode: 'insensitive' } } }
      ];
    }
    
    const [flights, totalCount] = await Promise.all([
      this.prisma.flight.findMany({
        where,
        skip,
        take: limitNumber,
        orderBy: { departureTime: 'asc' },
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true,
          _count: {
            select: {
              bookings: true,
              flightSeats: true
            }
          }
        }
      }),
      this.prisma.flight.count({ where })
    ]);
    
    return {
      data: flights,
      meta: {
        page: pageNumber,
        limit: limitNumber,
        totalCount,
        totalPages: Math.ceil(totalCount / limitNumber)
      }
    };
  }
  
  @Get('flights/:id')
  async getFlight(@Param('id') id: string) {
    const flight = await this.prisma.flight.findUnique({
      where: { id },
      include: {
        airline: true,
        departureAirport: true,
        arrivalAirport: true,
        flightSeats: true,
        bookings: {
          include: {
            user: true,
            tickets: {
              include: {
                passenger: true
              }
            }
          }
        }
      }
    });
    
    if (!flight) {
      throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
    }
    
    return flight;
  }
  
  @Post('flights')
  async createFlight(@Body() createFlightDto: CreateFlightDto) {
    try {
      // Validate with Zod
      FlightSchema.parse(createFlightDto);
      
      // Check if airline exists
      const airline = await this.prisma.airline.findUnique({
        where: { id: createFlightDto.airlineId }
      });
      
      if (!airline) {
        throw new HttpException('Airline not found', HttpStatus.NOT_FOUND);
      }
      
      // Check if airports exist
      const [departureAirport, arrivalAirport] = await Promise.all([
        this.prisma.airport.findUnique({
          where: { id: createFlightDto.departureAirportId }
        }),
        this.prisma.airport.findUnique({
          where: { id: createFlightDto.arrivalAirportId }
        })
      ]);
      
      if (!departureAirport) {
        throw new HttpException('Departure airport not found', HttpStatus.NOT_FOUND);
      }
      
      if (!arrivalAirport) {
        throw new HttpException('Arrival airport not found', HttpStatus.NOT_FOUND);
      }
      
      // Create flight
      const flight = await this.prisma.flight.create({
        data: {
          ...createFlightDto,
          status: createFlightDto.status as FlightStatus, // Explicit enum casting
          departureTime: new Date(createFlightDto.departureTime),
          arrivalTime: new Date(createFlightDto.arrivalTime),
        },
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true
        }
      });
      
      return flight;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid flight data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  @Put('flights/:id')
  async updateFlight(
    @Param('id') id: string,
    @Body() updateFlightDto: UpdateFlightDto
  ) {
    try {
      // Check if flight exists
      const flight = await this.prisma.flight.findUnique({
        where: { id }
      });
      
      if (!flight) {
        throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
      }
      
      // Update flight
      const updatedFlight = await this.prisma.flight.update({
        where: { id },
        data: updateFlightDto,
        include: {
          airline: true,
          departureAirport: true,
          arrivalAirport: true
        }
      });
      
      return updatedFlight;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid flight data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  @Delete('flights/:id')
  async deleteFlight(@Param('id') id: string) {
    // Check if flight exists
    const flight = await this.prisma.flight.findUnique({
      where: { id },
      include: {
        bookings: true
      }
    });
    
    if (!flight) {
      throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
    }
    
    // Check if there are any bookings for this flight
    if (flight.bookings.length > 0) {
      throw new HttpException(
        'Cannot delete flight with existing bookings',
        HttpStatus.BAD_REQUEST
      );
    }
    
    // Delete flight seats first
    await this.prisma.flightSeat.deleteMany({
      where: { flightId: id }
    });
    
    // Delete flight
    await this.prisma.flight.delete({
      where: { id }
    });
    
    return {
      success: true,
      message: 'Flight deleted successfully'
    };
  }
  
  // Flight seats management
  @Post('flights/:flightId/seats')
  async createFlightSeat(
    @Param('flightId') flightId: string,
    @Body() createFlightSeatDto: CreateFlightSeatDto
  ) {
    try {
      // Validate with Zod
      FlightSeatSchema.parse({
        ...createFlightSeatDto,
        flightId
      });
      
      // Check if flight exists
      const flight = await this.prisma.flight.findUnique({
        where: { id: flightId }
      });
      
      if (!flight) {
        throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
      }
      
      // Check if seat already exists
      const existingSeat = await this.prisma.flightSeat.findFirst({
        where: {
          flightId,
          seatNumber: createFlightSeatDto.seatNumber
        }
      });
      
      if (existingSeat) {
        throw new HttpException(
          'Seat with this number already exists for this flight',
          HttpStatus.CONFLICT
        );
      }
      
      // Create flight seat
      const flightSeat = await this.prisma.flightSeat.create({
        data: {
          ...createFlightSeatDto,
          flightId
        }
      });
      
      return flightSeat;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid flight seat data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  @Post('flights/:flightId/seats/bulk')
  async createFlightSeatsBulk(
    @Param('flightId') flightId: string,
    @Body() data: { seats: CreateFlightSeatDto[] }
  ) {
    try {
      // Check if flight exists
      const flight = await this.prisma.flight.findUnique({
        where: { id: flightId }
      });
      
      if (!flight) {
        throw new HttpException('Flight not found', HttpStatus.NOT_FOUND);
      }
      
      // Create seats in a transaction
      const createdSeats = await this.prisma.$transaction(
        data.seats.map(seatData => 
          this.prisma.flightSeat.create({
            data: {
              ...seatData,
              flightId
            }
          })
        )
      );
      
      return {
        success: true,
        count: createdSeats.length,
        seats: createdSeats
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid flight seat data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  // Airline management
  @Get('airlines')
  async getAllAirlines() {
    const airlines = await this.prisma.airline.findMany({
      include: {
        _count: {
          select: { flights: true }
        }
      }
    });
    
    return airlines;
  }
  
  @Post('airlines')
  async createAirline(@Body() createAirlineDto: CreateAirlineDto) {
    try {
      // Validate with Zod
      AirlineSchema.parse(createAirlineDto);
      
      // Check if airline code already exists
      const existingAirline = await this.prisma.airline.findUnique({
        where: { code: createAirlineDto.code }
      });
      
      if (existingAirline) {
        throw new HttpException(
          'Airline with this code already exists',
          HttpStatus.CONFLICT
        );
      }
      
      // Create airline
      const airline = await this.prisma.airline.create({
        data: createAirlineDto
      });
      
      return airline;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid airline data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  // Airport management
  @Get('airports')
  async getAllAirports() {
    const airports = await this.prisma.airport.findMany();
    return airports;
  }
  
  @Post('airports')
  async createAirport(@Body() createAirportDto: CreateAirportDto) {
    try {
      // Validate with Zod
      AirportSchema.parse(createAirportDto);
      
      // Check if airport code already exists
      const existingAirport = await this.prisma.airport.findUnique({
        where: { code: createAirportDto.code }
      });
      
      if (existingAirport) {
        throw new HttpException(
          'Airport with this code already exists',
          HttpStatus.CONFLICT
        );
      }
      
      // Create airport
      const airport = await this.prisma.airport.create({
        data: createAirportDto
      });
      
      return airport;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid airport data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
  
  // Booking management
  @Get('bookings')
  async getAllBookings(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('status') status?: string
  ) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;
    
    const where: any = {};
    
    if (status) {
      where.status = status;
    }
    
    const [bookings, totalCount] = await Promise.all([
      this.prisma.booking.findMany({
        where,
        skip,
        take: limitNumber,
        orderBy: { bookingDate: 'desc' },
        include: {
          user: true,
          flight: {
            include: {
              airline: true,
              departureAirport: true,
              arrivalAirport: true
            }
          },
          payments: true,
          tickets: {
            include: {
              passenger: true
            }
          }
        }
      }),
      this.prisma.booking.count({ where })
    ]);
    
    return {
      data: bookings,
      meta: {
        page: pageNumber,
        limit: limitNumber,
        totalCount,
        totalPages: Math.ceil(totalCount / limitNumber)
      }
    };
  }
  
  @Put('bookings/:id/status')
  async updateBookingStatus(
    @Param('id') id: string,
    @Body() data: { status: BookingStatus }
  ) {
    // Check if booking exists
    const booking = await this.prisma.booking.findUnique({
      where: { id }
    });
    
    if (!booking) {
      throw new HttpException('Booking not found', HttpStatus.NOT_FOUND);
    }
    
    // Update booking status
    const updatedBooking = await this.prisma.booking.update({
      where: { id },
      data: { status: data.status },
      include: {
        user: true,
        flight: {
          include: {
            airline: true
          }
        }
      }
    });
    
    return updatedBooking;
  }
}