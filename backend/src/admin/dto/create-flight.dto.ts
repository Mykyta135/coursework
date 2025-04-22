// create-flight.dto.ts
// import { FlightStatus } from '../enums/flight-status.enum';
import { FlightStatus } from '@prisma/client';
import { 
  IsEnum, 
  IsNotEmpty, 
  IsDateString, 
  IsNumber,
  IsString
} from 'class-validator';

export class CreateFlightDto {
  @IsString()
  @IsNotEmpty()
  flightNumber: string;

  @IsDateString()
  @IsNotEmpty()
  departureTime: Date;

  @IsDateString()
  @IsNotEmpty()
  arrivalTime: Date;

  @IsNumber()
  @IsNotEmpty()
  baseFare: number;

  @IsEnum(FlightStatus)
  status: FlightStatus;

  @IsString()
  @IsNotEmpty()
  airlineId: string;

  @IsString()
  @IsNotEmpty()
  departureAirportId: string;

  @IsString()
  @IsNotEmpty()
  arrivalAirportId: string;
}