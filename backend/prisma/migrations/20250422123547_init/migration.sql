-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'STAFF', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "FlightStatus" AS ENUM ('SCHEDULED', 'DELAYED', 'CANCELLED', 'BOARDING', 'IN_FLIGHT', 'LANDED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "SeatClass" AS ENUM ('ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('ISSUED', 'CHECKED_IN', 'BOARDED', 'COMPLETED', 'CANCELLED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'BANK_TRANSFER');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'APPROVED', 'PROCESSED', 'REJECTED');

-- CreateTable
CREATE TABLE "Airline" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "logoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Airline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Airport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "departureTime" TIMESTAMP(3) NOT NULL,
    "arrivalTime" TIMESTAMP(3) NOT NULL,
    "baseFare" DECIMAL(10,2) NOT NULL,
    "status" "FlightStatus" NOT NULL DEFAULT 'SCHEDULED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "airlineId" TEXT NOT NULL,
    "departureAirportId" TEXT NOT NULL,
    "arrivalAirportId" TEXT NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlightSeat" (
    "id" TEXT NOT NULL,
    "seatNumber" TEXT NOT NULL,
    "seatClass" "SeatClass" NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "flightId" TEXT NOT NULL,

    CONSTRAINT "FlightSeat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "passportNumber" TEXT,
    "dateOfBirth" TIMESTAMP(3),
    "nationality" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "bookingReference" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "totalAmount" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "flightId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingPassenger" (
    "id" TEXT NOT NULL,
    "isMainContact" BOOLEAN NOT NULL DEFAULT false,
    "bookingId" TEXT NOT NULL,
    "passengerId" TEXT NOT NULL,

    CONSTRAINT "BookingPassenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "ticketNumber" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "TicketStatus" NOT NULL DEFAULT 'ISSUED',
    "boardingPass" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bookingId" TEXT NOT NULL,
    "passengerId" TEXT NOT NULL,
    "flightSeatId" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionId" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Refund" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "reason" TEXT,
    "status" "RefundStatus" NOT NULL DEFAULT 'PENDING',
    "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedDate" TIMESTAMP(3),
    "ticketId" TEXT NOT NULL,

    CONSTRAINT "Refund_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airline_name_key" ON "Airline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_code_key" ON "Airline"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");

-- CreateIndex
CREATE INDEX "Flight_departureTime_idx" ON "Flight"("departureTime");

-- CreateIndex
CREATE INDEX "Flight_arrivalTime_idx" ON "Flight"("arrivalTime");

-- CreateIndex
CREATE INDEX "Flight_departureAirportId_idx" ON "Flight"("departureAirportId");

-- CreateIndex
CREATE INDEX "Flight_arrivalAirportId_idx" ON "Flight"("arrivalAirportId");

-- CreateIndex
CREATE UNIQUE INDEX "Flight_flightNumber_departureTime_key" ON "Flight"("flightNumber", "departureTime");

-- CreateIndex
CREATE UNIQUE INDEX "FlightSeat_flightId_seatNumber_key" ON "FlightSeat"("flightId", "seatNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_email_key" ON "Passenger"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_userId_key" ON "Passenger"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_bookingReference_key" ON "Booking"("bookingReference");

-- CreateIndex
CREATE INDEX "Booking_bookingReference_idx" ON "Booking"("bookingReference");

-- CreateIndex
CREATE INDEX "Booking_userId_idx" ON "Booking"("userId");

-- CreateIndex
CREATE INDEX "Booking_bookingDate_idx" ON "Booking"("bookingDate");

-- CreateIndex
CREATE UNIQUE INDEX "BookingPassenger_bookingId_passengerId_key" ON "BookingPassenger"("bookingId", "passengerId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticketNumber_key" ON "Ticket"("ticketNumber");

-- CreateIndex
CREATE INDEX "Ticket_ticketNumber_idx" ON "Ticket"("ticketNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_transactionId_key" ON "Payment"("transactionId");

-- CreateIndex
CREATE INDEX "Payment_transactionId_idx" ON "Payment"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Refund_ticketId_key" ON "Refund"("ticketId");

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_departureAirportId_fkey" FOREIGN KEY ("departureAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flight" ADD CONSTRAINT "Flight_arrivalAirportId_fkey" FOREIGN KEY ("arrivalAirportId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlightSeat" ADD CONSTRAINT "FlightSeat_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingPassenger" ADD CONSTRAINT "BookingPassenger_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingPassenger" ADD CONSTRAINT "BookingPassenger_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_flightSeatId_fkey" FOREIGN KEY ("flightSeatId") REFERENCES "FlightSeat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Refund" ADD CONSTRAINT "Refund_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
