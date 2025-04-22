import { SeatClass } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateFlightSeatDto {
  @IsNotEmpty()
  seatNumber: string;

  @IsEnum(SeatClass)
  seatClass: SeatClass;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}