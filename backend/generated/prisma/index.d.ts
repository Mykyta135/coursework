
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Airline
 * 
 */
export type Airline = $Result.DefaultSelection<Prisma.$AirlinePayload>
/**
 * Model Airport
 * 
 */
export type Airport = $Result.DefaultSelection<Prisma.$AirportPayload>
/**
 * Model Flight
 * 
 */
export type Flight = $Result.DefaultSelection<Prisma.$FlightPayload>
/**
 * Model FlightSeat
 * 
 */
export type FlightSeat = $Result.DefaultSelection<Prisma.$FlightSeatPayload>
/**
 * Model Passenger
 * 
 */
export type Passenger = $Result.DefaultSelection<Prisma.$PassengerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model BookingPassenger
 * 
 */
export type BookingPassenger = $Result.DefaultSelection<Prisma.$BookingPassengerPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const FlightStatus: {
  SCHEDULED: 'SCHEDULED',
  DELAYED: 'DELAYED',
  CANCELLED: 'CANCELLED',
  BOARDING: 'BOARDING',
  IN_FLIGHT: 'IN_FLIGHT',
  LANDED: 'LANDED',
  COMPLETED: 'COMPLETED'
};

export type FlightStatus = (typeof FlightStatus)[keyof typeof FlightStatus]


export const SeatClass: {
  ECONOMY: 'ECONOMY',
  PREMIUM_ECONOMY: 'PREMIUM_ECONOMY',
  BUSINESS: 'BUSINESS',
  FIRST: 'FIRST'
};

export type SeatClass = (typeof SeatClass)[keyof typeof SeatClass]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const TicketStatus: {
  ISSUED: 'ISSUED',
  CHECKED_IN: 'CHECKED_IN',
  BOARDED: 'BOARDED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  PAYPAL: 'PAYPAL',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const RefundStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  PROCESSED: 'PROCESSED',
  REJECTED: 'REJECTED'
};

export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type FlightStatus = $Enums.FlightStatus

export const FlightStatus: typeof $Enums.FlightStatus

export type SeatClass = $Enums.SeatClass

export const SeatClass: typeof $Enums.SeatClass

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type RefundStatus = $Enums.RefundStatus

export const RefundStatus: typeof $Enums.RefundStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Airlines
 * const airlines = await prisma.airline.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Airlines
   * const airlines = await prisma.airline.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.airline`: Exposes CRUD operations for the **Airline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airlines
    * const airlines = await prisma.airline.findMany()
    * ```
    */
  get airline(): Prisma.AirlineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airport`: Exposes CRUD operations for the **Airport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airport.findMany()
    * ```
    */
  get airport(): Prisma.AirportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flight`: Exposes CRUD operations for the **Flight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flight.findMany()
    * ```
    */
  get flight(): Prisma.FlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flightSeat`: Exposes CRUD operations for the **FlightSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightSeats
    * const flightSeats = await prisma.flightSeat.findMany()
    * ```
    */
  get flightSeat(): Prisma.FlightSeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passenger`: Exposes CRUD operations for the **Passenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passengers
    * const passengers = await prisma.passenger.findMany()
    * ```
    */
  get passenger(): Prisma.PassengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingPassenger`: Exposes CRUD operations for the **BookingPassenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingPassengers
    * const bookingPassengers = await prisma.bookingPassenger.findMany()
    * ```
    */
  get bookingPassenger(): Prisma.BookingPassengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "airline" | "airport" | "flight" | "flightSeat" | "passenger" | "user" | "booking" | "bookingPassenger" | "ticket" | "payment" | "refund"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Airline: {
        payload: Prisma.$AirlinePayload<ExtArgs>
        fields: Prisma.AirlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findFirst: {
            args: Prisma.AirlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findMany: {
            args: Prisma.AirlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          create: {
            args: Prisma.AirlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          createMany: {
            args: Prisma.AirlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirlineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          delete: {
            args: Prisma.AirlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          update: {
            args: Prisma.AirlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          deleteMany: {
            args: Prisma.AirlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AirlineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          upsert: {
            args: Prisma.AirlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          aggregate: {
            args: Prisma.AirlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirline>
          }
          groupBy: {
            args: Prisma.AirlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirlineCountArgs<ExtArgs>
            result: $Utils.Optional<AirlineCountAggregateOutputType> | number
          }
        }
      }
      Airport: {
        payload: Prisma.$AirportPayload<ExtArgs>
        fields: Prisma.AirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findFirst: {
            args: Prisma.AirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findMany: {
            args: Prisma.AirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          create: {
            args: Prisma.AirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          createMany: {
            args: Prisma.AirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          delete: {
            args: Prisma.AirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          update: {
            args: Prisma.AirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          deleteMany: {
            args: Prisma.AirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AirportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          upsert: {
            args: Prisma.AirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          aggregate: {
            args: Prisma.AirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirport>
          }
          groupBy: {
            args: Prisma.AirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirportCountAggregateOutputType> | number
          }
        }
      }
      Flight: {
        payload: Prisma.$FlightPayload<ExtArgs>
        fields: Prisma.FlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findFirst: {
            args: Prisma.FlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findMany: {
            args: Prisma.FlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          create: {
            args: Prisma.FlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          createMany: {
            args: Prisma.FlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          delete: {
            args: Prisma.FlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          update: {
            args: Prisma.FlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          deleteMany: {
            args: Prisma.FlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          upsert: {
            args: Prisma.FlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          aggregate: {
            args: Prisma.FlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlight>
          }
          groupBy: {
            args: Prisma.FlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightCountArgs<ExtArgs>
            result: $Utils.Optional<FlightCountAggregateOutputType> | number
          }
        }
      }
      FlightSeat: {
        payload: Prisma.$FlightSeatPayload<ExtArgs>
        fields: Prisma.FlightSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          findFirst: {
            args: Prisma.FlightSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          findMany: {
            args: Prisma.FlightSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>[]
          }
          create: {
            args: Prisma.FlightSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          createMany: {
            args: Prisma.FlightSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightSeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>[]
          }
          delete: {
            args: Prisma.FlightSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          update: {
            args: Prisma.FlightSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          deleteMany: {
            args: Prisma.FlightSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlightSeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>[]
          }
          upsert: {
            args: Prisma.FlightSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightSeatPayload>
          }
          aggregate: {
            args: Prisma.FlightSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightSeat>
          }
          groupBy: {
            args: Prisma.FlightSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightSeatCountArgs<ExtArgs>
            result: $Utils.Optional<FlightSeatCountAggregateOutputType> | number
          }
        }
      }
      Passenger: {
        payload: Prisma.$PassengerPayload<ExtArgs>
        fields: Prisma.PassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findFirst: {
            args: Prisma.PassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findMany: {
            args: Prisma.PassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          create: {
            args: Prisma.PassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          createMany: {
            args: Prisma.PassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          delete: {
            args: Prisma.PassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          update: {
            args: Prisma.PassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          deleteMany: {
            args: Prisma.PassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          upsert: {
            args: Prisma.PassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          aggregate: {
            args: Prisma.PassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassenger>
          }
          groupBy: {
            args: Prisma.PassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassengerCountArgs<ExtArgs>
            result: $Utils.Optional<PassengerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      BookingPassenger: {
        payload: Prisma.$BookingPassengerPayload<ExtArgs>
        fields: Prisma.BookingPassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingPassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingPassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          findFirst: {
            args: Prisma.BookingPassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingPassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          findMany: {
            args: Prisma.BookingPassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>[]
          }
          create: {
            args: Prisma.BookingPassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          createMany: {
            args: Prisma.BookingPassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingPassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>[]
          }
          delete: {
            args: Prisma.BookingPassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          update: {
            args: Prisma.BookingPassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          deleteMany: {
            args: Prisma.BookingPassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingPassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingPassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>[]
          }
          upsert: {
            args: Prisma.BookingPassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPassengerPayload>
          }
          aggregate: {
            args: Prisma.BookingPassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingPassenger>
          }
          groupBy: {
            args: Prisma.BookingPassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingPassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingPassengerCountArgs<ExtArgs>
            result: $Utils.Optional<BookingPassengerCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    airline?: AirlineOmit
    airport?: AirportOmit
    flight?: FlightOmit
    flightSeat?: FlightSeatOmit
    passenger?: PassengerOmit
    user?: UserOmit
    booking?: BookingOmit
    bookingPassenger?: BookingPassengerOmit
    ticket?: TicketOmit
    payment?: PaymentOmit
    refund?: RefundOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AirlineCountOutputType
   */

  export type AirlineCountOutputType = {
    flights: number
  }

  export type AirlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | AirlineCountOutputTypeCountFlightsArgs
  }

  // Custom InputTypes
  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineCountOutputType
     */
    select?: AirlineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type AirportCountOutputType
   */

  export type AirportCountOutputType = {
    departureFlights: number
    arrivalFlights: number
  }

  export type AirportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureFlights?: boolean | AirportCountOutputTypeCountDepartureFlightsArgs
    arrivalFlights?: boolean | AirportCountOutputTypeCountArrivalFlightsArgs
  }

  // Custom InputTypes
  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportCountOutputType
     */
    select?: AirportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountDepartureFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountArrivalFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type FlightCountOutputType
   */

  export type FlightCountOutputType = {
    flightSeats: number
    bookings: number
  }

  export type FlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flightSeats?: boolean | FlightCountOutputTypeCountFlightSeatsArgs
    bookings?: boolean | FlightCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightCountOutputType
     */
    select?: FlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountFlightSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightSeatWhereInput
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type FlightSeatCountOutputType
   */

  export type FlightSeatCountOutputType = {
    tickets: number
  }

  export type FlightSeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | FlightSeatCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * FlightSeatCountOutputType without action
   */
  export type FlightSeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeatCountOutputType
     */
    select?: FlightSeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightSeatCountOutputType without action
   */
  export type FlightSeatCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type PassengerCountOutputType
   */

  export type PassengerCountOutputType = {
    bookings: number
    tickets: number
  }

  export type PassengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | PassengerCountOutputTypeCountBookingsArgs
    tickets?: boolean | PassengerCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerCountOutputType
     */
    select?: PassengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPassengerWhereInput
  }

  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
    passengers: number
    tickets: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
    passengers?: boolean | BookingCountOutputTypeCountPassengersArgs
    tickets?: boolean | BookingCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPassengerWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Airline
   */

  export type AggregateAirline = {
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  export type AirlineMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    country: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirlineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    country: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirlineCountAggregateOutputType = {
    id: number
    name: number
    code: number
    country: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AirlineMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirlineMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirlineCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AirlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airline to aggregate.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airlines
    **/
    _count?: true | AirlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlineMaxAggregateInputType
  }

  export type GetAirlineAggregateType<T extends AirlineAggregateArgs> = {
        [P in keyof T & keyof AggregateAirline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirline[P]>
      : GetScalarType<T[P], AggregateAirline[P]>
  }




  export type AirlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineWhereInput
    orderBy?: AirlineOrderByWithAggregationInput | AirlineOrderByWithAggregationInput[]
    by: AirlineScalarFieldEnum[] | AirlineScalarFieldEnum
    having?: AirlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlineCountAggregateInputType | true
    _min?: AirlineMinAggregateInputType
    _max?: AirlineMaxAggregateInputType
  }

  export type AirlineGroupByOutputType = {
    id: string
    name: string
    code: string
    country: string
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  type GetAirlineGroupByPayload<T extends AirlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlineGroupByOutputType[P]>
            : GetScalarType<T[P], AirlineGroupByOutputType[P]>
        }
      >
    >


  export type AirlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flights?: boolean | Airline$flightsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airline"]>

  export type AirlineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airline"]>

  export type AirlineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airline"]>

  export type AirlineSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AirlineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "country" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["airline"]>
  export type AirlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | Airline$flightsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AirlineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AirlineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AirlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airline"
    objects: {
      flights: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      country: string
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["airline"]>
    composites: {}
  }

  type AirlineGetPayload<S extends boolean | null | undefined | AirlineDefaultArgs> = $Result.GetResult<Prisma.$AirlinePayload, S>

  type AirlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirlineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirlineCountAggregateInputType | true
    }

  export interface AirlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airline'], meta: { name: 'Airline' } }
    /**
     * Find zero or one Airline that matches the filter.
     * @param {AirlineFindUniqueArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirlineFindUniqueArgs>(args: SelectSubset<T, AirlineFindUniqueArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirlineFindUniqueOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirlineFindUniqueOrThrowArgs>(args: SelectSubset<T, AirlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirlineFindFirstArgs>(args?: SelectSubset<T, AirlineFindFirstArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirlineFindFirstOrThrowArgs>(args?: SelectSubset<T, AirlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airlines
     * const airlines = await prisma.airline.findMany()
     * 
     * // Get first 10 Airlines
     * const airlines = await prisma.airline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airlineWithIdOnly = await prisma.airline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirlineFindManyArgs>(args?: SelectSubset<T, AirlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airline.
     * @param {AirlineCreateArgs} args - Arguments to create a Airline.
     * @example
     * // Create one Airline
     * const Airline = await prisma.airline.create({
     *   data: {
     *     // ... data to create a Airline
     *   }
     * })
     * 
     */
    create<T extends AirlineCreateArgs>(args: SelectSubset<T, AirlineCreateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airlines.
     * @param {AirlineCreateManyArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airline = await prisma.airline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirlineCreateManyArgs>(args?: SelectSubset<T, AirlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airlines and returns the data saved in the database.
     * @param {AirlineCreateManyAndReturnArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airline = await prisma.airline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airlines and only return the `id`
     * const airlineWithIdOnly = await prisma.airline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirlineCreateManyAndReturnArgs>(args?: SelectSubset<T, AirlineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Airline.
     * @param {AirlineDeleteArgs} args - Arguments to delete one Airline.
     * @example
     * // Delete one Airline
     * const Airline = await prisma.airline.delete({
     *   where: {
     *     // ... filter to delete one Airline
     *   }
     * })
     * 
     */
    delete<T extends AirlineDeleteArgs>(args: SelectSubset<T, AirlineDeleteArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airline.
     * @param {AirlineUpdateArgs} args - Arguments to update one Airline.
     * @example
     * // Update one Airline
     * const airline = await prisma.airline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirlineUpdateArgs>(args: SelectSubset<T, AirlineUpdateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airlines.
     * @param {AirlineDeleteManyArgs} args - Arguments to filter Airlines to delete.
     * @example
     * // Delete a few Airlines
     * const { count } = await prisma.airline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirlineDeleteManyArgs>(args?: SelectSubset<T, AirlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airlines
     * const airline = await prisma.airline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirlineUpdateManyArgs>(args: SelectSubset<T, AirlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines and returns the data updated in the database.
     * @param {AirlineUpdateManyAndReturnArgs} args - Arguments to update many Airlines.
     * @example
     * // Update many Airlines
     * const airline = await prisma.airline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Airlines and only return the `id`
     * const airlineWithIdOnly = await prisma.airline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AirlineUpdateManyAndReturnArgs>(args: SelectSubset<T, AirlineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Airline.
     * @param {AirlineUpsertArgs} args - Arguments to update or create a Airline.
     * @example
     * // Update or create a Airline
     * const airline = await prisma.airline.upsert({
     *   create: {
     *     // ... data to create a Airline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airline we want to update
     *   }
     * })
     */
    upsert<T extends AirlineUpsertArgs>(args: SelectSubset<T, AirlineUpsertArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineCountArgs} args - Arguments to filter Airlines to count.
     * @example
     * // Count the number of Airlines
     * const count = await prisma.airline.count({
     *   where: {
     *     // ... the filter for the Airlines we want to count
     *   }
     * })
    **/
    count<T extends AirlineCountArgs>(
      args?: Subset<T, AirlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirlineAggregateArgs>(args: Subset<T, AirlineAggregateArgs>): Prisma.PrismaPromise<GetAirlineAggregateType<T>>

    /**
     * Group by Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirlineGroupByArgs['orderBy'] }
        : { orderBy?: AirlineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airline model
   */
  readonly fields: AirlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flights<T extends Airline$flightsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airline model
   */
  interface AirlineFieldRefs {
    readonly id: FieldRef<"Airline", 'String'>
    readonly name: FieldRef<"Airline", 'String'>
    readonly code: FieldRef<"Airline", 'String'>
    readonly country: FieldRef<"Airline", 'String'>
    readonly logoUrl: FieldRef<"Airline", 'String'>
    readonly createdAt: FieldRef<"Airline", 'DateTime'>
    readonly updatedAt: FieldRef<"Airline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Airline findUnique
   */
  export type AirlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findUniqueOrThrow
   */
  export type AirlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findFirst
   */
  export type AirlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findFirstOrThrow
   */
  export type AirlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findMany
   */
  export type AirlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airlines to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline create
   */
  export type AirlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to create a Airline.
     */
    data: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
  }

  /**
   * Airline createMany
   */
  export type AirlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airlines.
     */
    data: AirlineCreateManyInput | AirlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airline createManyAndReturn
   */
  export type AirlineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * The data used to create many Airlines.
     */
    data: AirlineCreateManyInput | AirlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airline update
   */
  export type AirlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to update a Airline.
     */
    data: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
    /**
     * Choose, which Airline to update.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline updateMany
   */
  export type AirlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airlines.
     */
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyInput>
    /**
     * Filter which Airlines to update
     */
    where?: AirlineWhereInput
    /**
     * Limit how many Airlines to update.
     */
    limit?: number
  }

  /**
   * Airline updateManyAndReturn
   */
  export type AirlineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * The data used to update Airlines.
     */
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyInput>
    /**
     * Filter which Airlines to update
     */
    where?: AirlineWhereInput
    /**
     * Limit how many Airlines to update.
     */
    limit?: number
  }

  /**
   * Airline upsert
   */
  export type AirlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The filter to search for the Airline to update in case it exists.
     */
    where: AirlineWhereUniqueInput
    /**
     * In case the Airline found by the `where` argument doesn't exist, create a new Airline with this data.
     */
    create: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
    /**
     * In case the Airline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
  }

  /**
   * Airline delete
   */
  export type AirlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter which Airline to delete.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline deleteMany
   */
  export type AirlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airlines to delete
     */
    where?: AirlineWhereInput
    /**
     * Limit how many Airlines to delete.
     */
    limit?: number
  }

  /**
   * Airline.flights
   */
  export type Airline$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airline without action
   */
  export type AirlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airline
     */
    omit?: AirlineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
  }


  /**
   * Model Airport
   */

  export type AggregateAirport = {
    _count: AirportCountAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  export type AirportMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    city: string | null
    country: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirportMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    city: string | null
    country: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirportCountAggregateOutputType = {
    id: number
    name: number
    code: number
    city: number
    country: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AirportMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    city?: true
    country?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirportMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    city?: true
    country?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirportCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    city?: true
    country?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airport to aggregate.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airports
    **/
    _count?: true | AirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportMaxAggregateInputType
  }

  export type GetAirportAggregateType<T extends AirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirport[P]>
      : GetScalarType<T[P], AggregateAirport[P]>
  }




  export type AirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithAggregationInput | AirportOrderByWithAggregationInput[]
    by: AirportScalarFieldEnum[] | AirportScalarFieldEnum
    having?: AirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportCountAggregateInputType | true
    _min?: AirportMinAggregateInputType
    _max?: AirportMaxAggregateInputType
  }

  export type AirportGroupByOutputType = {
    id: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: AirportCountAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  type GetAirportGroupByPayload<T extends AirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirportGroupByOutputType[P]>
        }
      >
    >


  export type AirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departureFlights?: boolean | Airport$departureFlightsArgs<ExtArgs>
    arrivalFlights?: boolean | Airport$arrivalFlightsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AirportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "city" | "country" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["airport"]>
  export type AirportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureFlights?: boolean | Airport$departureFlightsArgs<ExtArgs>
    arrivalFlights?: boolean | Airport$arrivalFlightsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AirportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AirportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airport"
    objects: {
      departureFlights: Prisma.$FlightPayload<ExtArgs>[]
      arrivalFlights: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      city: string
      country: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["airport"]>
    composites: {}
  }

  type AirportGetPayload<S extends boolean | null | undefined | AirportDefaultArgs> = $Result.GetResult<Prisma.$AirportPayload, S>

  type AirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportCountAggregateInputType | true
    }

  export interface AirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airport'], meta: { name: 'Airport' } }
    /**
     * Find zero or one Airport that matches the filter.
     * @param {AirportFindUniqueArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportFindUniqueArgs>(args: SelectSubset<T, AirportFindUniqueArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirportFindUniqueOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportFindFirstArgs>(args?: SelectSubset<T, AirportFindFirstArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airport.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportWithIdOnly = await prisma.airport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportFindManyArgs>(args?: SelectSubset<T, AirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airport.
     * @param {AirportCreateArgs} args - Arguments to create a Airport.
     * @example
     * // Create one Airport
     * const Airport = await prisma.airport.create({
     *   data: {
     *     // ... data to create a Airport
     *   }
     * })
     * 
     */
    create<T extends AirportCreateArgs>(args: SelectSubset<T, AirportCreateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airports.
     * @param {AirportCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportCreateManyArgs>(args?: SelectSubset<T, AirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airports and returns the data saved in the database.
     * @param {AirportCreateManyAndReturnArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airports and only return the `id`
     * const airportWithIdOnly = await prisma.airport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirportCreateManyAndReturnArgs>(args?: SelectSubset<T, AirportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Airport.
     * @param {AirportDeleteArgs} args - Arguments to delete one Airport.
     * @example
     * // Delete one Airport
     * const Airport = await prisma.airport.delete({
     *   where: {
     *     // ... filter to delete one Airport
     *   }
     * })
     * 
     */
    delete<T extends AirportDeleteArgs>(args: SelectSubset<T, AirportDeleteArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airport.
     * @param {AirportUpdateArgs} args - Arguments to update one Airport.
     * @example
     * // Update one Airport
     * const airport = await prisma.airport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportUpdateArgs>(args: SelectSubset<T, AirportUpdateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airports.
     * @param {AirportDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportDeleteManyArgs>(args?: SelectSubset<T, AirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportUpdateManyArgs>(args: SelectSubset<T, AirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports and returns the data updated in the database.
     * @param {AirportUpdateManyAndReturnArgs} args - Arguments to update many Airports.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Airports and only return the `id`
     * const airportWithIdOnly = await prisma.airport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AirportUpdateManyAndReturnArgs>(args: SelectSubset<T, AirportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Airport.
     * @param {AirportUpsertArgs} args - Arguments to update or create a Airport.
     * @example
     * // Update or create a Airport
     * const airport = await prisma.airport.upsert({
     *   create: {
     *     // ... data to create a Airport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airport we want to update
     *   }
     * })
     */
    upsert<T extends AirportUpsertArgs>(args: SelectSubset<T, AirportUpsertArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airport.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends AirportCountArgs>(
      args?: Subset<T, AirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirportAggregateArgs>(args: Subset<T, AirportAggregateArgs>): Prisma.PrismaPromise<GetAirportAggregateType<T>>

    /**
     * Group by Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportGroupByArgs['orderBy'] }
        : { orderBy?: AirportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airport model
   */
  readonly fields: AirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departureFlights<T extends Airport$departureFlightsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$departureFlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arrivalFlights<T extends Airport$arrivalFlightsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$arrivalFlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airport model
   */
  interface AirportFieldRefs {
    readonly id: FieldRef<"Airport", 'String'>
    readonly name: FieldRef<"Airport", 'String'>
    readonly code: FieldRef<"Airport", 'String'>
    readonly city: FieldRef<"Airport", 'String'>
    readonly country: FieldRef<"Airport", 'String'>
    readonly timezone: FieldRef<"Airport", 'String'>
    readonly createdAt: FieldRef<"Airport", 'DateTime'>
    readonly updatedAt: FieldRef<"Airport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Airport findUnique
   */
  export type AirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findUniqueOrThrow
   */
  export type AirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findFirst
   */
  export type AirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findFirstOrThrow
   */
  export type AirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findMany
   */
  export type AirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airports to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport create
   */
  export type AirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to create a Airport.
     */
    data: XOR<AirportCreateInput, AirportUncheckedCreateInput>
  }

  /**
   * Airport createMany
   */
  export type AirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airport createManyAndReturn
   */
  export type AirportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airport update
   */
  export type AirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to update a Airport.
     */
    data: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
    /**
     * Choose, which Airport to update.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport updateMany
   */
  export type AirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport updateManyAndReturn
   */
  export type AirportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport upsert
   */
  export type AirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The filter to search for the Airport to update in case it exists.
     */
    where: AirportWhereUniqueInput
    /**
     * In case the Airport found by the `where` argument doesn't exist, create a new Airport with this data.
     */
    create: XOR<AirportCreateInput, AirportUncheckedCreateInput>
    /**
     * In case the Airport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
  }

  /**
   * Airport delete
   */
  export type AirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter which Airport to delete.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport deleteMany
   */
  export type AirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airports to delete
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to delete.
     */
    limit?: number
  }

  /**
   * Airport.departureFlights
   */
  export type Airport$departureFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport.arrivalFlights
   */
  export type Airport$arrivalFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport without action
   */
  export type AirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
  }


  /**
   * Model Flight
   */

  export type AggregateFlight = {
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  export type FlightAvgAggregateOutputType = {
    baseFare: Decimal | null
  }

  export type FlightSumAggregateOutputType = {
    baseFare: Decimal | null
  }

  export type FlightMinAggregateOutputType = {
    id: string | null
    flightNumber: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    baseFare: Decimal | null
    status: $Enums.FlightStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    airlineId: string | null
    departureAirportId: string | null
    arrivalAirportId: string | null
  }

  export type FlightMaxAggregateOutputType = {
    id: string | null
    flightNumber: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    baseFare: Decimal | null
    status: $Enums.FlightStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    airlineId: string | null
    departureAirportId: string | null
    arrivalAirportId: string | null
  }

  export type FlightCountAggregateOutputType = {
    id: number
    flightNumber: number
    departureTime: number
    arrivalTime: number
    baseFare: number
    status: number
    createdAt: number
    updatedAt: number
    airlineId: number
    departureAirportId: number
    arrivalAirportId: number
    _all: number
  }


  export type FlightAvgAggregateInputType = {
    baseFare?: true
  }

  export type FlightSumAggregateInputType = {
    baseFare?: true
  }

  export type FlightMinAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    baseFare?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
    departureAirportId?: true
    arrivalAirportId?: true
  }

  export type FlightMaxAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    baseFare?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
    departureAirportId?: true
    arrivalAirportId?: true
  }

  export type FlightCountAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    baseFare?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    airlineId?: true
    departureAirportId?: true
    arrivalAirportId?: true
    _all?: true
  }

  export type FlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flight to aggregate.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flights
    **/
    _count?: true | FlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightMaxAggregateInputType
  }

  export type GetFlightAggregateType<T extends FlightAggregateArgs> = {
        [P in keyof T & keyof AggregateFlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlight[P]>
      : GetScalarType<T[P], AggregateFlight[P]>
  }




  export type FlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithAggregationInput | FlightOrderByWithAggregationInput[]
    by: FlightScalarFieldEnum[] | FlightScalarFieldEnum
    having?: FlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightCountAggregateInputType | true
    _avg?: FlightAvgAggregateInputType
    _sum?: FlightSumAggregateInputType
    _min?: FlightMinAggregateInputType
    _max?: FlightMaxAggregateInputType
  }

  export type FlightGroupByOutputType = {
    id: string
    flightNumber: string
    departureTime: Date
    arrivalTime: Date
    baseFare: Decimal
    status: $Enums.FlightStatus
    createdAt: Date
    updatedAt: Date
    airlineId: string
    departureAirportId: string
    arrivalAirportId: string
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  type GetFlightGroupByPayload<T extends FlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightGroupByOutputType[P]>
            : GetScalarType<T[P], FlightGroupByOutputType[P]>
        }
      >
    >


  export type FlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    baseFare?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
    flightSeats?: boolean | Flight$flightSeatsArgs<ExtArgs>
    bookings?: boolean | Flight$bookingsArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    baseFare?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    baseFare?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectScalar = {
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    baseFare?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airlineId?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
  }

  export type FlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flightNumber" | "departureTime" | "arrivalTime" | "baseFare" | "status" | "createdAt" | "updatedAt" | "airlineId" | "departureAirportId" | "arrivalAirportId", ExtArgs["result"]["flight"]>
  export type FlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
    flightSeats?: boolean | Flight$flightSeatsArgs<ExtArgs>
    bookings?: boolean | Flight$bookingsArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }
  export type FlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }

  export type $FlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flight"
    objects: {
      airline: Prisma.$AirlinePayload<ExtArgs>
      departureAirport: Prisma.$AirportPayload<ExtArgs>
      arrivalAirport: Prisma.$AirportPayload<ExtArgs>
      flightSeats: Prisma.$FlightSeatPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flightNumber: string
      departureTime: Date
      arrivalTime: Date
      baseFare: Prisma.Decimal
      status: $Enums.FlightStatus
      createdAt: Date
      updatedAt: Date
      airlineId: string
      departureAirportId: string
      arrivalAirportId: string
    }, ExtArgs["result"]["flight"]>
    composites: {}
  }

  type FlightGetPayload<S extends boolean | null | undefined | FlightDefaultArgs> = $Result.GetResult<Prisma.$FlightPayload, S>

  type FlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightCountAggregateInputType | true
    }

  export interface FlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flight'], meta: { name: 'Flight' } }
    /**
     * Find zero or one Flight that matches the filter.
     * @param {FlightFindUniqueArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightFindUniqueArgs>(args: SelectSubset<T, FlightFindUniqueArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightFindUniqueOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightFindFirstArgs>(args?: SelectSubset<T, FlightFindFirstArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flight.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightWithIdOnly = await prisma.flight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightFindManyArgs>(args?: SelectSubset<T, FlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flight.
     * @param {FlightCreateArgs} args - Arguments to create a Flight.
     * @example
     * // Create one Flight
     * const Flight = await prisma.flight.create({
     *   data: {
     *     // ... data to create a Flight
     *   }
     * })
     * 
     */
    create<T extends FlightCreateArgs>(args: SelectSubset<T, FlightCreateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {FlightCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightCreateManyArgs>(args?: SelectSubset<T, FlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flights and returns the data saved in the database.
     * @param {FlightCreateManyAndReturnArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flights and only return the `id`
     * const flightWithIdOnly = await prisma.flight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flight.
     * @param {FlightDeleteArgs} args - Arguments to delete one Flight.
     * @example
     * // Delete one Flight
     * const Flight = await prisma.flight.delete({
     *   where: {
     *     // ... filter to delete one Flight
     *   }
     * })
     * 
     */
    delete<T extends FlightDeleteArgs>(args: SelectSubset<T, FlightDeleteArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flight.
     * @param {FlightUpdateArgs} args - Arguments to update one Flight.
     * @example
     * // Update one Flight
     * const flight = await prisma.flight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightUpdateArgs>(args: SelectSubset<T, FlightUpdateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {FlightDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightDeleteManyArgs>(args?: SelectSubset<T, FlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightUpdateManyArgs>(args: SelectSubset<T, FlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights and returns the data updated in the database.
     * @param {FlightUpdateManyAndReturnArgs} args - Arguments to update many Flights.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flights and only return the `id`
     * const flightWithIdOnly = await prisma.flight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlightUpdateManyAndReturnArgs>(args: SelectSubset<T, FlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flight.
     * @param {FlightUpsertArgs} args - Arguments to update or create a Flight.
     * @example
     * // Update or create a Flight
     * const flight = await prisma.flight.upsert({
     *   create: {
     *     // ... data to create a Flight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flight we want to update
     *   }
     * })
     */
    upsert<T extends FlightUpsertArgs>(args: SelectSubset<T, FlightUpsertArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flight.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends FlightCountArgs>(
      args?: Subset<T, FlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightAggregateArgs>(args: Subset<T, FlightAggregateArgs>): Prisma.PrismaPromise<GetFlightAggregateType<T>>

    /**
     * Group by Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightGroupByArgs['orderBy'] }
        : { orderBy?: FlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flight model
   */
  readonly fields: FlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departureAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arrivalAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flightSeats<T extends Flight$flightSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Flight$flightSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Flight$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Flight$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flight model
   */
  interface FlightFieldRefs {
    readonly id: FieldRef<"Flight", 'String'>
    readonly flightNumber: FieldRef<"Flight", 'String'>
    readonly departureTime: FieldRef<"Flight", 'DateTime'>
    readonly arrivalTime: FieldRef<"Flight", 'DateTime'>
    readonly baseFare: FieldRef<"Flight", 'Decimal'>
    readonly status: FieldRef<"Flight", 'FlightStatus'>
    readonly createdAt: FieldRef<"Flight", 'DateTime'>
    readonly updatedAt: FieldRef<"Flight", 'DateTime'>
    readonly airlineId: FieldRef<"Flight", 'String'>
    readonly departureAirportId: FieldRef<"Flight", 'String'>
    readonly arrivalAirportId: FieldRef<"Flight", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Flight findUnique
   */
  export type FlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findUniqueOrThrow
   */
  export type FlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findFirst
   */
  export type FlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findFirstOrThrow
   */
  export type FlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findMany
   */
  export type FlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight create
   */
  export type FlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Flight.
     */
    data: XOR<FlightCreateInput, FlightUncheckedCreateInput>
  }

  /**
   * Flight createMany
   */
  export type FlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flight createManyAndReturn
   */
  export type FlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flight update
   */
  export type FlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Flight.
     */
    data: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
    /**
     * Choose, which Flight to update.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight updateMany
   */
  export type FlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
  }

  /**
   * Flight updateManyAndReturn
   */
  export type FlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flight upsert
   */
  export type FlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Flight to update in case it exists.
     */
    where: FlightWhereUniqueInput
    /**
     * In case the Flight found by the `where` argument doesn't exist, create a new Flight with this data.
     */
    create: XOR<FlightCreateInput, FlightUncheckedCreateInput>
    /**
     * In case the Flight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
  }

  /**
   * Flight delete
   */
  export type FlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter which Flight to delete.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight deleteMany
   */
  export type FlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to delete
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to delete.
     */
    limit?: number
  }

  /**
   * Flight.flightSeats
   */
  export type Flight$flightSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    where?: FlightSeatWhereInput
    orderBy?: FlightSeatOrderByWithRelationInput | FlightSeatOrderByWithRelationInput[]
    cursor?: FlightSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightSeatScalarFieldEnum | FlightSeatScalarFieldEnum[]
  }

  /**
   * Flight.bookings
   */
  export type Flight$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Flight without action
   */
  export type FlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
  }


  /**
   * Model FlightSeat
   */

  export type AggregateFlightSeat = {
    _count: FlightSeatCountAggregateOutputType | null
    _avg: FlightSeatAvgAggregateOutputType | null
    _sum: FlightSeatSumAggregateOutputType | null
    _min: FlightSeatMinAggregateOutputType | null
    _max: FlightSeatMaxAggregateOutputType | null
  }

  export type FlightSeatAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type FlightSeatSumAggregateOutputType = {
    price: Decimal | null
  }

  export type FlightSeatMinAggregateOutputType = {
    id: string | null
    seatNumber: string | null
    seatClass: $Enums.SeatClass | null
    price: Decimal | null
    isAvailable: boolean | null
    flightId: string | null
  }

  export type FlightSeatMaxAggregateOutputType = {
    id: string | null
    seatNumber: string | null
    seatClass: $Enums.SeatClass | null
    price: Decimal | null
    isAvailable: boolean | null
    flightId: string | null
  }

  export type FlightSeatCountAggregateOutputType = {
    id: number
    seatNumber: number
    seatClass: number
    price: number
    isAvailable: number
    flightId: number
    _all: number
  }


  export type FlightSeatAvgAggregateInputType = {
    price?: true
  }

  export type FlightSeatSumAggregateInputType = {
    price?: true
  }

  export type FlightSeatMinAggregateInputType = {
    id?: true
    seatNumber?: true
    seatClass?: true
    price?: true
    isAvailable?: true
    flightId?: true
  }

  export type FlightSeatMaxAggregateInputType = {
    id?: true
    seatNumber?: true
    seatClass?: true
    price?: true
    isAvailable?: true
    flightId?: true
  }

  export type FlightSeatCountAggregateInputType = {
    id?: true
    seatNumber?: true
    seatClass?: true
    price?: true
    isAvailable?: true
    flightId?: true
    _all?: true
  }

  export type FlightSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightSeat to aggregate.
     */
    where?: FlightSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightSeats to fetch.
     */
    orderBy?: FlightSeatOrderByWithRelationInput | FlightSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightSeats
    **/
    _count?: true | FlightSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightSeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightSeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightSeatMaxAggregateInputType
  }

  export type GetFlightSeatAggregateType<T extends FlightSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightSeat[P]>
      : GetScalarType<T[P], AggregateFlightSeat[P]>
  }




  export type FlightSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightSeatWhereInput
    orderBy?: FlightSeatOrderByWithAggregationInput | FlightSeatOrderByWithAggregationInput[]
    by: FlightSeatScalarFieldEnum[] | FlightSeatScalarFieldEnum
    having?: FlightSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightSeatCountAggregateInputType | true
    _avg?: FlightSeatAvgAggregateInputType
    _sum?: FlightSeatSumAggregateInputType
    _min?: FlightSeatMinAggregateInputType
    _max?: FlightSeatMaxAggregateInputType
  }

  export type FlightSeatGroupByOutputType = {
    id: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal
    isAvailable: boolean
    flightId: string
    _count: FlightSeatCountAggregateOutputType | null
    _avg: FlightSeatAvgAggregateOutputType | null
    _sum: FlightSeatSumAggregateOutputType | null
    _min: FlightSeatMinAggregateOutputType | null
    _max: FlightSeatMaxAggregateOutputType | null
  }

  type GetFlightSeatGroupByPayload<T extends FlightSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightSeatGroupByOutputType[P]>
            : GetScalarType<T[P], FlightSeatGroupByOutputType[P]>
        }
      >
    >


  export type FlightSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    seatClass?: boolean
    price?: boolean
    isAvailable?: boolean
    flightId?: boolean
    flight?: boolean | FlightDefaultArgs<ExtArgs>
    tickets?: boolean | FlightSeat$ticketsArgs<ExtArgs>
    _count?: boolean | FlightSeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightSeat"]>

  export type FlightSeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    seatClass?: boolean
    price?: boolean
    isAvailable?: boolean
    flightId?: boolean
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightSeat"]>

  export type FlightSeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    seatClass?: boolean
    price?: boolean
    isAvailable?: boolean
    flightId?: boolean
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightSeat"]>

  export type FlightSeatSelectScalar = {
    id?: boolean
    seatNumber?: boolean
    seatClass?: boolean
    price?: boolean
    isAvailable?: boolean
    flightId?: boolean
  }

  export type FlightSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seatNumber" | "seatClass" | "price" | "isAvailable" | "flightId", ExtArgs["result"]["flightSeat"]>
  export type FlightSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | FlightDefaultArgs<ExtArgs>
    tickets?: boolean | FlightSeat$ticketsArgs<ExtArgs>
    _count?: boolean | FlightSeatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlightSeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }
  export type FlightSeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }

  export type $FlightSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightSeat"
    objects: {
      flight: Prisma.$FlightPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seatNumber: string
      seatClass: $Enums.SeatClass
      price: Prisma.Decimal
      isAvailable: boolean
      flightId: string
    }, ExtArgs["result"]["flightSeat"]>
    composites: {}
  }

  type FlightSeatGetPayload<S extends boolean | null | undefined | FlightSeatDefaultArgs> = $Result.GetResult<Prisma.$FlightSeatPayload, S>

  type FlightSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightSeatCountAggregateInputType | true
    }

  export interface FlightSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightSeat'], meta: { name: 'FlightSeat' } }
    /**
     * Find zero or one FlightSeat that matches the filter.
     * @param {FlightSeatFindUniqueArgs} args - Arguments to find a FlightSeat
     * @example
     * // Get one FlightSeat
     * const flightSeat = await prisma.flightSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightSeatFindUniqueArgs>(args: SelectSubset<T, FlightSeatFindUniqueArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlightSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightSeatFindUniqueOrThrowArgs} args - Arguments to find a FlightSeat
     * @example
     * // Get one FlightSeat
     * const flightSeat = await prisma.flightSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatFindFirstArgs} args - Arguments to find a FlightSeat
     * @example
     * // Get one FlightSeat
     * const flightSeat = await prisma.flightSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightSeatFindFirstArgs>(args?: SelectSubset<T, FlightSeatFindFirstArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatFindFirstOrThrowArgs} args - Arguments to find a FlightSeat
     * @example
     * // Get one FlightSeat
     * const flightSeat = await prisma.flightSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlightSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightSeats
     * const flightSeats = await prisma.flightSeat.findMany()
     * 
     * // Get first 10 FlightSeats
     * const flightSeats = await prisma.flightSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightSeatWithIdOnly = await prisma.flightSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightSeatFindManyArgs>(args?: SelectSubset<T, FlightSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlightSeat.
     * @param {FlightSeatCreateArgs} args - Arguments to create a FlightSeat.
     * @example
     * // Create one FlightSeat
     * const FlightSeat = await prisma.flightSeat.create({
     *   data: {
     *     // ... data to create a FlightSeat
     *   }
     * })
     * 
     */
    create<T extends FlightSeatCreateArgs>(args: SelectSubset<T, FlightSeatCreateArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlightSeats.
     * @param {FlightSeatCreateManyArgs} args - Arguments to create many FlightSeats.
     * @example
     * // Create many FlightSeats
     * const flightSeat = await prisma.flightSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightSeatCreateManyArgs>(args?: SelectSubset<T, FlightSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlightSeats and returns the data saved in the database.
     * @param {FlightSeatCreateManyAndReturnArgs} args - Arguments to create many FlightSeats.
     * @example
     * // Create many FlightSeats
     * const flightSeat = await prisma.flightSeat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlightSeats and only return the `id`
     * const flightSeatWithIdOnly = await prisma.flightSeat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightSeatCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlightSeat.
     * @param {FlightSeatDeleteArgs} args - Arguments to delete one FlightSeat.
     * @example
     * // Delete one FlightSeat
     * const FlightSeat = await prisma.flightSeat.delete({
     *   where: {
     *     // ... filter to delete one FlightSeat
     *   }
     * })
     * 
     */
    delete<T extends FlightSeatDeleteArgs>(args: SelectSubset<T, FlightSeatDeleteArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlightSeat.
     * @param {FlightSeatUpdateArgs} args - Arguments to update one FlightSeat.
     * @example
     * // Update one FlightSeat
     * const flightSeat = await prisma.flightSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightSeatUpdateArgs>(args: SelectSubset<T, FlightSeatUpdateArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlightSeats.
     * @param {FlightSeatDeleteManyArgs} args - Arguments to filter FlightSeats to delete.
     * @example
     * // Delete a few FlightSeats
     * const { count } = await prisma.flightSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightSeatDeleteManyArgs>(args?: SelectSubset<T, FlightSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightSeats
     * const flightSeat = await prisma.flightSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightSeatUpdateManyArgs>(args: SelectSubset<T, FlightSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightSeats and returns the data updated in the database.
     * @param {FlightSeatUpdateManyAndReturnArgs} args - Arguments to update many FlightSeats.
     * @example
     * // Update many FlightSeats
     * const flightSeat = await prisma.flightSeat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlightSeats and only return the `id`
     * const flightSeatWithIdOnly = await prisma.flightSeat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlightSeatUpdateManyAndReturnArgs>(args: SelectSubset<T, FlightSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlightSeat.
     * @param {FlightSeatUpsertArgs} args - Arguments to update or create a FlightSeat.
     * @example
     * // Update or create a FlightSeat
     * const flightSeat = await prisma.flightSeat.upsert({
     *   create: {
     *     // ... data to create a FlightSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightSeat we want to update
     *   }
     * })
     */
    upsert<T extends FlightSeatUpsertArgs>(args: SelectSubset<T, FlightSeatUpsertArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlightSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatCountArgs} args - Arguments to filter FlightSeats to count.
     * @example
     * // Count the number of FlightSeats
     * const count = await prisma.flightSeat.count({
     *   where: {
     *     // ... the filter for the FlightSeats we want to count
     *   }
     * })
    **/
    count<T extends FlightSeatCountArgs>(
      args?: Subset<T, FlightSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightSeatAggregateArgs>(args: Subset<T, FlightSeatAggregateArgs>): Prisma.PrismaPromise<GetFlightSeatAggregateType<T>>

    /**
     * Group by FlightSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightSeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightSeatGroupByArgs['orderBy'] }
        : { orderBy?: FlightSeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightSeat model
   */
  readonly fields: FlightSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flight<T extends FlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlightDefaultArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends FlightSeat$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, FlightSeat$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlightSeat model
   */
  interface FlightSeatFieldRefs {
    readonly id: FieldRef<"FlightSeat", 'String'>
    readonly seatNumber: FieldRef<"FlightSeat", 'String'>
    readonly seatClass: FieldRef<"FlightSeat", 'SeatClass'>
    readonly price: FieldRef<"FlightSeat", 'Decimal'>
    readonly isAvailable: FieldRef<"FlightSeat", 'Boolean'>
    readonly flightId: FieldRef<"FlightSeat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FlightSeat findUnique
   */
  export type FlightSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter, which FlightSeat to fetch.
     */
    where: FlightSeatWhereUniqueInput
  }

  /**
   * FlightSeat findUniqueOrThrow
   */
  export type FlightSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter, which FlightSeat to fetch.
     */
    where: FlightSeatWhereUniqueInput
  }

  /**
   * FlightSeat findFirst
   */
  export type FlightSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter, which FlightSeat to fetch.
     */
    where?: FlightSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightSeats to fetch.
     */
    orderBy?: FlightSeatOrderByWithRelationInput | FlightSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightSeats.
     */
    cursor?: FlightSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightSeats.
     */
    distinct?: FlightSeatScalarFieldEnum | FlightSeatScalarFieldEnum[]
  }

  /**
   * FlightSeat findFirstOrThrow
   */
  export type FlightSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter, which FlightSeat to fetch.
     */
    where?: FlightSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightSeats to fetch.
     */
    orderBy?: FlightSeatOrderByWithRelationInput | FlightSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightSeats.
     */
    cursor?: FlightSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightSeats.
     */
    distinct?: FlightSeatScalarFieldEnum | FlightSeatScalarFieldEnum[]
  }

  /**
   * FlightSeat findMany
   */
  export type FlightSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter, which FlightSeats to fetch.
     */
    where?: FlightSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightSeats to fetch.
     */
    orderBy?: FlightSeatOrderByWithRelationInput | FlightSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightSeats.
     */
    cursor?: FlightSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightSeats.
     */
    skip?: number
    distinct?: FlightSeatScalarFieldEnum | FlightSeatScalarFieldEnum[]
  }

  /**
   * FlightSeat create
   */
  export type FlightSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a FlightSeat.
     */
    data: XOR<FlightSeatCreateInput, FlightSeatUncheckedCreateInput>
  }

  /**
   * FlightSeat createMany
   */
  export type FlightSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightSeats.
     */
    data: FlightSeatCreateManyInput | FlightSeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlightSeat createManyAndReturn
   */
  export type FlightSeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * The data used to create many FlightSeats.
     */
    data: FlightSeatCreateManyInput | FlightSeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightSeat update
   */
  export type FlightSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a FlightSeat.
     */
    data: XOR<FlightSeatUpdateInput, FlightSeatUncheckedUpdateInput>
    /**
     * Choose, which FlightSeat to update.
     */
    where: FlightSeatWhereUniqueInput
  }

  /**
   * FlightSeat updateMany
   */
  export type FlightSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightSeats.
     */
    data: XOR<FlightSeatUpdateManyMutationInput, FlightSeatUncheckedUpdateManyInput>
    /**
     * Filter which FlightSeats to update
     */
    where?: FlightSeatWhereInput
    /**
     * Limit how many FlightSeats to update.
     */
    limit?: number
  }

  /**
   * FlightSeat updateManyAndReturn
   */
  export type FlightSeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * The data used to update FlightSeats.
     */
    data: XOR<FlightSeatUpdateManyMutationInput, FlightSeatUncheckedUpdateManyInput>
    /**
     * Filter which FlightSeats to update
     */
    where?: FlightSeatWhereInput
    /**
     * Limit how many FlightSeats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightSeat upsert
   */
  export type FlightSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the FlightSeat to update in case it exists.
     */
    where: FlightSeatWhereUniqueInput
    /**
     * In case the FlightSeat found by the `where` argument doesn't exist, create a new FlightSeat with this data.
     */
    create: XOR<FlightSeatCreateInput, FlightSeatUncheckedCreateInput>
    /**
     * In case the FlightSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightSeatUpdateInput, FlightSeatUncheckedUpdateInput>
  }

  /**
   * FlightSeat delete
   */
  export type FlightSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
    /**
     * Filter which FlightSeat to delete.
     */
    where: FlightSeatWhereUniqueInput
  }

  /**
   * FlightSeat deleteMany
   */
  export type FlightSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightSeats to delete
     */
    where?: FlightSeatWhereInput
    /**
     * Limit how many FlightSeats to delete.
     */
    limit?: number
  }

  /**
   * FlightSeat.tickets
   */
  export type FlightSeat$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * FlightSeat without action
   */
  export type FlightSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSeat
     */
    select?: FlightSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightSeat
     */
    omit?: FlightSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightSeatInclude<ExtArgs> | null
  }


  /**
   * Model Passenger
   */

  export type AggregatePassenger = {
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  export type PassengerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passportNumber: string | null
    dateOfBirth: Date | null
    nationality: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PassengerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    passportNumber: string | null
    dateOfBirth: Date | null
    nationality: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PassengerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    passportNumber: number
    dateOfBirth: number
    nationality: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PassengerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passportNumber?: true
    dateOfBirth?: true
    nationality?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PassengerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passportNumber?: true
    dateOfBirth?: true
    nationality?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PassengerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    passportNumber?: true
    dateOfBirth?: true
    nationality?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passenger to aggregate.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passengers
    **/
    _count?: true | PassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassengerMaxAggregateInputType
  }

  export type GetPassengerAggregateType<T extends PassengerAggregateArgs> = {
        [P in keyof T & keyof AggregatePassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassenger[P]>
      : GetScalarType<T[P], AggregatePassenger[P]>
  }




  export type PassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerWhereInput
    orderBy?: PassengerOrderByWithAggregationInput | PassengerOrderByWithAggregationInput[]
    by: PassengerScalarFieldEnum[] | PassengerScalarFieldEnum
    having?: PassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassengerCountAggregateInputType | true
    _min?: PassengerMinAggregateInputType
    _max?: PassengerMaxAggregateInputType
  }

  export type PassengerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    passportNumber: string | null
    dateOfBirth: Date | null
    nationality: string | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  type GetPassengerGroupByPayload<T extends PassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassengerGroupByOutputType[P]>
            : GetScalarType<T[P], PassengerGroupByOutputType[P]>
        }
      >
    >


  export type PassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Passenger$userArgs<ExtArgs>
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    tickets?: boolean | Passenger$ticketsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Passenger$userArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Passenger$userArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    passportNumber?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "passportNumber" | "dateOfBirth" | "nationality" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["passenger"]>
  export type PassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Passenger$userArgs<ExtArgs>
    bookings?: boolean | Passenger$bookingsArgs<ExtArgs>
    tickets?: boolean | Passenger$ticketsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Passenger$userArgs<ExtArgs>
  }
  export type PassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Passenger$userArgs<ExtArgs>
  }

  export type $PassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passenger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      bookings: Prisma.$BookingPassengerPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      passportNumber: string | null
      dateOfBirth: Date | null
      nationality: string | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["passenger"]>
    composites: {}
  }

  type PassengerGetPayload<S extends boolean | null | undefined | PassengerDefaultArgs> = $Result.GetResult<Prisma.$PassengerPayload, S>

  type PassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassengerCountAggregateInputType | true
    }

  export interface PassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passenger'], meta: { name: 'Passenger' } }
    /**
     * Find zero or one Passenger that matches the filter.
     * @param {PassengerFindUniqueArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassengerFindUniqueArgs>(args: SelectSubset<T, PassengerFindUniqueArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassengerFindUniqueOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, PassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassengerFindFirstArgs>(args?: SelectSubset<T, PassengerFindFirstArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, PassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passengers
     * const passengers = await prisma.passenger.findMany()
     * 
     * // Get first 10 Passengers
     * const passengers = await prisma.passenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passengerWithIdOnly = await prisma.passenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassengerFindManyArgs>(args?: SelectSubset<T, PassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passenger.
     * @param {PassengerCreateArgs} args - Arguments to create a Passenger.
     * @example
     * // Create one Passenger
     * const Passenger = await prisma.passenger.create({
     *   data: {
     *     // ... data to create a Passenger
     *   }
     * })
     * 
     */
    create<T extends PassengerCreateArgs>(args: SelectSubset<T, PassengerCreateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passengers.
     * @param {PassengerCreateManyArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassengerCreateManyArgs>(args?: SelectSubset<T, PassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passengers and returns the data saved in the database.
     * @param {PassengerCreateManyAndReturnArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, PassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passenger.
     * @param {PassengerDeleteArgs} args - Arguments to delete one Passenger.
     * @example
     * // Delete one Passenger
     * const Passenger = await prisma.passenger.delete({
     *   where: {
     *     // ... filter to delete one Passenger
     *   }
     * })
     * 
     */
    delete<T extends PassengerDeleteArgs>(args: SelectSubset<T, PassengerDeleteArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passenger.
     * @param {PassengerUpdateArgs} args - Arguments to update one Passenger.
     * @example
     * // Update one Passenger
     * const passenger = await prisma.passenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassengerUpdateArgs>(args: SelectSubset<T, PassengerUpdateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passengers.
     * @param {PassengerDeleteManyArgs} args - Arguments to filter Passengers to delete.
     * @example
     * // Delete a few Passengers
     * const { count } = await prisma.passenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassengerDeleteManyArgs>(args?: SelectSubset<T, PassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassengerUpdateManyArgs>(args: SelectSubset<T, PassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers and returns the data updated in the database.
     * @param {PassengerUpdateManyAndReturnArgs} args - Arguments to update many Passengers.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, PassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passenger.
     * @param {PassengerUpsertArgs} args - Arguments to update or create a Passenger.
     * @example
     * // Update or create a Passenger
     * const passenger = await prisma.passenger.upsert({
     *   create: {
     *     // ... data to create a Passenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passenger we want to update
     *   }
     * })
     */
    upsert<T extends PassengerUpsertArgs>(args: SelectSubset<T, PassengerUpsertArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerCountArgs} args - Arguments to filter Passengers to count.
     * @example
     * // Count the number of Passengers
     * const count = await prisma.passenger.count({
     *   where: {
     *     // ... the filter for the Passengers we want to count
     *   }
     * })
    **/
    count<T extends PassengerCountArgs>(
      args?: Subset<T, PassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassengerAggregateArgs>(args: Subset<T, PassengerAggregateArgs>): Prisma.PrismaPromise<GetPassengerAggregateType<T>>

    /**
     * Group by Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassengerGroupByArgs['orderBy'] }
        : { orderBy?: PassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passenger model
   */
  readonly fields: PassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Passenger$userArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Passenger$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Passenger$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passenger model
   */
  interface PassengerFieldRefs {
    readonly id: FieldRef<"Passenger", 'String'>
    readonly firstName: FieldRef<"Passenger", 'String'>
    readonly lastName: FieldRef<"Passenger", 'String'>
    readonly email: FieldRef<"Passenger", 'String'>
    readonly phone: FieldRef<"Passenger", 'String'>
    readonly passportNumber: FieldRef<"Passenger", 'String'>
    readonly dateOfBirth: FieldRef<"Passenger", 'DateTime'>
    readonly nationality: FieldRef<"Passenger", 'String'>
    readonly createdAt: FieldRef<"Passenger", 'DateTime'>
    readonly updatedAt: FieldRef<"Passenger", 'DateTime'>
    readonly userId: FieldRef<"Passenger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Passenger findUnique
   */
  export type PassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findUniqueOrThrow
   */
  export type PassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findFirst
   */
  export type PassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findFirstOrThrow
   */
  export type PassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findMany
   */
  export type PassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passengers to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger create
   */
  export type PassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a Passenger.
     */
    data: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
  }

  /**
   * Passenger createMany
   */
  export type PassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passenger createManyAndReturn
   */
  export type PassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passenger update
   */
  export type PassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a Passenger.
     */
    data: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
    /**
     * Choose, which Passenger to update.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger updateMany
   */
  export type PassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger updateManyAndReturn
   */
  export type PassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Passenger upsert
   */
  export type PassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the Passenger to update in case it exists.
     */
    where: PassengerWhereUniqueInput
    /**
     * In case the Passenger found by the `where` argument doesn't exist, create a new Passenger with this data.
     */
    create: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
    /**
     * In case the Passenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
  }

  /**
   * Passenger delete
   */
  export type PassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter which Passenger to delete.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger deleteMany
   */
  export type PassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passengers to delete
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to delete.
     */
    limit?: number
  }

  /**
   * Passenger.user
   */
  export type Passenger$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Passenger.bookings
   */
  export type Passenger$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    where?: BookingPassengerWhereInput
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    cursor?: BookingPassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingPassengerScalarFieldEnum | BookingPassengerScalarFieldEnum[]
  }

  /**
   * Passenger.tickets
   */
  export type Passenger$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Passenger without action
   */
  export type PassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    verificationToken: string | null
    verificationExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    verificationToken: string | null
    verificationExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    verificationToken: number
    verificationExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    verificationToken?: true
    verificationExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    verificationToken?: true
    verificationExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    verificationToken?: true
    verificationExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    verificationToken: string | null
    verificationExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationToken?: boolean
    verificationExpiry?: boolean
    passenger?: boolean | User$passengerArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationToken?: boolean
    verificationExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationToken?: boolean
    verificationExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationToken?: boolean
    verificationExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "isVerified" | "createdAt" | "updatedAt" | "verificationToken" | "verificationExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | User$passengerArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      passenger: Prisma.$PassengerPayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
      verificationToken: string | null
      verificationExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passenger<T extends User$passengerArgs<ExtArgs> = {}>(args?: Subset<T, User$passengerArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.passenger
   */
  export type User$passengerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    where?: PassengerWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    bookingReference: string | null
    bookingDate: Date | null
    status: $Enums.BookingStatus | null
    totalAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    flightId: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    bookingReference: string | null
    bookingDate: Date | null
    status: $Enums.BookingStatus | null
    totalAmount: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    flightId: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    bookingReference: number
    bookingDate: number
    status: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    userId: number
    flightId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    totalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    bookingReference?: true
    bookingDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    flightId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    bookingReference?: true
    bookingDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    flightId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    bookingReference?: true
    bookingDate?: true
    status?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    flightId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    bookingReference: string
    bookingDate: Date
    status: $Enums.BookingStatus
    totalAmount: Decimal
    createdAt: Date
    updatedAt: Date
    userId: string
    flightId: string
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingReference?: boolean
    bookingDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    flightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    passengers?: boolean | Booking$passengersArgs<ExtArgs>
    tickets?: boolean | Booking$ticketsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingReference?: boolean
    bookingDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    flightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingReference?: boolean
    bookingDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    flightId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    bookingReference?: boolean
    bookingDate?: boolean
    status?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    flightId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingReference" | "bookingDate" | "status" | "totalAmount" | "createdAt" | "updatedAt" | "userId" | "flightId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    passengers?: boolean | Booking$passengersArgs<ExtArgs>
    tickets?: boolean | Booking$ticketsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flight: Prisma.$FlightPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      passengers: Prisma.$BookingPassengerPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingReference: string
      bookingDate: Date
      status: $Enums.BookingStatus
      totalAmount: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      userId: string
      flightId: string
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flight<T extends FlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlightDefaultArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passengers<T extends Booking$passengersArgs<ExtArgs> = {}>(args?: Subset<T, Booking$passengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Booking$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly bookingReference: FieldRef<"Booking", 'String'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly totalAmount: FieldRef<"Booking", 'Decimal'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly flightId: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking.passengers
   */
  export type Booking$passengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    where?: BookingPassengerWhereInput
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    cursor?: BookingPassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingPassengerScalarFieldEnum | BookingPassengerScalarFieldEnum[]
  }

  /**
   * Booking.tickets
   */
  export type Booking$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingPassenger
   */

  export type AggregateBookingPassenger = {
    _count: BookingPassengerCountAggregateOutputType | null
    _min: BookingPassengerMinAggregateOutputType | null
    _max: BookingPassengerMaxAggregateOutputType | null
  }

  export type BookingPassengerMinAggregateOutputType = {
    id: string | null
    isMainContact: boolean | null
    bookingId: string | null
    passengerId: string | null
  }

  export type BookingPassengerMaxAggregateOutputType = {
    id: string | null
    isMainContact: boolean | null
    bookingId: string | null
    passengerId: string | null
  }

  export type BookingPassengerCountAggregateOutputType = {
    id: number
    isMainContact: number
    bookingId: number
    passengerId: number
    _all: number
  }


  export type BookingPassengerMinAggregateInputType = {
    id?: true
    isMainContact?: true
    bookingId?: true
    passengerId?: true
  }

  export type BookingPassengerMaxAggregateInputType = {
    id?: true
    isMainContact?: true
    bookingId?: true
    passengerId?: true
  }

  export type BookingPassengerCountAggregateInputType = {
    id?: true
    isMainContact?: true
    bookingId?: true
    passengerId?: true
    _all?: true
  }

  export type BookingPassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPassenger to aggregate.
     */
    where?: BookingPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPassengers to fetch.
     */
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingPassengers
    **/
    _count?: true | BookingPassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingPassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingPassengerMaxAggregateInputType
  }

  export type GetBookingPassengerAggregateType<T extends BookingPassengerAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingPassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingPassenger[P]>
      : GetScalarType<T[P], AggregateBookingPassenger[P]>
  }




  export type BookingPassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingPassengerWhereInput
    orderBy?: BookingPassengerOrderByWithAggregationInput | BookingPassengerOrderByWithAggregationInput[]
    by: BookingPassengerScalarFieldEnum[] | BookingPassengerScalarFieldEnum
    having?: BookingPassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingPassengerCountAggregateInputType | true
    _min?: BookingPassengerMinAggregateInputType
    _max?: BookingPassengerMaxAggregateInputType
  }

  export type BookingPassengerGroupByOutputType = {
    id: string
    isMainContact: boolean
    bookingId: string
    passengerId: string
    _count: BookingPassengerCountAggregateOutputType | null
    _min: BookingPassengerMinAggregateOutputType | null
    _max: BookingPassengerMaxAggregateOutputType | null
  }

  type GetBookingPassengerGroupByPayload<T extends BookingPassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingPassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingPassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingPassengerGroupByOutputType[P]>
            : GetScalarType<T[P], BookingPassengerGroupByOutputType[P]>
        }
      >
    >


  export type BookingPassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isMainContact?: boolean
    bookingId?: boolean
    passengerId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPassenger"]>

  export type BookingPassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isMainContact?: boolean
    bookingId?: boolean
    passengerId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPassenger"]>

  export type BookingPassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isMainContact?: boolean
    bookingId?: boolean
    passengerId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingPassenger"]>

  export type BookingPassengerSelectScalar = {
    id?: boolean
    isMainContact?: boolean
    bookingId?: boolean
    passengerId?: boolean
  }

  export type BookingPassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isMainContact" | "bookingId" | "passengerId", ExtArgs["result"]["bookingPassenger"]>
  export type BookingPassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }
  export type BookingPassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }
  export type BookingPassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
  }

  export type $BookingPassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingPassenger"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      passenger: Prisma.$PassengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isMainContact: boolean
      bookingId: string
      passengerId: string
    }, ExtArgs["result"]["bookingPassenger"]>
    composites: {}
  }

  type BookingPassengerGetPayload<S extends boolean | null | undefined | BookingPassengerDefaultArgs> = $Result.GetResult<Prisma.$BookingPassengerPayload, S>

  type BookingPassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingPassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingPassengerCountAggregateInputType | true
    }

  export interface BookingPassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingPassenger'], meta: { name: 'BookingPassenger' } }
    /**
     * Find zero or one BookingPassenger that matches the filter.
     * @param {BookingPassengerFindUniqueArgs} args - Arguments to find a BookingPassenger
     * @example
     * // Get one BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingPassengerFindUniqueArgs>(args: SelectSubset<T, BookingPassengerFindUniqueArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingPassenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingPassengerFindUniqueOrThrowArgs} args - Arguments to find a BookingPassenger
     * @example
     * // Get one BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingPassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingPassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPassenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerFindFirstArgs} args - Arguments to find a BookingPassenger
     * @example
     * // Get one BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingPassengerFindFirstArgs>(args?: SelectSubset<T, BookingPassengerFindFirstArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingPassenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerFindFirstOrThrowArgs} args - Arguments to find a BookingPassenger
     * @example
     * // Get one BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingPassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingPassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingPassengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingPassengers
     * const bookingPassengers = await prisma.bookingPassenger.findMany()
     * 
     * // Get first 10 BookingPassengers
     * const bookingPassengers = await prisma.bookingPassenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingPassengerWithIdOnly = await prisma.bookingPassenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingPassengerFindManyArgs>(args?: SelectSubset<T, BookingPassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingPassenger.
     * @param {BookingPassengerCreateArgs} args - Arguments to create a BookingPassenger.
     * @example
     * // Create one BookingPassenger
     * const BookingPassenger = await prisma.bookingPassenger.create({
     *   data: {
     *     // ... data to create a BookingPassenger
     *   }
     * })
     * 
     */
    create<T extends BookingPassengerCreateArgs>(args: SelectSubset<T, BookingPassengerCreateArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingPassengers.
     * @param {BookingPassengerCreateManyArgs} args - Arguments to create many BookingPassengers.
     * @example
     * // Create many BookingPassengers
     * const bookingPassenger = await prisma.bookingPassenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingPassengerCreateManyArgs>(args?: SelectSubset<T, BookingPassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingPassengers and returns the data saved in the database.
     * @param {BookingPassengerCreateManyAndReturnArgs} args - Arguments to create many BookingPassengers.
     * @example
     * // Create many BookingPassengers
     * const bookingPassenger = await prisma.bookingPassenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingPassengers and only return the `id`
     * const bookingPassengerWithIdOnly = await prisma.bookingPassenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingPassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingPassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingPassenger.
     * @param {BookingPassengerDeleteArgs} args - Arguments to delete one BookingPassenger.
     * @example
     * // Delete one BookingPassenger
     * const BookingPassenger = await prisma.bookingPassenger.delete({
     *   where: {
     *     // ... filter to delete one BookingPassenger
     *   }
     * })
     * 
     */
    delete<T extends BookingPassengerDeleteArgs>(args: SelectSubset<T, BookingPassengerDeleteArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingPassenger.
     * @param {BookingPassengerUpdateArgs} args - Arguments to update one BookingPassenger.
     * @example
     * // Update one BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingPassengerUpdateArgs>(args: SelectSubset<T, BookingPassengerUpdateArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingPassengers.
     * @param {BookingPassengerDeleteManyArgs} args - Arguments to filter BookingPassengers to delete.
     * @example
     * // Delete a few BookingPassengers
     * const { count } = await prisma.bookingPassenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingPassengerDeleteManyArgs>(args?: SelectSubset<T, BookingPassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingPassengers
     * const bookingPassenger = await prisma.bookingPassenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingPassengerUpdateManyArgs>(args: SelectSubset<T, BookingPassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingPassengers and returns the data updated in the database.
     * @param {BookingPassengerUpdateManyAndReturnArgs} args - Arguments to update many BookingPassengers.
     * @example
     * // Update many BookingPassengers
     * const bookingPassenger = await prisma.bookingPassenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingPassengers and only return the `id`
     * const bookingPassengerWithIdOnly = await prisma.bookingPassenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingPassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingPassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingPassenger.
     * @param {BookingPassengerUpsertArgs} args - Arguments to update or create a BookingPassenger.
     * @example
     * // Update or create a BookingPassenger
     * const bookingPassenger = await prisma.bookingPassenger.upsert({
     *   create: {
     *     // ... data to create a BookingPassenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingPassenger we want to update
     *   }
     * })
     */
    upsert<T extends BookingPassengerUpsertArgs>(args: SelectSubset<T, BookingPassengerUpsertArgs<ExtArgs>>): Prisma__BookingPassengerClient<$Result.GetResult<Prisma.$BookingPassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerCountArgs} args - Arguments to filter BookingPassengers to count.
     * @example
     * // Count the number of BookingPassengers
     * const count = await prisma.bookingPassenger.count({
     *   where: {
     *     // ... the filter for the BookingPassengers we want to count
     *   }
     * })
    **/
    count<T extends BookingPassengerCountArgs>(
      args?: Subset<T, BookingPassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingPassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingPassengerAggregateArgs>(args: Subset<T, BookingPassengerAggregateArgs>): Prisma.PrismaPromise<GetBookingPassengerAggregateType<T>>

    /**
     * Group by BookingPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingPassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingPassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingPassengerGroupByArgs['orderBy'] }
        : { orderBy?: BookingPassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingPassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingPassenger model
   */
  readonly fields: BookingPassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingPassenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingPassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passenger<T extends PassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassengerDefaultArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingPassenger model
   */
  interface BookingPassengerFieldRefs {
    readonly id: FieldRef<"BookingPassenger", 'String'>
    readonly isMainContact: FieldRef<"BookingPassenger", 'Boolean'>
    readonly bookingId: FieldRef<"BookingPassenger", 'String'>
    readonly passengerId: FieldRef<"BookingPassenger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingPassenger findUnique
   */
  export type BookingPassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter, which BookingPassenger to fetch.
     */
    where: BookingPassengerWhereUniqueInput
  }

  /**
   * BookingPassenger findUniqueOrThrow
   */
  export type BookingPassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter, which BookingPassenger to fetch.
     */
    where: BookingPassengerWhereUniqueInput
  }

  /**
   * BookingPassenger findFirst
   */
  export type BookingPassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter, which BookingPassenger to fetch.
     */
    where?: BookingPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPassengers to fetch.
     */
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPassengers.
     */
    cursor?: BookingPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPassengers.
     */
    distinct?: BookingPassengerScalarFieldEnum | BookingPassengerScalarFieldEnum[]
  }

  /**
   * BookingPassenger findFirstOrThrow
   */
  export type BookingPassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter, which BookingPassenger to fetch.
     */
    where?: BookingPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPassengers to fetch.
     */
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingPassengers.
     */
    cursor?: BookingPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingPassengers.
     */
    distinct?: BookingPassengerScalarFieldEnum | BookingPassengerScalarFieldEnum[]
  }

  /**
   * BookingPassenger findMany
   */
  export type BookingPassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter, which BookingPassengers to fetch.
     */
    where?: BookingPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingPassengers to fetch.
     */
    orderBy?: BookingPassengerOrderByWithRelationInput | BookingPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingPassengers.
     */
    cursor?: BookingPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingPassengers.
     */
    skip?: number
    distinct?: BookingPassengerScalarFieldEnum | BookingPassengerScalarFieldEnum[]
  }

  /**
   * BookingPassenger create
   */
  export type BookingPassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingPassenger.
     */
    data: XOR<BookingPassengerCreateInput, BookingPassengerUncheckedCreateInput>
  }

  /**
   * BookingPassenger createMany
   */
  export type BookingPassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingPassengers.
     */
    data: BookingPassengerCreateManyInput | BookingPassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingPassenger createManyAndReturn
   */
  export type BookingPassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * The data used to create many BookingPassengers.
     */
    data: BookingPassengerCreateManyInput | BookingPassengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPassenger update
   */
  export type BookingPassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingPassenger.
     */
    data: XOR<BookingPassengerUpdateInput, BookingPassengerUncheckedUpdateInput>
    /**
     * Choose, which BookingPassenger to update.
     */
    where: BookingPassengerWhereUniqueInput
  }

  /**
   * BookingPassenger updateMany
   */
  export type BookingPassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingPassengers.
     */
    data: XOR<BookingPassengerUpdateManyMutationInput, BookingPassengerUncheckedUpdateManyInput>
    /**
     * Filter which BookingPassengers to update
     */
    where?: BookingPassengerWhereInput
    /**
     * Limit how many BookingPassengers to update.
     */
    limit?: number
  }

  /**
   * BookingPassenger updateManyAndReturn
   */
  export type BookingPassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * The data used to update BookingPassengers.
     */
    data: XOR<BookingPassengerUpdateManyMutationInput, BookingPassengerUncheckedUpdateManyInput>
    /**
     * Filter which BookingPassengers to update
     */
    where?: BookingPassengerWhereInput
    /**
     * Limit how many BookingPassengers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingPassenger upsert
   */
  export type BookingPassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingPassenger to update in case it exists.
     */
    where: BookingPassengerWhereUniqueInput
    /**
     * In case the BookingPassenger found by the `where` argument doesn't exist, create a new BookingPassenger with this data.
     */
    create: XOR<BookingPassengerCreateInput, BookingPassengerUncheckedCreateInput>
    /**
     * In case the BookingPassenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingPassengerUpdateInput, BookingPassengerUncheckedUpdateInput>
  }

  /**
   * BookingPassenger delete
   */
  export type BookingPassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
    /**
     * Filter which BookingPassenger to delete.
     */
    where: BookingPassengerWhereUniqueInput
  }

  /**
   * BookingPassenger deleteMany
   */
  export type BookingPassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingPassengers to delete
     */
    where?: BookingPassengerWhereInput
    /**
     * Limit how many BookingPassengers to delete.
     */
    limit?: number
  }

  /**
   * BookingPassenger without action
   */
  export type BookingPassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingPassenger
     */
    select?: BookingPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingPassenger
     */
    omit?: BookingPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingPassengerInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    issueDate: Date | null
    status: $Enums.TicketStatus | null
    boardingPass: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookingId: string | null
    passengerId: string | null
    flightSeatId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticketNumber: string | null
    issueDate: Date | null
    status: $Enums.TicketStatus | null
    boardingPass: string | null
    createdAt: Date | null
    updatedAt: Date | null
    bookingId: string | null
    passengerId: string | null
    flightSeatId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticketNumber: number
    issueDate: number
    status: number
    boardingPass: number
    createdAt: number
    updatedAt: number
    bookingId: number
    passengerId: number
    flightSeatId: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    ticketNumber?: true
    issueDate?: true
    status?: true
    boardingPass?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
    passengerId?: true
    flightSeatId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticketNumber?: true
    issueDate?: true
    status?: true
    boardingPass?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
    passengerId?: true
    flightSeatId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticketNumber?: true
    issueDate?: true
    status?: true
    boardingPass?: true
    createdAt?: true
    updatedAt?: true
    bookingId?: true
    passengerId?: true
    flightSeatId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticketNumber: string
    issueDate: Date
    status: $Enums.TicketStatus
    boardingPass: string | null
    createdAt: Date
    updatedAt: Date
    bookingId: string
    passengerId: string
    flightSeatId: string
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    issueDate?: boolean
    status?: boolean
    boardingPass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
    passengerId?: boolean
    flightSeatId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
    refund?: boolean | Ticket$refundArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    issueDate?: boolean
    status?: boolean
    boardingPass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
    passengerId?: boolean
    flightSeatId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNumber?: boolean
    issueDate?: boolean
    status?: boolean
    boardingPass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
    passengerId?: boolean
    flightSeatId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    ticketNumber?: boolean
    issueDate?: boolean
    status?: boolean
    boardingPass?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookingId?: boolean
    passengerId?: boolean
    flightSeatId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketNumber" | "issueDate" | "status" | "boardingPass" | "createdAt" | "updatedAt" | "bookingId" | "passengerId" | "flightSeatId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
    refund?: boolean | Ticket$refundArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    passenger?: boolean | PassengerDefaultArgs<ExtArgs>
    flightSeat?: boolean | FlightSeatDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      passenger: Prisma.$PassengerPayload<ExtArgs>
      flightSeat: Prisma.$FlightSeatPayload<ExtArgs>
      refund: Prisma.$RefundPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNumber: string
      issueDate: Date
      status: $Enums.TicketStatus
      boardingPass: string | null
      createdAt: Date
      updatedAt: Date
      bookingId: string
      passengerId: string
      flightSeatId: string
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passenger<T extends PassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassengerDefaultArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flightSeat<T extends FlightSeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlightSeatDefaultArgs<ExtArgs>>): Prisma__FlightSeatClient<$Result.GetResult<Prisma.$FlightSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    refund<T extends Ticket$refundArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$refundArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticketNumber: FieldRef<"Ticket", 'String'>
    readonly issueDate: FieldRef<"Ticket", 'DateTime'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly boardingPass: FieldRef<"Ticket", 'String'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly bookingId: FieldRef<"Ticket", 'String'>
    readonly passengerId: FieldRef<"Ticket", 'String'>
    readonly flightSeatId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.refund
   */
  export type Ticket$refundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    where?: RefundWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentDate: Date | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    bookingId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    paymentDate: Date | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    bookingId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    paymentMethod: number
    paymentDate: number
    transactionId: number
    status: number
    bookingId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    paymentDate?: true
    transactionId?: true
    status?: true
    bookingId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    paymentDate?: true
    transactionId?: true
    status?: true
    bookingId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    paymentDate?: true
    transactionId?: true
    status?: true
    bookingId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: Decimal
    paymentMethod: $Enums.PaymentMethod
    paymentDate: Date
    transactionId: string | null
    status: $Enums.PaymentStatus
    bookingId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paymentDate?: boolean
    transactionId?: boolean
    status?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paymentDate?: boolean
    transactionId?: boolean
    status?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paymentDate?: boolean
    transactionId?: boolean
    status?: boolean
    bookingId?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    paymentDate?: boolean
    transactionId?: boolean
    status?: boolean
    bookingId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "paymentMethod" | "paymentDate" | "transactionId" | "status" | "bookingId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      paymentMethod: $Enums.PaymentMethod
      paymentDate: Date
      transactionId: string | null
      status: $Enums.PaymentStatus
      bookingId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly bookingId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type RefundMinAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.RefundStatus | null
    requestDate: Date | null
    processedDate: Date | null
    ticketId: string | null
  }

  export type RefundMaxAggregateOutputType = {
    id: string | null
    amount: Decimal | null
    reason: string | null
    status: $Enums.RefundStatus | null
    requestDate: Date | null
    processedDate: Date | null
    ticketId: string | null
  }

  export type RefundCountAggregateOutputType = {
    id: number
    amount: number
    reason: number
    status: number
    requestDate: number
    processedDate: number
    ticketId: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amount?: true
  }

  export type RefundSumAggregateInputType = {
    amount?: true
  }

  export type RefundMinAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    status?: true
    requestDate?: true
    processedDate?: true
    ticketId?: true
  }

  export type RefundMaxAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    status?: true
    requestDate?: true
    processedDate?: true
    ticketId?: true
  }

  export type RefundCountAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    status?: true
    requestDate?: true
    processedDate?: true
    ticketId?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    id: string
    amount: Decimal
    reason: string | null
    status: $Enums.RefundStatus
    requestDate: Date
    processedDate: Date | null
    ticketId: string
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    requestDate?: boolean
    processedDate?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    requestDate?: boolean
    processedDate?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    requestDate?: boolean
    processedDate?: boolean
    ticketId?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    id?: boolean
    amount?: boolean
    reason?: boolean
    status?: boolean
    requestDate?: boolean
    processedDate?: boolean
    ticketId?: boolean
  }

  export type RefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "reason" | "status" | "requestDate" | "processedDate" | "ticketId", ExtArgs["result"]["refund"]>
  export type RefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type RefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }
  export type RefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: Prisma.Decimal
      reason: string | null
      status: $Enums.RefundStatus
      requestDate: Date
      processedDate: Date | null
      ticketId: string
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundWithIdOnly = await prisma.refund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refund model
   */
  interface RefundFieldRefs {
    readonly id: FieldRef<"Refund", 'String'>
    readonly amount: FieldRef<"Refund", 'Decimal'>
    readonly reason: FieldRef<"Refund", 'String'>
    readonly status: FieldRef<"Refund", 'RefundStatus'>
    readonly requestDate: FieldRef<"Refund", 'DateTime'>
    readonly processedDate: FieldRef<"Refund", 'DateTime'>
    readonly ticketId: FieldRef<"Refund", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund updateManyAndReturn
   */
  export type RefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AirlineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    country: 'country',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AirlineScalarFieldEnum = (typeof AirlineScalarFieldEnum)[keyof typeof AirlineScalarFieldEnum]


  export const AirportScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    city: 'city',
    country: 'country',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AirportScalarFieldEnum = (typeof AirportScalarFieldEnum)[keyof typeof AirportScalarFieldEnum]


  export const FlightScalarFieldEnum: {
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

  export type FlightScalarFieldEnum = (typeof FlightScalarFieldEnum)[keyof typeof FlightScalarFieldEnum]


  export const FlightSeatScalarFieldEnum: {
    id: 'id',
    seatNumber: 'seatNumber',
    seatClass: 'seatClass',
    price: 'price',
    isAvailable: 'isAvailable',
    flightId: 'flightId'
  };

  export type FlightSeatScalarFieldEnum = (typeof FlightSeatScalarFieldEnum)[keyof typeof FlightSeatScalarFieldEnum]


  export const PassengerScalarFieldEnum: {
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

  export type PassengerScalarFieldEnum = (typeof PassengerScalarFieldEnum)[keyof typeof PassengerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    verificationToken: 'verificationToken',
    verificationExpiry: 'verificationExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookingScalarFieldEnum: {
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

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const BookingPassengerScalarFieldEnum: {
    id: 'id',
    isMainContact: 'isMainContact',
    bookingId: 'bookingId',
    passengerId: 'passengerId'
  };

  export type BookingPassengerScalarFieldEnum = (typeof BookingPassengerScalarFieldEnum)[keyof typeof BookingPassengerScalarFieldEnum]


  export const TicketScalarFieldEnum: {
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

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    paymentDate: 'paymentDate',
    transactionId: 'transactionId',
    status: 'status',
    bookingId: 'bookingId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    reason: 'reason',
    status: 'status',
    requestDate: 'requestDate',
    processedDate: 'processedDate',
    ticketId: 'ticketId'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'FlightStatus'
   */
  export type EnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus'>
    


  /**
   * Reference to a field of type 'FlightStatus[]'
   */
  export type ListEnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus[]'>
    


  /**
   * Reference to a field of type 'SeatClass'
   */
  export type EnumSeatClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeatClass'>
    


  /**
   * Reference to a field of type 'SeatClass[]'
   */
  export type ListEnumSeatClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeatClass[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'RefundStatus'
   */
  export type EnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus'>
    


  /**
   * Reference to a field of type 'RefundStatus[]'
   */
  export type ListEnumRefundStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RefundStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AirlineWhereInput = {
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    id?: StringFilter<"Airline"> | string
    name?: StringFilter<"Airline"> | string
    code?: StringFilter<"Airline"> | string
    country?: StringFilter<"Airline"> | string
    logoUrl?: StringNullableFilter<"Airline"> | string | null
    createdAt?: DateTimeFilter<"Airline"> | Date | string
    updatedAt?: DateTimeFilter<"Airline"> | Date | string
    flights?: FlightListRelationFilter
  }

  export type AirlineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flights?: FlightOrderByRelationAggregateInput
  }

  export type AirlineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    country?: StringFilter<"Airline"> | string
    logoUrl?: StringNullableFilter<"Airline"> | string | null
    createdAt?: DateTimeFilter<"Airline"> | Date | string
    updatedAt?: DateTimeFilter<"Airline"> | Date | string
    flights?: FlightListRelationFilter
  }, "id" | "name" | "code">

  export type AirlineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AirlineCountOrderByAggregateInput
    _max?: AirlineMaxOrderByAggregateInput
    _min?: AirlineMinOrderByAggregateInput
  }

  export type AirlineScalarWhereWithAggregatesInput = {
    AND?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    OR?: AirlineScalarWhereWithAggregatesInput[]
    NOT?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airline"> | string
    name?: StringWithAggregatesFilter<"Airline"> | string
    code?: StringWithAggregatesFilter<"Airline"> | string
    country?: StringWithAggregatesFilter<"Airline"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Airline"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Airline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airline"> | Date | string
  }

  export type AirportWhereInput = {
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    id?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    code?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    departureFlights?: FlightListRelationFilter
    arrivalFlights?: FlightListRelationFilter
  }

  export type AirportOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departureFlights?: FlightOrderByRelationAggregateInput
    arrivalFlights?: FlightOrderByRelationAggregateInput
  }

  export type AirportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    name?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    departureFlights?: FlightListRelationFilter
    arrivalFlights?: FlightListRelationFilter
  }, "id" | "code">

  export type AirportOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AirportCountOrderByAggregateInput
    _max?: AirportMaxOrderByAggregateInput
    _min?: AirportMinOrderByAggregateInput
  }

  export type AirportScalarWhereWithAggregatesInput = {
    AND?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    OR?: AirportScalarWhereWithAggregatesInput[]
    NOT?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airport"> | string
    name?: StringWithAggregatesFilter<"Airport"> | string
    code?: StringWithAggregatesFilter<"Airport"> | string
    city?: StringWithAggregatesFilter<"Airport"> | string
    country?: StringWithAggregatesFilter<"Airport"> | string
    timezone?: StringWithAggregatesFilter<"Airport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
  }

  export type FlightWhereInput = {
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    id?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    baseFare?: DecimalFilter<"Flight"> | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    airlineId?: StringFilter<"Flight"> | string
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
    airline?: XOR<AirlineScalarRelationFilter, AirlineWhereInput>
    departureAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    arrivalAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    flightSeats?: FlightSeatListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type FlightOrderByWithRelationInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    baseFare?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    airline?: AirlineOrderByWithRelationInput
    departureAirport?: AirportOrderByWithRelationInput
    arrivalAirport?: AirportOrderByWithRelationInput
    flightSeats?: FlightSeatOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type FlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flightNumber_departureTime?: FlightFlightNumberDepartureTimeCompoundUniqueInput
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    baseFare?: DecimalFilter<"Flight"> | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    airlineId?: StringFilter<"Flight"> | string
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
    airline?: XOR<AirlineScalarRelationFilter, AirlineWhereInput>
    departureAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    arrivalAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    flightSeats?: FlightSeatListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "flightNumber_departureTime">

  export type FlightOrderByWithAggregationInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    baseFare?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    _count?: FlightCountOrderByAggregateInput
    _avg?: FlightAvgOrderByAggregateInput
    _max?: FlightMaxOrderByAggregateInput
    _min?: FlightMinOrderByAggregateInput
    _sum?: FlightSumOrderByAggregateInput
  }

  export type FlightScalarWhereWithAggregatesInput = {
    AND?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    OR?: FlightScalarWhereWithAggregatesInput[]
    NOT?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flight"> | string
    flightNumber?: StringWithAggregatesFilter<"Flight"> | string
    departureTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    baseFare?: DecimalWithAggregatesFilter<"Flight"> | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusWithAggregatesFilter<"Flight"> | $Enums.FlightStatus
    createdAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    airlineId?: StringWithAggregatesFilter<"Flight"> | string
    departureAirportId?: StringWithAggregatesFilter<"Flight"> | string
    arrivalAirportId?: StringWithAggregatesFilter<"Flight"> | string
  }

  export type FlightSeatWhereInput = {
    AND?: FlightSeatWhereInput | FlightSeatWhereInput[]
    OR?: FlightSeatWhereInput[]
    NOT?: FlightSeatWhereInput | FlightSeatWhereInput[]
    id?: StringFilter<"FlightSeat"> | string
    seatNumber?: StringFilter<"FlightSeat"> | string
    seatClass?: EnumSeatClassFilter<"FlightSeat"> | $Enums.SeatClass
    price?: DecimalFilter<"FlightSeat"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"FlightSeat"> | boolean
    flightId?: StringFilter<"FlightSeat"> | string
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type FlightSeatOrderByWithRelationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    seatClass?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    flightId?: SortOrder
    flight?: FlightOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type FlightSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flightId_seatNumber?: FlightSeatFlightIdSeatNumberCompoundUniqueInput
    AND?: FlightSeatWhereInput | FlightSeatWhereInput[]
    OR?: FlightSeatWhereInput[]
    NOT?: FlightSeatWhereInput | FlightSeatWhereInput[]
    seatNumber?: StringFilter<"FlightSeat"> | string
    seatClass?: EnumSeatClassFilter<"FlightSeat"> | $Enums.SeatClass
    price?: DecimalFilter<"FlightSeat"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"FlightSeat"> | boolean
    flightId?: StringFilter<"FlightSeat"> | string
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
    tickets?: TicketListRelationFilter
  }, "id" | "flightId_seatNumber">

  export type FlightSeatOrderByWithAggregationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    seatClass?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    flightId?: SortOrder
    _count?: FlightSeatCountOrderByAggregateInput
    _avg?: FlightSeatAvgOrderByAggregateInput
    _max?: FlightSeatMaxOrderByAggregateInput
    _min?: FlightSeatMinOrderByAggregateInput
    _sum?: FlightSeatSumOrderByAggregateInput
  }

  export type FlightSeatScalarWhereWithAggregatesInput = {
    AND?: FlightSeatScalarWhereWithAggregatesInput | FlightSeatScalarWhereWithAggregatesInput[]
    OR?: FlightSeatScalarWhereWithAggregatesInput[]
    NOT?: FlightSeatScalarWhereWithAggregatesInput | FlightSeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlightSeat"> | string
    seatNumber?: StringWithAggregatesFilter<"FlightSeat"> | string
    seatClass?: EnumSeatClassWithAggregatesFilter<"FlightSeat"> | $Enums.SeatClass
    price?: DecimalWithAggregatesFilter<"FlightSeat"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolWithAggregatesFilter<"FlightSeat"> | boolean
    flightId?: StringWithAggregatesFilter<"FlightSeat"> | string
  }

  export type PassengerWhereInput = {
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    id?: StringFilter<"Passenger"> | string
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    email?: StringFilter<"Passenger"> | string
    phone?: StringNullableFilter<"Passenger"> | string | null
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Passenger"> | Date | string | null
    nationality?: StringNullableFilter<"Passenger"> | string | null
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    userId?: StringNullableFilter<"Passenger"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookings?: BookingPassengerListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type PassengerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingPassengerOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type PassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    phone?: StringNullableFilter<"Passenger"> | string | null
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Passenger"> | Date | string | null
    nationality?: StringNullableFilter<"Passenger"> | string | null
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bookings?: BookingPassengerListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "email" | "userId">

  export type PassengerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PassengerCountOrderByAggregateInput
    _max?: PassengerMaxOrderByAggregateInput
    _min?: PassengerMinOrderByAggregateInput
  }

  export type PassengerScalarWhereWithAggregatesInput = {
    AND?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    OR?: PassengerScalarWhereWithAggregatesInput[]
    NOT?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passenger"> | string
    firstName?: StringWithAggregatesFilter<"Passenger"> | string
    lastName?: StringWithAggregatesFilter<"Passenger"> | string
    email?: StringWithAggregatesFilter<"Passenger"> | string
    phone?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    passportNumber?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Passenger"> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passenger?: XOR<PassengerNullableScalarRelationFilter, PassengerWhereInput> | null
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationExpiry?: SortOrderInput | SortOrder
    passenger?: PassengerOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passenger?: XOR<PassengerNullableScalarRelationFilter, PassengerWhereInput> | null
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    userId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
    payments?: PaymentListRelationFilter
    passengers?: BookingPassengerListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingReference?: SortOrder
    bookingDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    user?: UserOrderByWithRelationInput
    flight?: FlightOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    passengers?: BookingPassengerOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingReference?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    userId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flight?: XOR<FlightScalarRelationFilter, FlightWhereInput>
    payments?: PaymentListRelationFilter
    passengers?: BookingPassengerListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "bookingReference">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingReference?: SortOrder
    bookingDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    bookingReference?: StringWithAggregatesFilter<"Booking"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    flightId?: StringWithAggregatesFilter<"Booking"> | string
  }

  export type BookingPassengerWhereInput = {
    AND?: BookingPassengerWhereInput | BookingPassengerWhereInput[]
    OR?: BookingPassengerWhereInput[]
    NOT?: BookingPassengerWhereInput | BookingPassengerWhereInput[]
    id?: StringFilter<"BookingPassenger"> | string
    isMainContact?: BoolFilter<"BookingPassenger"> | boolean
    bookingId?: StringFilter<"BookingPassenger"> | string
    passengerId?: StringFilter<"BookingPassenger"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
  }

  export type BookingPassengerOrderByWithRelationInput = {
    id?: SortOrder
    isMainContact?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    passenger?: PassengerOrderByWithRelationInput
  }

  export type BookingPassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId_passengerId?: BookingPassengerBookingIdPassengerIdCompoundUniqueInput
    AND?: BookingPassengerWhereInput | BookingPassengerWhereInput[]
    OR?: BookingPassengerWhereInput[]
    NOT?: BookingPassengerWhereInput | BookingPassengerWhereInput[]
    isMainContact?: BoolFilter<"BookingPassenger"> | boolean
    bookingId?: StringFilter<"BookingPassenger"> | string
    passengerId?: StringFilter<"BookingPassenger"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
  }, "id" | "bookingId_passengerId">

  export type BookingPassengerOrderByWithAggregationInput = {
    id?: SortOrder
    isMainContact?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    _count?: BookingPassengerCountOrderByAggregateInput
    _max?: BookingPassengerMaxOrderByAggregateInput
    _min?: BookingPassengerMinOrderByAggregateInput
  }

  export type BookingPassengerScalarWhereWithAggregatesInput = {
    AND?: BookingPassengerScalarWhereWithAggregatesInput | BookingPassengerScalarWhereWithAggregatesInput[]
    OR?: BookingPassengerScalarWhereWithAggregatesInput[]
    NOT?: BookingPassengerScalarWhereWithAggregatesInput | BookingPassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingPassenger"> | string
    isMainContact?: BoolWithAggregatesFilter<"BookingPassenger"> | boolean
    bookingId?: StringWithAggregatesFilter<"BookingPassenger"> | string
    passengerId?: StringWithAggregatesFilter<"BookingPassenger"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: StringFilter<"Ticket"> | string
    issueDate?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    boardingPass?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    bookingId?: StringFilter<"Ticket"> | string
    passengerId?: StringFilter<"Ticket"> | string
    flightSeatId?: StringFilter<"Ticket"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    flightSeat?: XOR<FlightSeatScalarRelationFilter, FlightSeatWhereInput>
    refund?: XOR<RefundNullableScalarRelationFilter, RefundWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    issueDate?: SortOrder
    status?: SortOrder
    boardingPass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    flightSeatId?: SortOrder
    booking?: BookingOrderByWithRelationInput
    passenger?: PassengerOrderByWithRelationInput
    flightSeat?: FlightSeatOrderByWithRelationInput
    refund?: RefundOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNumber?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    issueDate?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    boardingPass?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    bookingId?: StringFilter<"Ticket"> | string
    passengerId?: StringFilter<"Ticket"> | string
    flightSeatId?: StringFilter<"Ticket"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    passenger?: XOR<PassengerScalarRelationFilter, PassengerWhereInput>
    flightSeat?: XOR<FlightSeatScalarRelationFilter, FlightSeatWhereInput>
    refund?: XOR<RefundNullableScalarRelationFilter, RefundWhereInput> | null
  }, "id" | "ticketNumber">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    issueDate?: SortOrder
    status?: SortOrder
    boardingPass?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    flightSeatId?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticketNumber?: StringWithAggregatesFilter<"Ticket"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    boardingPass?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    bookingId?: StringWithAggregatesFilter<"Ticket"> | string
    passengerId?: StringWithAggregatesFilter<"Ticket"> | string
    flightSeatId?: StringWithAggregatesFilter<"Ticket"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: StringFilter<"Payment"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paymentDate?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    bookingId?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: StringFilter<"Payment"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paymentDate?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    bookingId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    id?: StringFilter<"Refund"> | string
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableFilter<"Refund"> | string | null
    status?: EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus
    requestDate?: DateTimeFilter<"Refund"> | Date | string
    processedDate?: DateTimeNullableFilter<"Refund"> | Date | string | null
    ticketId?: StringFilter<"Refund"> | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type RefundOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    requestDate?: SortOrder
    processedDate?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketId?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    amount?: DecimalFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableFilter<"Refund"> | string | null
    status?: EnumRefundStatusFilter<"Refund"> | $Enums.RefundStatus
    requestDate?: DateTimeFilter<"Refund"> | Date | string
    processedDate?: DateTimeNullableFilter<"Refund"> | Date | string | null
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id" | "ticketId">

  export type RefundOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    requestDate?: SortOrder
    processedDate?: SortOrderInput | SortOrder
    ticketId?: SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refund"> | string
    amount?: DecimalWithAggregatesFilter<"Refund"> | Decimal | DecimalJsLike | number | string
    reason?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    status?: EnumRefundStatusWithAggregatesFilter<"Refund"> | $Enums.RefundStatus
    requestDate?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
    processedDate?: DateTimeNullableWithAggregatesFilter<"Refund"> | Date | string | null
    ticketId?: StringWithAggregatesFilter<"Refund"> | string
  }

  export type AirlineCreateInput = {
    id?: string
    name: string
    code: string
    country: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    country: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineCreateManyInput = {
    id?: string
    name: string
    code: string
    country: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirlineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirlineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportCreateInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departureFlights?: FlightCreateNestedManyWithoutDepartureAirportInput
    arrivalFlights?: FlightCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departureFlights?: FlightUncheckedCreateNestedManyWithoutDepartureAirportInput
    arrivalFlights?: FlightUncheckedCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlights?: FlightUpdateManyWithoutDepartureAirportNestedInput
    arrivalFlights?: FlightUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlights?: FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput
    arrivalFlights?: FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportCreateManyInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightCreateInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutFlightsInput
    departureAirport: AirportCreateNestedOneWithoutDepartureFlightsInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalFlightsInput
    flightSeats?: FlightSeatCreateNestedManyWithoutFlightInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
    arrivalAirportId: string
    flightSeats?: FlightSeatUncheckedCreateNestedManyWithoutFlightInput
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutFlightsNestedInput
    departureAirport?: AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput
    flightSeats?: FlightSeatUpdateManyWithoutFlightNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    flightSeats?: FlightSeatUncheckedUpdateManyWithoutFlightNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightCreateManyInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
    arrivalAirportId: string
  }

  export type FlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightSeatCreateInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    flight: FlightCreateNestedOneWithoutFlightSeatsInput
    tickets?: TicketCreateNestedManyWithoutFlightSeatInput
  }

  export type FlightSeatUncheckedCreateInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    flightId: string
    tickets?: TicketUncheckedCreateNestedManyWithoutFlightSeatInput
  }

  export type FlightSeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    flight?: FlightUpdateOneRequiredWithoutFlightSeatsNestedInput
    tickets?: TicketUpdateManyWithoutFlightSeatNestedInput
  }

  export type FlightSeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    flightId?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutFlightSeatNestedInput
  }

  export type FlightSeatCreateManyInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    flightId: string
  }

  export type FlightSeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlightSeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    flightId?: StringFieldUpdateOperationsInput | string
  }

  export type PassengerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPassengerInput
    bookings?: BookingPassengerCreateNestedManyWithoutPassengerInput
    tickets?: TicketCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    bookings?: BookingPassengerUncheckedCreateNestedManyWithoutPassengerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPassengerNestedInput
    bookings?: BookingPassengerUpdateManyWithoutPassengerNestedInput
    tickets?: TicketUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingPassengerUncheckedUpdateManyWithoutPassengerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type PassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    passenger?: PassengerCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    passenger?: PassengerUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger?: PassengerUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger?: PassengerUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    flight: FlightCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerCreateNestedManyWithoutBookingInput
    tickets?: TicketCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flightId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerUncheckedCreateNestedManyWithoutBookingInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUpdateManyWithoutBookingNestedInput
    tickets?: TicketUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flightId: string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPassengerCreateInput = {
    id?: string
    isMainContact?: boolean
    booking: BookingCreateNestedOneWithoutPassengersInput
    passenger: PassengerCreateNestedOneWithoutBookingsInput
  }

  export type BookingPassengerUncheckedCreateInput = {
    id?: string
    isMainContact?: boolean
    bookingId: string
    passengerId: string
  }

  export type BookingPassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    booking?: BookingUpdateOneRequiredWithoutPassengersNestedInput
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingPassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPassengerCreateManyInput = {
    id?: string
    isMainContact?: boolean
    bookingId: string
    passengerId: string
  }

  export type BookingPassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingPassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutTicketsInput
    passenger: PassengerCreateNestedOneWithoutTicketsInput
    flightSeat: FlightSeatCreateNestedOneWithoutTicketsInput
    refund?: RefundCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    passengerId: string
    flightSeatId: string
    refund?: RefundUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutTicketsNestedInput
    passenger?: PassengerUpdateOneRequiredWithoutTicketsNestedInput
    flightSeat?: FlightSeatUpdateOneRequiredWithoutTicketsNestedInput
    refund?: RefundUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
    refund?: RefundUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    passengerId: string
    flightSeatId: string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    booking: BookingCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    bookingId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    bookingId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    bookingId?: StringFieldUpdateOperationsInput | string
  }

  export type RefundCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    status?: $Enums.RefundStatus
    requestDate?: Date | string
    processedDate?: Date | string | null
    ticket: TicketCreateNestedOneWithoutRefundInput
  }

  export type RefundUncheckedCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    status?: $Enums.RefundStatus
    requestDate?: Date | string
    processedDate?: Date | string | null
    ticketId: string
  }

  export type RefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticket?: TicketUpdateOneRequiredWithoutRefundNestedInput
  }

  export type RefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type RefundCreateManyInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    status?: $Enums.RefundStatus
    requestDate?: Date | string
    processedDate?: Date | string | null
    ticketId: string
  }

  export type RefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FlightListRelationFilter = {
    every?: FlightWhereInput
    some?: FlightWhereInput
    none?: FlightWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirlineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirlineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AirportCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirportMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirportMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type AirlineScalarRelationFilter = {
    is?: AirlineWhereInput
    isNot?: AirlineWhereInput
  }

  export type AirportScalarRelationFilter = {
    is?: AirportWhereInput
    isNot?: AirportWhereInput
  }

  export type FlightSeatListRelationFilter = {
    every?: FlightSeatWhereInput
    some?: FlightSeatWhereInput
    none?: FlightSeatWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type FlightSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightFlightNumberDepartureTimeCompoundUniqueInput = {
    flightNumber: string
    departureTime: Date | string
  }

  export type FlightCountOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    baseFare?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
  }

  export type FlightAvgOrderByAggregateInput = {
    baseFare?: SortOrder
  }

  export type FlightMaxOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    baseFare?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
  }

  export type FlightMinOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    baseFare?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airlineId?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
  }

  export type FlightSumOrderByAggregateInput = {
    baseFare?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type EnumSeatClassFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatClass | EnumSeatClassFieldRefInput<$PrismaModel>
    in?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    not?: NestedEnumSeatClassFilter<$PrismaModel> | $Enums.SeatClass
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FlightScalarRelationFilter = {
    is?: FlightWhereInput
    isNot?: FlightWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightSeatFlightIdSeatNumberCompoundUniqueInput = {
    flightId: string
    seatNumber: string
  }

  export type FlightSeatCountOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    seatClass?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    flightId?: SortOrder
  }

  export type FlightSeatAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FlightSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    seatClass?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    flightId?: SortOrder
  }

  export type FlightSeatMinOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    seatClass?: SortOrder
    price?: SortOrder
    isAvailable?: SortOrder
    flightId?: SortOrder
  }

  export type FlightSeatSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumSeatClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatClass | EnumSeatClassFieldRefInput<$PrismaModel>
    in?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    not?: NestedEnumSeatClassWithAggregatesFilter<$PrismaModel> | $Enums.SeatClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeatClassFilter<$PrismaModel>
    _max?: NestedEnumSeatClassFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BookingPassengerListRelationFilter = {
    every?: BookingPassengerWhereInput
    some?: BookingPassengerWhereInput
    none?: BookingPassengerWhereInput
  }

  export type BookingPassengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PassengerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PassengerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passportNumber?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type PassengerNullableScalarRelationFilter = {
    is?: PassengerWhereInput | null
    isNot?: PassengerWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: SortOrder
    verificationExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: SortOrder
    verificationExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationToken?: SortOrder
    verificationExpiry?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingReference?: SortOrder
    bookingDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingReference?: SortOrder
    bookingDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingReference?: SortOrder
    bookingDate?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PassengerScalarRelationFilter = {
    is?: PassengerWhereInput
    isNot?: PassengerWhereInput
  }

  export type BookingPassengerBookingIdPassengerIdCompoundUniqueInput = {
    bookingId: string
    passengerId: string
  }

  export type BookingPassengerCountOrderByAggregateInput = {
    id?: SortOrder
    isMainContact?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
  }

  export type BookingPassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    isMainContact?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
  }

  export type BookingPassengerMinOrderByAggregateInput = {
    id?: SortOrder
    isMainContact?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type FlightSeatScalarRelationFilter = {
    is?: FlightSeatWhereInput
    isNot?: FlightSeatWhereInput
  }

  export type RefundNullableScalarRelationFilter = {
    is?: RefundWhereInput | null
    isNot?: RefundWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    issueDate?: SortOrder
    status?: SortOrder
    boardingPass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    flightSeatId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    issueDate?: SortOrder
    status?: SortOrder
    boardingPass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    flightSeatId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNumber?: SortOrder
    issueDate?: SortOrder
    status?: SortOrder
    boardingPass?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookingId?: SortOrder
    passengerId?: SortOrder
    flightSeatId?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paymentDate?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paymentDate?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    paymentDate?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type RefundCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    requestDate?: SortOrder
    processedDate?: SortOrder
    ticketId?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    requestDate?: SortOrder
    processedDate?: SortOrder
    ticketId?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    requestDate?: SortOrder
    processedDate?: SortOrder
    ticketId?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }

  export type FlightCreateNestedManyWithoutAirlineInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlightUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirlineInput | FlightUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirlineInput | FlightUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirlineInput | FlightUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput> | FlightCreateWithoutAirlineInput[] | FlightUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutAirlineInput | FlightCreateOrConnectWithoutAirlineInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutAirlineInput | FlightUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: FlightCreateManyAirlineInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutAirlineInput | FlightUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutAirlineInput | FlightUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightCreateNestedManyWithoutDepartureAirportInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightCreateNestedManyWithoutArrivalAirportInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutDepartureAirportInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutArrivalAirportInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUpdateManyWithoutDepartureAirportNestedInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutDepartureAirportInput | FlightUpsertWithWhereUniqueWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutDepartureAirportInput | FlightUpdateWithWhereUniqueWithoutDepartureAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutDepartureAirportInput | FlightUpdateManyWithWhereWithoutDepartureAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUpdateManyWithoutArrivalAirportNestedInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutArrivalAirportInput | FlightUpsertWithWhereUniqueWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutArrivalAirportInput | FlightUpdateWithWhereUniqueWithoutArrivalAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutArrivalAirportInput | FlightUpdateManyWithWhereWithoutArrivalAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutDepartureAirportInput | FlightUpsertWithWhereUniqueWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutDepartureAirportInput | FlightUpdateWithWhereUniqueWithoutDepartureAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutDepartureAirportInput | FlightUpdateManyWithWhereWithoutDepartureAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutArrivalAirportInput | FlightUpsertWithWhereUniqueWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutArrivalAirportInput | FlightUpdateWithWhereUniqueWithoutArrivalAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutArrivalAirportInput | FlightUpdateManyWithWhereWithoutArrivalAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type AirlineCreateNestedOneWithoutFlightsInput = {
    create?: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutFlightsInput
    connect?: AirlineWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutDepartureFlightsInput = {
    create?: XOR<AirportCreateWithoutDepartureFlightsInput, AirportUncheckedCreateWithoutDepartureFlightsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDepartureFlightsInput
    connect?: AirportWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutArrivalFlightsInput = {
    create?: XOR<AirportCreateWithoutArrivalFlightsInput, AirportUncheckedCreateWithoutArrivalFlightsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalFlightsInput
    connect?: AirportWhereUniqueInput
  }

  export type FlightSeatCreateNestedManyWithoutFlightInput = {
    create?: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput> | FlightSeatCreateWithoutFlightInput[] | FlightSeatUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightSeatCreateOrConnectWithoutFlightInput | FlightSeatCreateOrConnectWithoutFlightInput[]
    createMany?: FlightSeatCreateManyFlightInputEnvelope
    connect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutFlightInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FlightSeatUncheckedCreateNestedManyWithoutFlightInput = {
    create?: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput> | FlightSeatCreateWithoutFlightInput[] | FlightSeatUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightSeatCreateOrConnectWithoutFlightInput | FlightSeatCreateOrConnectWithoutFlightInput[]
    createMany?: FlightSeatCreateManyFlightInputEnvelope
    connect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutFlightInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumFlightStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlightStatus
  }

  export type AirlineUpdateOneRequiredWithoutFlightsNestedInput = {
    create?: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutFlightsInput
    upsert?: AirlineUpsertWithoutFlightsInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutFlightsInput, AirlineUpdateWithoutFlightsInput>, AirlineUncheckedUpdateWithoutFlightsInput>
  }

  export type AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput = {
    create?: XOR<AirportCreateWithoutDepartureFlightsInput, AirportUncheckedCreateWithoutDepartureFlightsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDepartureFlightsInput
    upsert?: AirportUpsertWithoutDepartureFlightsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutDepartureFlightsInput, AirportUpdateWithoutDepartureFlightsInput>, AirportUncheckedUpdateWithoutDepartureFlightsInput>
  }

  export type AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput = {
    create?: XOR<AirportCreateWithoutArrivalFlightsInput, AirportUncheckedCreateWithoutArrivalFlightsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalFlightsInput
    upsert?: AirportUpsertWithoutArrivalFlightsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutArrivalFlightsInput, AirportUpdateWithoutArrivalFlightsInput>, AirportUncheckedUpdateWithoutArrivalFlightsInput>
  }

  export type FlightSeatUpdateManyWithoutFlightNestedInput = {
    create?: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput> | FlightSeatCreateWithoutFlightInput[] | FlightSeatUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightSeatCreateOrConnectWithoutFlightInput | FlightSeatCreateOrConnectWithoutFlightInput[]
    upsert?: FlightSeatUpsertWithWhereUniqueWithoutFlightInput | FlightSeatUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: FlightSeatCreateManyFlightInputEnvelope
    set?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    disconnect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    delete?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    connect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    update?: FlightSeatUpdateWithWhereUniqueWithoutFlightInput | FlightSeatUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: FlightSeatUpdateManyWithWhereWithoutFlightInput | FlightSeatUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: FlightSeatScalarWhereInput | FlightSeatScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutFlightNestedInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlightInput | BookingUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlightInput | BookingUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlightInput | BookingUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type FlightSeatUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput> | FlightSeatCreateWithoutFlightInput[] | FlightSeatUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightSeatCreateOrConnectWithoutFlightInput | FlightSeatCreateOrConnectWithoutFlightInput[]
    upsert?: FlightSeatUpsertWithWhereUniqueWithoutFlightInput | FlightSeatUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: FlightSeatCreateManyFlightInputEnvelope
    set?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    disconnect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    delete?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    connect?: FlightSeatWhereUniqueInput | FlightSeatWhereUniqueInput[]
    update?: FlightSeatUpdateWithWhereUniqueWithoutFlightInput | FlightSeatUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: FlightSeatUpdateManyWithWhereWithoutFlightInput | FlightSeatUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: FlightSeatScalarWhereInput | FlightSeatScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput> | BookingCreateWithoutFlightInput[] | BookingUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutFlightInput | BookingCreateOrConnectWithoutFlightInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutFlightInput | BookingUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: BookingCreateManyFlightInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutFlightInput | BookingUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutFlightInput | BookingUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type FlightCreateNestedOneWithoutFlightSeatsInput = {
    create?: XOR<FlightCreateWithoutFlightSeatsInput, FlightUncheckedCreateWithoutFlightSeatsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutFlightSeatsInput
    connect?: FlightWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutFlightSeatInput = {
    create?: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput> | TicketCreateWithoutFlightSeatInput[] | TicketUncheckedCreateWithoutFlightSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFlightSeatInput | TicketCreateOrConnectWithoutFlightSeatInput[]
    createMany?: TicketCreateManyFlightSeatInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutFlightSeatInput = {
    create?: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput> | TicketCreateWithoutFlightSeatInput[] | TicketUncheckedCreateWithoutFlightSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFlightSeatInput | TicketCreateOrConnectWithoutFlightSeatInput[]
    createMany?: TicketCreateManyFlightSeatInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumSeatClassFieldUpdateOperationsInput = {
    set?: $Enums.SeatClass
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FlightUpdateOneRequiredWithoutFlightSeatsNestedInput = {
    create?: XOR<FlightCreateWithoutFlightSeatsInput, FlightUncheckedCreateWithoutFlightSeatsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutFlightSeatsInput
    upsert?: FlightUpsertWithoutFlightSeatsInput
    connect?: FlightWhereUniqueInput
    update?: XOR<XOR<FlightUpdateToOneWithWhereWithoutFlightSeatsInput, FlightUpdateWithoutFlightSeatsInput>, FlightUncheckedUpdateWithoutFlightSeatsInput>
  }

  export type TicketUpdateManyWithoutFlightSeatNestedInput = {
    create?: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput> | TicketCreateWithoutFlightSeatInput[] | TicketUncheckedCreateWithoutFlightSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFlightSeatInput | TicketCreateOrConnectWithoutFlightSeatInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutFlightSeatInput | TicketUpsertWithWhereUniqueWithoutFlightSeatInput[]
    createMany?: TicketCreateManyFlightSeatInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutFlightSeatInput | TicketUpdateWithWhereUniqueWithoutFlightSeatInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutFlightSeatInput | TicketUpdateManyWithWhereWithoutFlightSeatInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutFlightSeatNestedInput = {
    create?: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput> | TicketCreateWithoutFlightSeatInput[] | TicketUncheckedCreateWithoutFlightSeatInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutFlightSeatInput | TicketCreateOrConnectWithoutFlightSeatInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutFlightSeatInput | TicketUpsertWithWhereUniqueWithoutFlightSeatInput[]
    createMany?: TicketCreateManyFlightSeatInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutFlightSeatInput | TicketUpdateWithWhereUniqueWithoutFlightSeatInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutFlightSeatInput | TicketUpdateManyWithWhereWithoutFlightSeatInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPassengerInput = {
    create?: XOR<UserCreateWithoutPassengerInput, UserUncheckedCreateWithoutPassengerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassengerInput
    connect?: UserWhereUniqueInput
  }

  export type BookingPassengerCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput> | BookingPassengerCreateWithoutPassengerInput[] | BookingPassengerUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutPassengerInput | BookingPassengerCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingPassengerCreateManyPassengerInputEnvelope
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutPassengerInput = {
    create?: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput> | TicketCreateWithoutPassengerInput[] | TicketUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPassengerInput | TicketCreateOrConnectWithoutPassengerInput[]
    createMany?: TicketCreateManyPassengerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BookingPassengerUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput> | BookingPassengerCreateWithoutPassengerInput[] | BookingPassengerUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutPassengerInput | BookingPassengerCreateOrConnectWithoutPassengerInput[]
    createMany?: BookingPassengerCreateManyPassengerInputEnvelope
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput> | TicketCreateWithoutPassengerInput[] | TicketUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPassengerInput | TicketCreateOrConnectWithoutPassengerInput[]
    createMany?: TicketCreateManyPassengerInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutPassengerNestedInput = {
    create?: XOR<UserCreateWithoutPassengerInput, UserUncheckedCreateWithoutPassengerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPassengerInput
    upsert?: UserUpsertWithoutPassengerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPassengerInput, UserUpdateWithoutPassengerInput>, UserUncheckedUpdateWithoutPassengerInput>
  }

  export type BookingPassengerUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput> | BookingPassengerCreateWithoutPassengerInput[] | BookingPassengerUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutPassengerInput | BookingPassengerCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingPassengerUpsertWithWhereUniqueWithoutPassengerInput | BookingPassengerUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingPassengerCreateManyPassengerInputEnvelope
    set?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    disconnect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    delete?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    update?: BookingPassengerUpdateWithWhereUniqueWithoutPassengerInput | BookingPassengerUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingPassengerUpdateManyWithWhereWithoutPassengerInput | BookingPassengerUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput> | TicketCreateWithoutPassengerInput[] | TicketUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPassengerInput | TicketCreateOrConnectWithoutPassengerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPassengerInput | TicketUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: TicketCreateManyPassengerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPassengerInput | TicketUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPassengerInput | TicketUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type BookingPassengerUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput> | BookingPassengerCreateWithoutPassengerInput[] | BookingPassengerUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutPassengerInput | BookingPassengerCreateOrConnectWithoutPassengerInput[]
    upsert?: BookingPassengerUpsertWithWhereUniqueWithoutPassengerInput | BookingPassengerUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BookingPassengerCreateManyPassengerInputEnvelope
    set?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    disconnect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    delete?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    update?: BookingPassengerUpdateWithWhereUniqueWithoutPassengerInput | BookingPassengerUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BookingPassengerUpdateManyWithWhereWithoutPassengerInput | BookingPassengerUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput> | TicketCreateWithoutPassengerInput[] | TicketUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutPassengerInput | TicketCreateOrConnectWithoutPassengerInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutPassengerInput | TicketUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: TicketCreateManyPassengerInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutPassengerInput | TicketUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutPassengerInput | TicketUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PassengerCreateNestedOneWithoutUserInput = {
    create?: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutUserInput
    connect?: PassengerWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type PassengerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutUserInput
    connect?: PassengerWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type PassengerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutUserInput
    upsert?: PassengerUpsertWithoutUserInput
    disconnect?: PassengerWhereInput | boolean
    delete?: PassengerWhereInput | boolean
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutUserInput, PassengerUpdateWithoutUserInput>, PassengerUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type PassengerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutUserInput
    upsert?: PassengerUpsertWithoutUserInput
    disconnect?: PassengerWhereInput | boolean
    delete?: PassengerWhereInput | boolean
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutUserInput, PassengerUpdateWithoutUserInput>, PassengerUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type FlightCreateNestedOneWithoutBookingsInput = {
    create?: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutBookingsInput
    connect?: FlightWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BookingPassengerCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput> | BookingPassengerCreateWithoutBookingInput[] | BookingPassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutBookingInput | BookingPassengerCreateOrConnectWithoutBookingInput[]
    createMany?: BookingPassengerCreateManyBookingInputEnvelope
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutBookingInput = {
    create?: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput> | TicketCreateWithoutBookingInput[] | TicketUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBookingInput | TicketCreateOrConnectWithoutBookingInput[]
    createMany?: TicketCreateManyBookingInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BookingPassengerUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput> | BookingPassengerCreateWithoutBookingInput[] | BookingPassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutBookingInput | BookingPassengerCreateOrConnectWithoutBookingInput[]
    createMany?: BookingPassengerCreateManyBookingInputEnvelope
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput> | TicketCreateWithoutBookingInput[] | TicketUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBookingInput | TicketCreateOrConnectWithoutBookingInput[]
    createMany?: TicketCreateManyBookingInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type FlightUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutBookingsInput
    upsert?: FlightUpsertWithoutBookingsInput
    connect?: FlightWhereUniqueInput
    update?: XOR<XOR<FlightUpdateToOneWithWhereWithoutBookingsInput, FlightUpdateWithoutBookingsInput>, FlightUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingPassengerUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput> | BookingPassengerCreateWithoutBookingInput[] | BookingPassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutBookingInput | BookingPassengerCreateOrConnectWithoutBookingInput[]
    upsert?: BookingPassengerUpsertWithWhereUniqueWithoutBookingInput | BookingPassengerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingPassengerCreateManyBookingInputEnvelope
    set?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    disconnect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    delete?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    update?: BookingPassengerUpdateWithWhereUniqueWithoutBookingInput | BookingPassengerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingPassengerUpdateManyWithWhereWithoutBookingInput | BookingPassengerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutBookingNestedInput = {
    create?: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput> | TicketCreateWithoutBookingInput[] | TicketUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBookingInput | TicketCreateOrConnectWithoutBookingInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBookingInput | TicketUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: TicketCreateManyBookingInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBookingInput | TicketUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBookingInput | TicketUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput> | BookingPassengerCreateWithoutBookingInput[] | BookingPassengerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingPassengerCreateOrConnectWithoutBookingInput | BookingPassengerCreateOrConnectWithoutBookingInput[]
    upsert?: BookingPassengerUpsertWithWhereUniqueWithoutBookingInput | BookingPassengerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingPassengerCreateManyBookingInputEnvelope
    set?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    disconnect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    delete?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    connect?: BookingPassengerWhereUniqueInput | BookingPassengerWhereUniqueInput[]
    update?: BookingPassengerUpdateWithWhereUniqueWithoutBookingInput | BookingPassengerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingPassengerUpdateManyWithWhereWithoutBookingInput | BookingPassengerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput> | TicketCreateWithoutBookingInput[] | TicketUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBookingInput | TicketCreateOrConnectWithoutBookingInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBookingInput | TicketUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: TicketCreateManyBookingInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBookingInput | TicketUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBookingInput | TicketUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPassengersInput = {
    create?: XOR<BookingCreateWithoutPassengersInput, BookingUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPassengersInput
    connect?: BookingWhereUniqueInput
  }

  export type PassengerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPassengersNestedInput = {
    create?: XOR<BookingCreateWithoutPassengersInput, BookingUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPassengersInput
    upsert?: BookingUpsertWithoutPassengersInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPassengersInput, BookingUpdateWithoutPassengersInput>, BookingUncheckedUpdateWithoutPassengersInput>
  }

  export type PassengerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutBookingsInput
    upsert?: PassengerUpsertWithoutBookingsInput
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutBookingsInput, PassengerUpdateWithoutBookingsInput>, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BookingCreateWithoutTicketsInput, BookingUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutTicketsInput
    connect?: BookingWhereUniqueInput
  }

  export type PassengerCreateNestedOneWithoutTicketsInput = {
    create?: XOR<PassengerCreateWithoutTicketsInput, PassengerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutTicketsInput
    connect?: PassengerWhereUniqueInput
  }

  export type FlightSeatCreateNestedOneWithoutTicketsInput = {
    create?: XOR<FlightSeatCreateWithoutTicketsInput, FlightSeatUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FlightSeatCreateOrConnectWithoutTicketsInput
    connect?: FlightSeatWhereUniqueInput
  }

  export type RefundCreateNestedOneWithoutTicketInput = {
    create?: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
    connectOrCreate?: RefundCreateOrConnectWithoutTicketInput
    connect?: RefundWhereUniqueInput
  }

  export type RefundUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
    connectOrCreate?: RefundCreateOrConnectWithoutTicketInput
    connect?: RefundWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type BookingUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BookingCreateWithoutTicketsInput, BookingUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutTicketsInput
    upsert?: BookingUpsertWithoutTicketsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutTicketsInput, BookingUpdateWithoutTicketsInput>, BookingUncheckedUpdateWithoutTicketsInput>
  }

  export type PassengerUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<PassengerCreateWithoutTicketsInput, PassengerUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: PassengerCreateOrConnectWithoutTicketsInput
    upsert?: PassengerUpsertWithoutTicketsInput
    connect?: PassengerWhereUniqueInput
    update?: XOR<XOR<PassengerUpdateToOneWithWhereWithoutTicketsInput, PassengerUpdateWithoutTicketsInput>, PassengerUncheckedUpdateWithoutTicketsInput>
  }

  export type FlightSeatUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<FlightSeatCreateWithoutTicketsInput, FlightSeatUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: FlightSeatCreateOrConnectWithoutTicketsInput
    upsert?: FlightSeatUpsertWithoutTicketsInput
    connect?: FlightSeatWhereUniqueInput
    update?: XOR<XOR<FlightSeatUpdateToOneWithWhereWithoutTicketsInput, FlightSeatUpdateWithoutTicketsInput>, FlightSeatUncheckedUpdateWithoutTicketsInput>
  }

  export type RefundUpdateOneWithoutTicketNestedInput = {
    create?: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
    connectOrCreate?: RefundCreateOrConnectWithoutTicketInput
    upsert?: RefundUpsertWithoutTicketInput
    disconnect?: RefundWhereInput | boolean
    delete?: RefundWhereInput | boolean
    connect?: RefundWhereUniqueInput
    update?: XOR<XOR<RefundUpdateToOneWithWhereWithoutTicketInput, RefundUpdateWithoutTicketInput>, RefundUncheckedUpdateWithoutTicketInput>
  }

  export type RefundUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
    connectOrCreate?: RefundCreateOrConnectWithoutTicketInput
    upsert?: RefundUpsertWithoutTicketInput
    disconnect?: RefundWhereInput | boolean
    delete?: RefundWhereInput | boolean
    connect?: RefundWhereUniqueInput
    update?: XOR<XOR<RefundUpdateToOneWithWhereWithoutTicketInput, RefundUpdateWithoutTicketInput>, RefundUncheckedUpdateWithoutTicketInput>
  }

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    upsert?: BookingUpsertWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentsInput, BookingUpdateWithoutPaymentsInput>, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type TicketCreateNestedOneWithoutRefundInput = {
    create?: XOR<TicketCreateWithoutRefundInput, TicketUncheckedCreateWithoutRefundInput>
    connectOrCreate?: TicketCreateOrConnectWithoutRefundInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumRefundStatusFieldUpdateOperationsInput = {
    set?: $Enums.RefundStatus
  }

  export type TicketUpdateOneRequiredWithoutRefundNestedInput = {
    create?: XOR<TicketCreateWithoutRefundInput, TicketUncheckedCreateWithoutRefundInput>
    connectOrCreate?: TicketCreateOrConnectWithoutRefundInput
    upsert?: TicketUpsertWithoutRefundInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutRefundInput, TicketUpdateWithoutRefundInput>, TicketUncheckedUpdateWithoutRefundInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeatClassFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatClass | EnumSeatClassFieldRefInput<$PrismaModel>
    in?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    not?: NestedEnumSeatClassFilter<$PrismaModel> | $Enums.SeatClass
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSeatClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeatClass | EnumSeatClassFieldRefInput<$PrismaModel>
    in?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeatClass[] | ListEnumSeatClassFieldRefInput<$PrismaModel>
    not?: NestedEnumSeatClassWithAggregatesFilter<$PrismaModel> | $Enums.SeatClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeatClassFilter<$PrismaModel>
    _max?: NestedEnumSeatClassFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumRefundStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusFilter<$PrismaModel> | $Enums.RefundStatus
  }

  export type NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RefundStatus | EnumRefundStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RefundStatus[] | ListEnumRefundStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRefundStatusWithAggregatesFilter<$PrismaModel> | $Enums.RefundStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRefundStatusFilter<$PrismaModel>
    _max?: NestedEnumRefundStatusFilter<$PrismaModel>
  }

  export type FlightCreateWithoutAirlineInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirport: AirportCreateNestedOneWithoutDepartureFlightsInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalFlightsInput
    flightSeats?: FlightSeatCreateNestedManyWithoutFlightInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutAirlineInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirportId: string
    arrivalAirportId: string
    flightSeats?: FlightSeatUncheckedCreateNestedManyWithoutFlightInput
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput>
  }

  export type FlightCreateManyAirlineInputEnvelope = {
    data: FlightCreateManyAirlineInput | FlightCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type FlightUpsertWithWhereUniqueWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutAirlineInput, FlightUncheckedUpdateWithoutAirlineInput>
    create: XOR<FlightCreateWithoutAirlineInput, FlightUncheckedCreateWithoutAirlineInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutAirlineInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutAirlineInput, FlightUncheckedUpdateWithoutAirlineInput>
  }

  export type FlightUpdateManyWithWhereWithoutAirlineInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutAirlineInput>
  }

  export type FlightScalarWhereInput = {
    AND?: FlightScalarWhereInput | FlightScalarWhereInput[]
    OR?: FlightScalarWhereInput[]
    NOT?: FlightScalarWhereInput | FlightScalarWhereInput[]
    id?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    baseFare?: DecimalFilter<"Flight"> | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    airlineId?: StringFilter<"Flight"> | string
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
  }

  export type FlightCreateWithoutDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutFlightsInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalFlightsInput
    flightSeats?: FlightSeatCreateNestedManyWithoutFlightInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    arrivalAirportId: string
    flightSeats?: FlightSeatUncheckedCreateNestedManyWithoutFlightInput
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput>
  }

  export type FlightCreateManyDepartureAirportInputEnvelope = {
    data: FlightCreateManyDepartureAirportInput | FlightCreateManyDepartureAirportInput[]
    skipDuplicates?: boolean
  }

  export type FlightCreateWithoutArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutFlightsInput
    departureAirport: AirportCreateNestedOneWithoutDepartureFlightsInput
    flightSeats?: FlightSeatCreateNestedManyWithoutFlightInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
    flightSeats?: FlightSeatUncheckedCreateNestedManyWithoutFlightInput
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput>
  }

  export type FlightCreateManyArrivalAirportInputEnvelope = {
    data: FlightCreateManyArrivalAirportInput | FlightCreateManyArrivalAirportInput[]
    skipDuplicates?: boolean
  }

  export type FlightUpsertWithWhereUniqueWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutDepartureAirportInput, FlightUncheckedUpdateWithoutDepartureAirportInput>
    create: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutDepartureAirportInput, FlightUncheckedUpdateWithoutDepartureAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutDepartureAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutDepartureAirportInput>
  }

  export type FlightUpsertWithWhereUniqueWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutArrivalAirportInput, FlightUncheckedUpdateWithoutArrivalAirportInput>
    create: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutArrivalAirportInput, FlightUncheckedUpdateWithoutArrivalAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutArrivalAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutArrivalAirportInput>
  }

  export type AirlineCreateWithoutFlightsInput = {
    id?: string
    name: string
    code: string
    country: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirlineUncheckedCreateWithoutFlightsInput = {
    id?: string
    name: string
    code: string
    country: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirlineCreateOrConnectWithoutFlightsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
  }

  export type AirportCreateWithoutDepartureFlightsInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    arrivalFlights?: FlightCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUncheckedCreateWithoutDepartureFlightsInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    arrivalFlights?: FlightUncheckedCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportCreateOrConnectWithoutDepartureFlightsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutDepartureFlightsInput, AirportUncheckedCreateWithoutDepartureFlightsInput>
  }

  export type AirportCreateWithoutArrivalFlightsInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departureFlights?: FlightCreateNestedManyWithoutDepartureAirportInput
  }

  export type AirportUncheckedCreateWithoutArrivalFlightsInput = {
    id?: string
    name: string
    code: string
    city: string
    country: string
    timezone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departureFlights?: FlightUncheckedCreateNestedManyWithoutDepartureAirportInput
  }

  export type AirportCreateOrConnectWithoutArrivalFlightsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutArrivalFlightsInput, AirportUncheckedCreateWithoutArrivalFlightsInput>
  }

  export type FlightSeatCreateWithoutFlightInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    tickets?: TicketCreateNestedManyWithoutFlightSeatInput
  }

  export type FlightSeatUncheckedCreateWithoutFlightInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    tickets?: TicketUncheckedCreateNestedManyWithoutFlightSeatInput
  }

  export type FlightSeatCreateOrConnectWithoutFlightInput = {
    where: FlightSeatWhereUniqueInput
    create: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput>
  }

  export type FlightSeatCreateManyFlightInputEnvelope = {
    data: FlightSeatCreateManyFlightInput | FlightSeatCreateManyFlightInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutFlightInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerCreateNestedManyWithoutBookingInput
    tickets?: TicketCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutFlightInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerUncheckedCreateNestedManyWithoutBookingInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutFlightInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput>
  }

  export type BookingCreateManyFlightInputEnvelope = {
    data: BookingCreateManyFlightInput | BookingCreateManyFlightInput[]
    skipDuplicates?: boolean
  }

  export type AirlineUpsertWithoutFlightsInput = {
    update: XOR<AirlineUpdateWithoutFlightsInput, AirlineUncheckedUpdateWithoutFlightsInput>
    create: XOR<AirlineCreateWithoutFlightsInput, AirlineUncheckedCreateWithoutFlightsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutFlightsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutFlightsInput, AirlineUncheckedUpdateWithoutFlightsInput>
  }

  export type AirlineUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirlineUncheckedUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportUpsertWithoutDepartureFlightsInput = {
    update: XOR<AirportUpdateWithoutDepartureFlightsInput, AirportUncheckedUpdateWithoutDepartureFlightsInput>
    create: XOR<AirportCreateWithoutDepartureFlightsInput, AirportUncheckedCreateWithoutDepartureFlightsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutDepartureFlightsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutDepartureFlightsInput, AirportUncheckedUpdateWithoutDepartureFlightsInput>
  }

  export type AirportUpdateWithoutDepartureFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlights?: FlightUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutDepartureFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalFlights?: FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUpsertWithoutArrivalFlightsInput = {
    update: XOR<AirportUpdateWithoutArrivalFlightsInput, AirportUncheckedUpdateWithoutArrivalFlightsInput>
    create: XOR<AirportCreateWithoutArrivalFlightsInput, AirportUncheckedCreateWithoutArrivalFlightsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutArrivalFlightsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutArrivalFlightsInput, AirportUncheckedUpdateWithoutArrivalFlightsInput>
  }

  export type AirportUpdateWithoutArrivalFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlights?: FlightUpdateManyWithoutDepartureAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutArrivalFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureFlights?: FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput
  }

  export type FlightSeatUpsertWithWhereUniqueWithoutFlightInput = {
    where: FlightSeatWhereUniqueInput
    update: XOR<FlightSeatUpdateWithoutFlightInput, FlightSeatUncheckedUpdateWithoutFlightInput>
    create: XOR<FlightSeatCreateWithoutFlightInput, FlightSeatUncheckedCreateWithoutFlightInput>
  }

  export type FlightSeatUpdateWithWhereUniqueWithoutFlightInput = {
    where: FlightSeatWhereUniqueInput
    data: XOR<FlightSeatUpdateWithoutFlightInput, FlightSeatUncheckedUpdateWithoutFlightInput>
  }

  export type FlightSeatUpdateManyWithWhereWithoutFlightInput = {
    where: FlightSeatScalarWhereInput
    data: XOR<FlightSeatUpdateManyMutationInput, FlightSeatUncheckedUpdateManyWithoutFlightInput>
  }

  export type FlightSeatScalarWhereInput = {
    AND?: FlightSeatScalarWhereInput | FlightSeatScalarWhereInput[]
    OR?: FlightSeatScalarWhereInput[]
    NOT?: FlightSeatScalarWhereInput | FlightSeatScalarWhereInput[]
    id?: StringFilter<"FlightSeat"> | string
    seatNumber?: StringFilter<"FlightSeat"> | string
    seatClass?: EnumSeatClassFilter<"FlightSeat"> | $Enums.SeatClass
    price?: DecimalFilter<"FlightSeat"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"FlightSeat"> | boolean
    flightId?: StringFilter<"FlightSeat"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutFlightInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutFlightInput, BookingUncheckedUpdateWithoutFlightInput>
    create: XOR<BookingCreateWithoutFlightInput, BookingUncheckedCreateWithoutFlightInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutFlightInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutFlightInput, BookingUncheckedUpdateWithoutFlightInput>
  }

  export type BookingUpdateManyWithWhereWithoutFlightInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutFlightInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    userId?: StringFilter<"Booking"> | string
    flightId?: StringFilter<"Booking"> | string
  }

  export type FlightCreateWithoutFlightSeatsInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutFlightsInput
    departureAirport: AirportCreateNestedOneWithoutDepartureFlightsInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalFlightsInput
    bookings?: BookingCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutFlightSeatsInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
    arrivalAirportId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutFlightSeatsInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutFlightSeatsInput, FlightUncheckedCreateWithoutFlightSeatsInput>
  }

  export type TicketCreateWithoutFlightSeatInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutTicketsInput
    passenger: PassengerCreateNestedOneWithoutTicketsInput
    refund?: RefundCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutFlightSeatInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    passengerId: string
    refund?: RefundUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutFlightSeatInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput>
  }

  export type TicketCreateManyFlightSeatInputEnvelope = {
    data: TicketCreateManyFlightSeatInput | TicketCreateManyFlightSeatInput[]
    skipDuplicates?: boolean
  }

  export type FlightUpsertWithoutFlightSeatsInput = {
    update: XOR<FlightUpdateWithoutFlightSeatsInput, FlightUncheckedUpdateWithoutFlightSeatsInput>
    create: XOR<FlightCreateWithoutFlightSeatsInput, FlightUncheckedCreateWithoutFlightSeatsInput>
    where?: FlightWhereInput
  }

  export type FlightUpdateToOneWithWhereWithoutFlightSeatsInput = {
    where?: FlightWhereInput
    data: XOR<FlightUpdateWithoutFlightSeatsInput, FlightUncheckedUpdateWithoutFlightSeatsInput>
  }

  export type FlightUpdateWithoutFlightSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutFlightsNestedInput
    departureAirport?: AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutFlightSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutFlightSeatInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutFlightSeatInput, TicketUncheckedUpdateWithoutFlightSeatInput>
    create: XOR<TicketCreateWithoutFlightSeatInput, TicketUncheckedCreateWithoutFlightSeatInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutFlightSeatInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutFlightSeatInput, TicketUncheckedUpdateWithoutFlightSeatInput>
  }

  export type TicketUpdateManyWithWhereWithoutFlightSeatInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutFlightSeatInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketNumber?: StringFilter<"Ticket"> | string
    issueDate?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    boardingPass?: StringNullableFilter<"Ticket"> | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    bookingId?: StringFilter<"Ticket"> | string
    passengerId?: StringFilter<"Ticket"> | string
    flightSeatId?: StringFilter<"Ticket"> | string
  }

  export type UserCreateWithoutPassengerInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPassengerInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPassengerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPassengerInput, UserUncheckedCreateWithoutPassengerInput>
  }

  export type BookingPassengerCreateWithoutPassengerInput = {
    id?: string
    isMainContact?: boolean
    booking: BookingCreateNestedOneWithoutPassengersInput
  }

  export type BookingPassengerUncheckedCreateWithoutPassengerInput = {
    id?: string
    isMainContact?: boolean
    bookingId: string
  }

  export type BookingPassengerCreateOrConnectWithoutPassengerInput = {
    where: BookingPassengerWhereUniqueInput
    create: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput>
  }

  export type BookingPassengerCreateManyPassengerInputEnvelope = {
    data: BookingPassengerCreateManyPassengerInput | BookingPassengerCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutPassengerInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutTicketsInput
    flightSeat: FlightSeatCreateNestedOneWithoutTicketsInput
    refund?: RefundCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPassengerInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    flightSeatId: string
    refund?: RefundUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPassengerInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput>
  }

  export type TicketCreateManyPassengerInputEnvelope = {
    data: TicketCreateManyPassengerInput | TicketCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPassengerInput = {
    update: XOR<UserUpdateWithoutPassengerInput, UserUncheckedUpdateWithoutPassengerInput>
    create: XOR<UserCreateWithoutPassengerInput, UserUncheckedCreateWithoutPassengerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPassengerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPassengerInput, UserUncheckedUpdateWithoutPassengerInput>
  }

  export type UserUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingPassengerUpsertWithWhereUniqueWithoutPassengerInput = {
    where: BookingPassengerWhereUniqueInput
    update: XOR<BookingPassengerUpdateWithoutPassengerInput, BookingPassengerUncheckedUpdateWithoutPassengerInput>
    create: XOR<BookingPassengerCreateWithoutPassengerInput, BookingPassengerUncheckedCreateWithoutPassengerInput>
  }

  export type BookingPassengerUpdateWithWhereUniqueWithoutPassengerInput = {
    where: BookingPassengerWhereUniqueInput
    data: XOR<BookingPassengerUpdateWithoutPassengerInput, BookingPassengerUncheckedUpdateWithoutPassengerInput>
  }

  export type BookingPassengerUpdateManyWithWhereWithoutPassengerInput = {
    where: BookingPassengerScalarWhereInput
    data: XOR<BookingPassengerUpdateManyMutationInput, BookingPassengerUncheckedUpdateManyWithoutPassengerInput>
  }

  export type BookingPassengerScalarWhereInput = {
    AND?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
    OR?: BookingPassengerScalarWhereInput[]
    NOT?: BookingPassengerScalarWhereInput | BookingPassengerScalarWhereInput[]
    id?: StringFilter<"BookingPassenger"> | string
    isMainContact?: BoolFilter<"BookingPassenger"> | boolean
    bookingId?: StringFilter<"BookingPassenger"> | string
    passengerId?: StringFilter<"BookingPassenger"> | string
  }

  export type TicketUpsertWithWhereUniqueWithoutPassengerInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutPassengerInput, TicketUncheckedUpdateWithoutPassengerInput>
    create: XOR<TicketCreateWithoutPassengerInput, TicketUncheckedCreateWithoutPassengerInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutPassengerInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutPassengerInput, TicketUncheckedUpdateWithoutPassengerInput>
  }

  export type TicketUpdateManyWithWhereWithoutPassengerInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutPassengerInput>
  }

  export type PassengerCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingPassengerCreateNestedManyWithoutPassengerInput
    tickets?: TicketCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingPassengerUncheckedCreateNestedManyWithoutPassengerInput
    tickets?: TicketUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerCreateOrConnectWithoutUserInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flight: FlightCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerCreateNestedManyWithoutBookingInput
    tickets?: TicketCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerUncheckedCreateNestedManyWithoutBookingInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PassengerUpsertWithoutUserInput = {
    update: XOR<PassengerUpdateWithoutUserInput, PassengerUncheckedUpdateWithoutUserInput>
    create: XOR<PassengerCreateWithoutUserInput, PassengerUncheckedCreateWithoutUserInput>
    where?: PassengerWhereInput
  }

  export type PassengerUpdateToOneWithWhereWithoutUserInput = {
    where?: PassengerWhereInput
    data: XOR<PassengerUpdateWithoutUserInput, PassengerUncheckedUpdateWithoutUserInput>
  }

  export type PassengerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingPassengerUpdateManyWithoutPassengerNestedInput
    tickets?: TicketUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingPassengerUncheckedUpdateManyWithoutPassengerNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    passenger?: PassengerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationToken?: string | null
    verificationExpiry?: Date | string | null
    passenger?: PassengerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type FlightCreateWithoutBookingsInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airline: AirlineCreateNestedOneWithoutFlightsInput
    departureAirport: AirportCreateNestedOneWithoutDepartureFlightsInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalFlightsInput
    flightSeats?: FlightSeatCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutBookingsInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
    arrivalAirportId: string
    flightSeats?: FlightSeatUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutBookingsInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type BookingPassengerCreateWithoutBookingInput = {
    id?: string
    isMainContact?: boolean
    passenger: PassengerCreateNestedOneWithoutBookingsInput
  }

  export type BookingPassengerUncheckedCreateWithoutBookingInput = {
    id?: string
    isMainContact?: boolean
    passengerId: string
  }

  export type BookingPassengerCreateOrConnectWithoutBookingInput = {
    where: BookingPassengerWhereUniqueInput
    create: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput>
  }

  export type BookingPassengerCreateManyBookingInputEnvelope = {
    data: BookingPassengerCreateManyBookingInput | BookingPassengerCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutBookingInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passenger: PassengerCreateNestedOneWithoutTicketsInput
    flightSeat: FlightSeatCreateNestedOneWithoutTicketsInput
    refund?: RefundCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutBookingInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passengerId: string
    flightSeatId: string
    refund?: RefundUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutBookingInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput>
  }

  export type TicketCreateManyBookingInputEnvelope = {
    data: TicketCreateManyBookingInput | TicketCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger?: PassengerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger?: PassengerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FlightUpsertWithoutBookingsInput = {
    update: XOR<FlightUpdateWithoutBookingsInput, FlightUncheckedUpdateWithoutBookingsInput>
    create: XOR<FlightCreateWithoutBookingsInput, FlightUncheckedCreateWithoutBookingsInput>
    where?: FlightWhereInput
  }

  export type FlightUpdateToOneWithWhereWithoutBookingsInput = {
    where?: FlightWhereInput
    data: XOR<FlightUpdateWithoutBookingsInput, FlightUncheckedUpdateWithoutBookingsInput>
  }

  export type FlightUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutFlightsNestedInput
    departureAirport?: AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput
    flightSeats?: FlightSeatUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    flightSeats?: FlightSeatUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    bookingId?: StringFilter<"Payment"> | string
  }

  export type BookingPassengerUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingPassengerWhereUniqueInput
    update: XOR<BookingPassengerUpdateWithoutBookingInput, BookingPassengerUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingPassengerCreateWithoutBookingInput, BookingPassengerUncheckedCreateWithoutBookingInput>
  }

  export type BookingPassengerUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingPassengerWhereUniqueInput
    data: XOR<BookingPassengerUpdateWithoutBookingInput, BookingPassengerUncheckedUpdateWithoutBookingInput>
  }

  export type BookingPassengerUpdateManyWithWhereWithoutBookingInput = {
    where: BookingPassengerScalarWhereInput
    data: XOR<BookingPassengerUpdateManyMutationInput, BookingPassengerUncheckedUpdateManyWithoutBookingInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutBookingInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBookingInput, TicketUncheckedUpdateWithoutBookingInput>
    create: XOR<TicketCreateWithoutBookingInput, TicketUncheckedCreateWithoutBookingInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBookingInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBookingInput, TicketUncheckedUpdateWithoutBookingInput>
  }

  export type TicketUpdateManyWithWhereWithoutBookingInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingCreateWithoutPassengersInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    flight: FlightCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    tickets?: TicketCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPassengersInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flightId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPassengersInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPassengersInput, BookingUncheckedCreateWithoutPassengersInput>
  }

  export type PassengerCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPassengerInput
    tickets?: TicketCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerCreateOrConnectWithoutBookingsInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
  }

  export type BookingUpsertWithoutPassengersInput = {
    update: XOR<BookingUpdateWithoutPassengersInput, BookingUncheckedUpdateWithoutPassengersInput>
    create: XOR<BookingCreateWithoutPassengersInput, BookingUncheckedCreateWithoutPassengersInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPassengersInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPassengersInput, BookingUncheckedUpdateWithoutPassengersInput>
  }

  export type BookingUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    tickets?: TicketUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type PassengerUpsertWithoutBookingsInput = {
    update: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
    create: XOR<PassengerCreateWithoutBookingsInput, PassengerUncheckedCreateWithoutBookingsInput>
    where?: PassengerWhereInput
  }

  export type PassengerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PassengerWhereInput
    data: XOR<PassengerUpdateWithoutBookingsInput, PassengerUncheckedUpdateWithoutBookingsInput>
  }

  export type PassengerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPassengerNestedInput
    tickets?: TicketUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type BookingCreateWithoutTicketsInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    flight: FlightCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTicketsInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flightId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
    passengers?: BookingPassengerUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTicketsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTicketsInput, BookingUncheckedCreateWithoutTicketsInput>
  }

  export type PassengerCreateWithoutTicketsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPassengerInput
    bookings?: BookingPassengerCreateNestedManyWithoutPassengerInput
  }

  export type PassengerUncheckedCreateWithoutTicketsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    passportNumber?: string | null
    dateOfBirth?: Date | string | null
    nationality?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    bookings?: BookingPassengerUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type PassengerCreateOrConnectWithoutTicketsInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutTicketsInput, PassengerUncheckedCreateWithoutTicketsInput>
  }

  export type FlightSeatCreateWithoutTicketsInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    flight: FlightCreateNestedOneWithoutFlightSeatsInput
  }

  export type FlightSeatUncheckedCreateWithoutTicketsInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    flightId: string
  }

  export type FlightSeatCreateOrConnectWithoutTicketsInput = {
    where: FlightSeatWhereUniqueInput
    create: XOR<FlightSeatCreateWithoutTicketsInput, FlightSeatUncheckedCreateWithoutTicketsInput>
  }

  export type RefundCreateWithoutTicketInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    status?: $Enums.RefundStatus
    requestDate?: Date | string
    processedDate?: Date | string | null
  }

  export type RefundUncheckedCreateWithoutTicketInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    reason?: string | null
    status?: $Enums.RefundStatus
    requestDate?: Date | string
    processedDate?: Date | string | null
  }

  export type RefundCreateOrConnectWithoutTicketInput = {
    where: RefundWhereUniqueInput
    create: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
  }

  export type BookingUpsertWithoutTicketsInput = {
    update: XOR<BookingUpdateWithoutTicketsInput, BookingUncheckedUpdateWithoutTicketsInput>
    create: XOR<BookingCreateWithoutTicketsInput, BookingUncheckedCreateWithoutTicketsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutTicketsInput, BookingUncheckedUpdateWithoutTicketsInput>
  }

  export type BookingUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type PassengerUpsertWithoutTicketsInput = {
    update: XOR<PassengerUpdateWithoutTicketsInput, PassengerUncheckedUpdateWithoutTicketsInput>
    create: XOR<PassengerCreateWithoutTicketsInput, PassengerUncheckedCreateWithoutTicketsInput>
    where?: PassengerWhereInput
  }

  export type PassengerUpdateToOneWithWhereWithoutTicketsInput = {
    where?: PassengerWhereInput
    data: XOR<PassengerUpdateWithoutTicketsInput, PassengerUncheckedUpdateWithoutTicketsInput>
  }

  export type PassengerUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPassengerNestedInput
    bookings?: BookingPassengerUpdateManyWithoutPassengerNestedInput
  }

  export type PassengerUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: BookingPassengerUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type FlightSeatUpsertWithoutTicketsInput = {
    update: XOR<FlightSeatUpdateWithoutTicketsInput, FlightSeatUncheckedUpdateWithoutTicketsInput>
    create: XOR<FlightSeatCreateWithoutTicketsInput, FlightSeatUncheckedCreateWithoutTicketsInput>
    where?: FlightSeatWhereInput
  }

  export type FlightSeatUpdateToOneWithWhereWithoutTicketsInput = {
    where?: FlightSeatWhereInput
    data: XOR<FlightSeatUpdateWithoutTicketsInput, FlightSeatUncheckedUpdateWithoutTicketsInput>
  }

  export type FlightSeatUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    flight?: FlightUpdateOneRequiredWithoutFlightSeatsNestedInput
  }

  export type FlightSeatUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    flightId?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUpsertWithoutTicketInput = {
    update: XOR<RefundUpdateWithoutTicketInput, RefundUncheckedUpdateWithoutTicketInput>
    create: XOR<RefundCreateWithoutTicketInput, RefundUncheckedCreateWithoutTicketInput>
    where?: RefundWhereInput
  }

  export type RefundUpdateToOneWithWhereWithoutTicketInput = {
    where?: RefundWhereInput
    data: XOR<RefundUpdateWithoutTicketInput, RefundUncheckedUpdateWithoutTicketInput>
  }

  export type RefundUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRefundStatusFieldUpdateOperationsInput | $Enums.RefundStatus
    requestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateWithoutPaymentsInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    flight: FlightCreateNestedOneWithoutBookingsInput
    passengers?: BookingPassengerCreateNestedManyWithoutBookingInput
    tickets?: TicketCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flightId: string
    passengers?: BookingPassengerUncheckedCreateNestedManyWithoutBookingInput
    tickets?: TicketUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
    passengers?: BookingPassengerUpdateManyWithoutBookingNestedInput
    tickets?: TicketUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    passengers?: BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type TicketCreateWithoutRefundInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutTicketsInput
    passenger: PassengerCreateNestedOneWithoutTicketsInput
    flightSeat: FlightSeatCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutRefundInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    passengerId: string
    flightSeatId: string
  }

  export type TicketCreateOrConnectWithoutRefundInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutRefundInput, TicketUncheckedCreateWithoutRefundInput>
  }

  export type TicketUpsertWithoutRefundInput = {
    update: XOR<TicketUpdateWithoutRefundInput, TicketUncheckedUpdateWithoutRefundInput>
    create: XOR<TicketCreateWithoutRefundInput, TicketUncheckedCreateWithoutRefundInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutRefundInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutRefundInput, TicketUncheckedUpdateWithoutRefundInput>
  }

  export type TicketUpdateWithoutRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutTicketsNestedInput
    passenger?: PassengerUpdateOneRequiredWithoutTicketsNestedInput
    flightSeat?: FlightSeatUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutRefundInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightCreateManyAirlineInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirportId: string
    arrivalAirportId: string
  }

  export type FlightUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirport?: AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput
    flightSeats?: FlightSeatUpdateManyWithoutFlightNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    flightSeats?: FlightSeatUncheckedUpdateManyWithoutFlightNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightCreateManyDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    arrivalAirportId: string
  }

  export type FlightCreateManyArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    baseFare: Decimal | DecimalJsLike | number | string
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    airlineId: string
    departureAirportId: string
  }

  export type FlightUpdateWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutFlightsNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalFlightsNestedInput
    flightSeats?: FlightSeatUpdateManyWithoutFlightNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    flightSeats?: FlightSeatUncheckedUpdateManyWithoutFlightNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightUpdateWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airline?: AirlineUpdateOneRequiredWithoutFlightsNestedInput
    departureAirport?: AirportUpdateOneRequiredWithoutDepartureFlightsNestedInput
    flightSeats?: FlightSeatUpdateManyWithoutFlightNestedInput
    bookings?: BookingUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
    flightSeats?: FlightSeatUncheckedUpdateManyWithoutFlightNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    baseFare?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    departureAirportId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightSeatCreateManyFlightInput = {
    id?: string
    seatNumber: string
    seatClass: $Enums.SeatClass
    price: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
  }

  export type BookingCreateManyFlightInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type FlightSeatUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUpdateManyWithoutFlightSeatNestedInput
  }

  export type FlightSeatUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUncheckedUpdateManyWithoutFlightSeatNestedInput
  }

  export type FlightSeatUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    seatClass?: EnumSeatClassFieldUpdateOperationsInput | $Enums.SeatClass
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUpdateManyWithoutBookingNestedInput
    tickets?: TicketUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateManyFlightSeatInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    passengerId: string
  }

  export type TicketUpdateWithoutFlightSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutTicketsNestedInput
    passenger?: PassengerUpdateOneRequiredWithoutTicketsNestedInput
    refund?: RefundUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutFlightSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    refund?: RefundUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutFlightSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPassengerCreateManyPassengerInput = {
    id?: string
    isMainContact?: boolean
    bookingId: string
  }

  export type TicketCreateManyPassengerInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingId: string
    flightSeatId: string
  }

  export type BookingPassengerUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    booking?: BookingUpdateOneRequiredWithoutPassengersNestedInput
  }

  export type BookingPassengerUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    bookingId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPassengerUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    bookingId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutTicketsNestedInput
    flightSeat?: FlightSeatUpdateOneRequiredWithoutTicketsNestedInput
    refund?: RefundUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
    refund?: RefundUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    bookingReference: string
    bookingDate?: Date | string
    status?: $Enums.BookingStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    flightId: string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flight?: FlightUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUpdateManyWithoutBookingNestedInput
    tickets?: TicketUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
    passengers?: BookingPassengerUncheckedUpdateManyWithoutBookingNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    paymentDate?: Date | string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
  }

  export type BookingPassengerCreateManyBookingInput = {
    id?: string
    isMainContact?: boolean
    passengerId: string
  }

  export type TicketCreateManyBookingInput = {
    id?: string
    ticketNumber: string
    issueDate?: Date | string
    status?: $Enums.TicketStatus
    boardingPass?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    passengerId: string
    flightSeatId: string
  }

  export type PaymentUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type BookingPassengerUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    passenger?: PassengerUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingPassengerUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    passengerId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingPassengerUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMainContact?: BoolFieldUpdateOperationsInput | boolean
    passengerId?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passenger?: PassengerUpdateOneRequiredWithoutTicketsNestedInput
    flightSeat?: FlightSeatUpdateOneRequiredWithoutTicketsNestedInput
    refund?: RefundUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
    refund?: RefundUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    boardingPass?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerId?: StringFieldUpdateOperationsInput | string
    flightSeatId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}