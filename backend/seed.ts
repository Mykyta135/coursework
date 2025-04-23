import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // 1. Create an Airline
  const airline = await prisma.airline.create({
    data: {
      name: 'SkyAirways',
      code: 'SA',
      country: 'United States',
      logoUrl: 'https://example.com/skyairways.png',
    },
  });

  // 2. Create Departure and Arrival Airports
  const [jfk, lax] = await Promise.all([
    prisma.airport.create({
      data: {
        name: 'John F. Kennedy International Airport',
        code: 'JFK',
        city: 'New York',
        country: 'USA',
        timezone: 'America/New_York',
      },
    }),
    prisma.airport.create({
      data: {
        name: 'Los Angeles International Airport',
        code: 'LAX',
        city: 'Los Angeles',
        country: 'USA',
        timezone: 'America/Los_Angeles',
      },
    }),
  ]);

  // 3. Create a Flight
  const departureTime = new Date();
  departureTime.setDate(departureTime.getDate() + 7); // Fly in a week
  const arrivalTime = new Date(departureTime.getTime() + 5 * 60 * 60 * 1000); // 5-hour flight

  const flight = await prisma.flight.create({
    data: {
      flightNumber: 'SA101',
      departureTime: departureTime,
      arrivalTime: arrivalTime,
      baseFare: 250.0,
      status: 'SCHEDULED',
      airline: { connect: { id: airline.id } },
      departureAirport: { connect: { id: jfk.id } },
      arrivalAirport: { connect: { id: lax.id } },
    },
  });

  // 4. Generate Flight Seats
  const seats = Array.from({ length: 30 }, (_, i) => {
    let seatClass: 'ECONOMY' | 'BUSINESS' | 'FIRST';
    let price: number;

    if (i < 20) {
      seatClass = 'ECONOMY';
      price = 250.0;
    } else if (i < 25) {
      seatClass = 'BUSINESS';
      price = 600.0;
    } else {
      seatClass = 'FIRST';
      price = 1000.0;
    }

    return {
      seatNumber: `${seatClass.charAt(0)}${i + 1}`,
      seatClass: seatClass,
      price: price,
      isAvailable: true,
      flightId: flight.id,
    };
  });

  await prisma.flightSeat.createMany({ data: seats });

  // 5. Create User with Passenger
  const hashedPassword = await hash('password123', 12);
  const user = await prisma.user.create({
    data: {
      email: 'passenger@skyairways.com',
      passwordHash: hashedPassword,
      role: 'CUSTOMER',
      isVerified: true,
      passenger: {
        create: {
          firstName: 'Alex',
          lastName: 'Johnson',
          email: 'alex.j@example.com',
          passportNumber: 'US12345678',
          dateOfBirth: new Date('1985-04-15'),
          nationality: 'American',
        },
      },
    },
    include: { passenger: true },
  });

  // 6. Create a Booking
  const booking = await prisma.booking.create({
    data: {
      bookingReference: `BOOK-${Date.now()}`,
      status: 'CONFIRMED',
      totalAmount: 500.0, // 2 Economy seats
      user: { connect: { id: user.id } },
      flight: { connect: { id: flight.id } },
      passengers: {
        create: {
          isMainContact: true,
          passenger: { connect: { id: user.passenger!.id } },
        },
      },
    },
  });

  // 7. Reserve Seats & Create Tickets
  const seatsToBook = await prisma.flightSeat.findMany({
    where: { flightId: flight.id, isAvailable: true, seatClass: 'ECONOMY' },
    take: 2,
  });

  // Mark seats as booked
  await prisma.flightSeat.updateMany({
    where: { id: { in: seatsToBook.map((s) => s.id) } },
    data: { isAvailable: false },
  });

  // Create Tickets
  for (const seat of seatsToBook) {
    await prisma.ticket.create({
      data: {
        ticketNumber: `TKT-${flight.flightNumber}-${seat.seatNumber}`,
        status: 'ISSUED',
        booking: { connect: { id: booking.id } },
        passenger: { connect: { id: user.passenger!.id } },
        flightSeat: { connect: { id: seat.id } },
      },
    });
  }

  // 8. Record Payment
  await prisma.payment.create({
    data: {
      amount: 500.0,
      paymentMethod: 'CREDIT_CARD',
      status: 'COMPLETED',
      transactionId: `TX-${Date.now()}`,
      booking: { connect: { id: booking.id } },
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });