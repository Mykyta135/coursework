
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AirlineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  country: 'country',
  logoUrl: 'logoUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AirportScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  city: 'city',
  country: 'country',
  timezone: 'timezone',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FlightScalarFieldEnum = {
  id: 'id',
  flightNumber: 'flightNumber',
  departureTime: 'departureTime',
  arrivalTime: 'arrivalTime',
  baseFare: 'baseFare',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  airlineId: 'airlineId',
  departureAirportId: 'departureAirportId',
  arrivalAirportId: 'arrivalAirportId'
};

exports.Prisma.FlightSeatScalarFieldEnum = {
  id: 'id',
  seatNumber: 'seatNumber',
  seatClass: 'seatClass',
  price: 'price',
  isAvailable: 'isAvailable',
  flightId: 'flightId'
};

exports.Prisma.PassengerScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  phone: 'phone',
  passportNumber: 'passportNumber',
  dateOfBirth: 'dateOfBirth',
  nationality: 'nationality',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  isVerified: 'isVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  bookingReference: 'bookingReference',
  bookingDate: 'bookingDate',
  status: 'status',
  totalAmount: 'totalAmount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  flightId: 'flightId'
};

exports.Prisma.BookingPassengerScalarFieldEnum = {
  id: 'id',
  isMainContact: 'isMainContact',
  bookingId: 'bookingId',
  passengerId: 'passengerId'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  ticketNumber: 'ticketNumber',
  issueDate: 'issueDate',
  status: 'status',
  boardingPass: 'boardingPass',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  bookingId: 'bookingId',
  passengerId: 'passengerId',
  flightSeatId: 'flightSeatId'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  paymentMethod: 'paymentMethod',
  paymentDate: 'paymentDate',
  transactionId: 'transactionId',
  status: 'status',
  bookingId: 'bookingId'
};

exports.Prisma.RefundScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  reason: 'reason',
  status: 'status',
  requestDate: 'requestDate',
  processedDate: 'processedDate',
  ticketId: 'ticketId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.FlightStatus = exports.$Enums.FlightStatus = {
  SCHEDULED: 'SCHEDULED',
  DELAYED: 'DELAYED',
  CANCELLED: 'CANCELLED',
  BOARDING: 'BOARDING',
  IN_FLIGHT: 'IN_FLIGHT',
  LANDED: 'LANDED',
  COMPLETED: 'COMPLETED'
};

exports.SeatClass = exports.$Enums.SeatClass = {
  ECONOMY: 'ECONOMY',
  PREMIUM_ECONOMY: 'PREMIUM_ECONOMY',
  BUSINESS: 'BUSINESS',
  FIRST: 'FIRST'
};

exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.TicketStatus = exports.$Enums.TicketStatus = {
  ISSUED: 'ISSUED',
  CHECKED_IN: 'CHECKED_IN',
  BOARDED: 'BOARDED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  PAYPAL: 'PAYPAL',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.RefundStatus = exports.$Enums.RefundStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  PROCESSED: 'PROCESSED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  Airline: 'Airline',
  Airport: 'Airport',
  Flight: 'Flight',
  FlightSeat: 'FlightSeat',
  Passenger: 'Passenger',
  User: 'User',
  Booking: 'Booking',
  BookingPassenger: 'BookingPassenger',
  Ticket: 'Ticket',
  Payment: 'Payment',
  Refund: 'Refund'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
