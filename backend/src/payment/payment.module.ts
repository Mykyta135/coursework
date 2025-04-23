import { Module } from '@nestjs/common';
import { PaymentsService } from './payment.service';
import { PaymentsController } from './payment.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService,PrismaService],
})
export class PaymentModule {}
