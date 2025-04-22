// src/dto/create-booking.dto.ts
export class PassengerDto {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    passportNumber?: string;
    dateOfBirth?: Date;
    nationality?: string;
    isMainContact?: boolean;
  }
  
  export class CreateBookingDto {
    flightId: string;
    passengers: PassengerDto[];
    selectedSeats: string[]; // Array of FlightSeat IDs
  }