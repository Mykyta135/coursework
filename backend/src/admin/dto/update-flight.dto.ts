// update-flight.dto.ts

import { FlightStatus } from '@prisma/client';
import { 
  IsEnum, 
  IsOptional, 
  IsDateString, 
  IsNumber,
  IsString
} from 'class-validator';

export class UpdateFlightDto {
  @IsOptional()
  @IsString()
  flightNumber?: string;

  @IsOptional()
  @IsDateString()
  departureTime?: Date;

  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @IsOptional()
  @IsNumber()
  baseFare?: number;

  @IsOptional()
  @IsEnum(FlightStatus)
  status?: FlightStatus;

  @IsOptional()
  @IsString()
  airline?: { connect: { id: string } };

  @IsOptional()
  @IsString()
  departureAirport?: { connect: { id: string } };

  @IsOptional()
  @IsString()
  arrivalAirport?: { connect: { id: string } };
}