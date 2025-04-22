
// src/controllers/user.controller.ts
import { 
  Controller, 
  Get, 
  Put, 
  Body, 
  UseGuards, 
  Req, 
  HttpException, 
  HttpStatus 
} from '@nestjs/common';
import { z } from 'zod';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PassengerSchema } from 'schemas/validation';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private prisma: PrismaService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('bookings')
  async getUserBookings(@Req() req) {
    const bookings = await this.prisma.booking.findMany({
      where: { userId: req.user.id },
      include: {
        flight: {
          include: {
            airline: true,
            departureAirport: true,
            arrivalAirport: true
          }
        },
        tickets: {
          include: {
            passenger: true,
            flightSeat: true
          }
        },
        payments: true
      },
      orderBy: {
        bookingDate: 'desc'
      }
    });
    
    return bookings;
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('tickets')
  async getUserTickets(@Req() req) {
    // Get all user's bookings
    const bookings = await this.prisma.booking.findMany({
      where: { userId: req.user.id },
      select: { id: true }
    });
    
    const bookingIds = bookings.map(booking => booking.id);
    
    // Get all tickets for these bookings
    const tickets = await this.prisma.ticket.findMany({
      where: {
        bookingId: { in: bookingIds }
      },
      include: {
        passenger: true,
        flightSeat: true,
        booking: {
          include: {
            flight: {
              include: {
                airline: true,
                departureAirport: true,
                arrivalAirport: true
              }
            }
          }
        },
        refund: true
      },
      orderBy: {
        issueDate: 'desc'
      }
    });
    
    return tickets;
  }
  
  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@Body() updateProfileDto: UpdateProfileDto, @Req() req) {
    try {
      // Validate with Zod
      PassengerSchema.parse({
        ...updateProfileDto,
        email: req.user.email // Keep the email from the token
      });
      
      // Find passenger record associated with user
      let passenger = await this.prisma.passenger.findFirst({
        where: { userId: req.user.id }
      });
      
      if (passenger) {
        // Update existing passenger record
        passenger = await this.prisma.passenger.update({
          where: { id: passenger.id },
          data: {
            firstName: updateProfileDto.firstName,
            lastName: updateProfileDto.lastName,
            phone: updateProfileDto.phone,
            passportNumber: updateProfileDto.passportNumber,
            dateOfBirth: updateProfileDto.dateOfBirth,
            nationality: updateProfileDto.nationality
          }
        });
      } else {
        // Create new passenger record
        passenger = await this.prisma.passenger.create({
          data: {
            firstName: updateProfileDto.firstName,
            lastName: updateProfileDto.lastName,
            email: req.user.email,
            phone: updateProfileDto.phone,
            passportNumber: updateProfileDto.passportNumber,
            dateOfBirth: updateProfileDto.dateOfBirth,
            nationality: updateProfileDto.nationality,
            userId: req.user.id
          }
        });
      }
      
      return passenger;
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid profile data',
          details: error.errors
        }, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }
}
