import { Module } from '@nestjs/common';
import { TicketsController } from './ticket.controller';
import { TicketsService } from './ticket.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService,PrismaService],
})
export class TicketModule {}
