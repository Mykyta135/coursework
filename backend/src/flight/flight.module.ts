import { Module } from '@nestjs/common';
import { FlightsService } from './flight.service';
import { FlightsController } from './flight.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FlightsController],
  providers: [FlightsService,PrismaService],
})
export class FlightModule {}
