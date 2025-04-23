import { Module } from '@nestjs/common';
import { RefundsController } from './refund.controller';
import { RefundsService } from './refund.service';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [RefundsController],
  providers: [RefundsService,PrismaService],
})
export class RefundModule {}
