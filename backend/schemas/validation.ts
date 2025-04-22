// src/schemas/validation.ts
import { z } from "zod";

// Enum schemas
export const UserRoleSchema = z.enum(["ADMIN", "STAFF", "CUSTOMER"]);

export const FlightStatusSchema = z.enum([
  "SCHEDULED",
  "DELAYED",
  "CANCELLED",
  "BOARDING",
  "IN_FLIGHT",
  "LANDED",
  "COMPLETED",
]);

export const SeatClassSchema = z.enum([
  "ECONOMY",
  "PREMIUM_ECONOMY",
  "BUSINESS",
  "FIRST",
]);

export const BookingStatusSchema = z.enum([
  "PENDING",
  "CONFIRMED",
  "COMPLETED",
  "CANCELLED",
]);

export const TicketStatusSchema = z.enum([
  "ISSUED",
  "CHECKED_IN",
  "BOARDED",
  "COMPLETED",
  "CANCELLED",
  "REFUNDED",
]);

export const PaymentMethodSchema = z.enum([
  "CREDIT_CARD",
  "DEBIT_CARD",
  "PAYPAL",
  "BANK_TRANSFER",
]);

export const PaymentStatusSchema = z.enum([
  "PENDING",
  "COMPLETED",
  "FAILED",
  "REFUNDED",
]);

export const RefundStatusSchema = z.enum([
  "PENDING",
  "APPROVED",
  "PROCESSED",
  "REJECTED",
]);

// Entity schemas
export const AirlineSchema = z.object({
  name: z.string().min(2).max(100),
  code: z.string().length(2),
  country: z.string().min(2).max(100),
  logoUrl: z.string().url().optional(),
});

export const AirportSchema = z.object({
  name: z.string().min(2).max(100),
  code: z.string().length(3),
  city: z.string().min(2).max(100),
  country: z.string().min(2).max(100),
  timezone: z.string(),
});

export const FlightSchema = z.object({
  flightNumber: z.string().min(2).max(10),
  departureTime: z.date(),
  arrivalTime: z.date(),
  baseFare: z.number().positive(),
  status: FlightStatusSchema,
  airlineId: z.string(),
  departureAirportId: z.string(),
  arrivalAirportId: z.string(),
}).refine(
  data => data.arrivalTime > data.departureTime,
  { message: "Arrival time must be after departure time" }
);

export const FlightSeatSchema = z.object({
  seatNumber: z.string().min(1).max(10),
  seatClass: SeatClassSchema,
  price: z.number().positive(),
  isAvailable: z.boolean(),
  flightId: z.string(),
});

export const PassengerSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  passportNumber: z.string().optional(),
  dateOfBirth: z.date().optional(),
  nationality: z.string().optional(),
  userId: z.string().optional(),
});

export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  role: UserRoleSchema.optional(),
  isVerified: z.boolean().optional(),
});

export const BookingSchema = z.object({
  bookingReference: z.string().optional(),
  status: BookingStatusSchema.optional(),
  totalAmount: z.number().positive(),
  userId: z.string(),
  flightId: z.string(),
});

export const BookingPassengerSchema = z.object({
  isMainContact: z.boolean().optional(),
  bookingId: z.string(),
  passengerId: z.string(),
});

export const TicketSchema = z.object({
  ticketNumber: z.string().optional(),
  status: TicketStatusSchema.optional(),
  boardingPass: z.string().optional(),
  bookingId: z.string(),
  passengerId: z.string(),
  flightSeatId: z.string(),
});

export const PaymentSchema = z.object({
  amount: z.number().positive(),
  paymentMethod: PaymentMethodSchema,
  transactionId: z.string().optional(),
  status: PaymentStatusSchema.optional(),
  bookingId: z.string(),
});

export const RefundSchema = z.object({
  amount: z.number().positive(),
  reason: z.string().optional(),
  status: RefundStatusSchema.optional(),
  processedDate: z.date().optional(),
  ticketId: z.string(),
});

// Search schemas
export const FlightSearchSchema = z.object({
  departureAirportCode: z.string().optional(),
  arrivalAirportCode: z.string().optional(),
  departureDate: z.date().optional(),
  returnDate: z.date().optional(),
  passengers: z.number().int().positive().optional(),
  seatClass: SeatClassSchema.optional(),
});