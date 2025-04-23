import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware } from './middleware/auth.middleware';
import { CorsMiddleware } from './middleware/cors.middleware';
import { ErrorMiddleware } from './middleware/error.middleware';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware';
import { ApiKeyMiddleware } from './middleware/api-key.middleware';
import { BookingModule } from './booking/booking.module';
import { FlightModule } from './flight/flight.module';
import { PaymentModule } from './payment/payment.module';
import { RefundModule } from './refund/refund.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';
import { JwtModule } from './jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available throughout the app
    }),
    BookingModule,
    FlightModule,
    PaymentModule,
    RefundModule,
    TicketModule,
    UserModule,
    JwtModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Apply CORS to all routes
    consumer
      .apply(CorsMiddleware, LoggerMiddleware, ErrorMiddleware)
      .forRoutes('*');
    
    // Apply API key middleware for public endpoints
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes(
        { path: 'flights', method: RequestMethod.GET },
        { path: 'flights/:id', method: RequestMethod.GET },
        { path: 'flights/:id/seats', method: RequestMethod.GET },
        { path: 'users/login', method: RequestMethod.POST },
        { path: 'users/register', method: RequestMethod.POST }
      );
    
    // Apply rate limiting to all routes
    consumer
      .apply(RateLimitMiddleware)
      .forRoutes('*');
    
    // Apply authentication middleware to protected routes
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'flights', method: RequestMethod.GET },
        { path: 'flights/:id', method: RequestMethod.GET },
        { path: 'flights/:id/seats', method: RequestMethod.GET },
        { path: 'users/login', method: RequestMethod.POST },
        { path: 'users/register', method: RequestMethod.POST }
      )
      .forRoutes(
        { path: 'bookings/*path', method: RequestMethod.ALL },
        { path: 'flights', method: RequestMethod.POST },
        { path: 'flights/:id', method: RequestMethod.PUT },
        { path: 'flights/:id', method: RequestMethod.DELETE },
        { path: 'payments/*path', method: RequestMethod.ALL },
        { path: 'refunds/*path', method: RequestMethod.ALL },
        { path: 'tickets/*path', method: RequestMethod.ALL },
        { path: 'users', method: RequestMethod.GET },
        { path: 'users/:id', method: RequestMethod.ALL },
        { path: 'users/:id/bookings', method: RequestMethod.GET },
        { path: 'users/:id/verify', method: RequestMethod.POST }
      );
  }
}