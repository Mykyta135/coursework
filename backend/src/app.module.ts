import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { FlightModule } from './flight/flight.module';
// import { BookingModule } from './booking/booking.module';
// import { TicketModule } from './ticket/ticket.module';

// import { UserModule } from './user/user.module';

// import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { RefundModule } from './refund/refund.module';
import { TicketModule } from './ticket/ticket.module';
import { BookingModule } from './booking/booking.module';
import { FlightModule } from './flight/flight.module';
import { PrismaModule } from './prisma/prisma.module';

// import { AdminModule } from './admin/admin.module';
// import { AuthModule } from './auth/auth.module';
@Module({
  imports: [FlightModule, BookingModule, TicketModule, UserModule, PrismaModule, RefundModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
