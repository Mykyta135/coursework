// src/dto/flight-search.dto.ts
import { SeatClass } from '@prisma/client';

export class FlightSearchDto {
  departureAirportCode?: string;
  arrivalAirportCode?: string;
  departureDate?: string; // Format: YYYY-MM-DD
  returnDate?: string;    // Format: YYYY-MM-DD
  passengers?: number;
  seatClass?: SeatClass;
}