// src/modules/payments/payments.controller.ts
import { Controller, Get, Post, Param, Body, UsePipes } from '@nestjs/common';

import { PaymentSchema } from '../../schemas/validation';
import { PaymentsService } from './payment.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  async findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(PaymentSchema))
  async create(@Body() data: any) {
    return this.paymentsService.create(data);
  }
  
  @Post(':id/process')
  async processPayment(@Param('id') id: string) {
    return this.paymentsService.processPayment(id);
  }
}