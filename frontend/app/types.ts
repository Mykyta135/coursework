// src/types/index.ts
export enum UserRole {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    CUSTOMER = "CUSTOMER"
  }
  
  export enum FlightStatus {
    SCHEDULED = "SCHEDULED",
    DELAYED = "DELAYED",
    CANCELLED = "CANCELLED",
    BOARDING = "BOARDING",
    IN_FLIGHT = "IN_FLIGHT",
    LANDED = "LANDED",
    COMPLETED = "COMPLETED"
  }
  
  export enum SeatClass {
    ECONOMY = "ECONOMY",
    PREMIUM_ECONOMY = "PREMIUM_ECONOMY",
    BUSINESS = "BUSINESS",
    FIRST = "FIRST"
  }
  
  export enum BookingStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
  }
  
  export enum TicketStatus {
    ISSUED = "ISSUED",
    CHECKED_IN = "CHECKED_IN",
    BOARDED = "BOARDED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED"
  }
  
  export enum PaymentMethod {
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    PAYPAL = "PAYPAL",
    BANK_TRANSFER = "BANK_TRANSFER"
  }
  
  export enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
  }
  
  export enum RefundStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    PROCESSED = "PROCESSED",
    REJECTED = "REJECTED"
  }
  
  export interface Airline {
    id: string;
    name: string;
    code: string;
    country: string;
    logoUrl?: string;
  }
  
  export interface Airport {
    id: string;
    name: string;
    code: string;
    city: string;
    country: string;
    timezone: string;
  }
  
  export interface Flight {
    id: string;
    flightNumber: string;
    airline: {
      name: string;
      code: string;
      logoUrl?: string;
    };
    departure: {
      airport: string;
      code: string;
      city: string;
      time: string;
    };
    arrival: {
      airport: string;
      code: string;
      city: string;
      time: string;
    };
    duration: string;
    availableSeats?: number;
    lowestPrice?: number;
    status: FlightStatus;
    baseFare?: number;
    seatsByClass?: Record<SeatClass, FlightSeat[]>;
  }
  
  export interface FlightSeat {
    id: string;
    seatNumber: string;
    seatClass: SeatClass;
    price: number;
    isAvailable: boolean;
    flightId: string;
  }
  
  export interface Passenger {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    passportNumber?: string;
    dateOfBirth?: string;
    nationality?: string;
    userId?: string;
  }
  
  export interface User {
    id: string;
    email: string;
    role: UserRole;
    isVerified: boolean;
    token: string,
    passenger?: Passenger;
  }
  
  export interface Booking {
    id: string;
    bookingReference: string;
    bookingDate: string;
    status: BookingStatus;
    totalAmount: number;
    userId: string;
    flightId: string;
    flight: Flight;
    tickets: Ticket[];
    payments: Payment[];
  }
  
  export interface BookingPassenger {
    id: string;
    isMainContact: boolean;
    bookingId: string;
    passengerId: string;
    passenger: Passenger;
  }
  
  export interface Ticket {
    id: string;
    ticketNumber: string;
    issueDate: string;
    status: TicketStatus;
    boardingPass?: string;
    bookingId: string;
    passengerId: string;
    flightSeatId: string;
    passenger: Passenger;
    flightSeat: FlightSeat;
    booking: Booking;
    refund?: Refund;
  }
  
  export interface Payment {
    id: string;
    amount: number;
    paymentMethod: PaymentMethod;
    paymentDate: string;
    transactionId?: string;
    status: PaymentStatus;
    bookingId: string;
  }
  
  export interface Refund {
    id: string;
    amount: number;
    reason?: string;
    status: RefundStatus;
    requestDate: string;
    processedDate?: string;
    ticketId: string;
  }