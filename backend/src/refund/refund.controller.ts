// src/modules/refunds/refunds.controller.ts
import { Controller, Get, Post, Put, Param, Body, UsePipes } from '@nestjs/common';
import { RefundSchema } from 'schemas/validation';
import { RefundsService } from './refund.service';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';


@Controller('refunds')
export class RefundsController {
  constructor(private readonly refundsService: RefundsService) {}

  @Get()
  async findAll() {
    return this.refundsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.refundsService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(RefundSchema))
  async create(@Body() data: any) {
    return this.refundsService.create(data);
  }

  @Put(':id/approve')
  async approve(@Param('id') id: string) {
    return this.refundsService.approve(id);
  }

  @Put(':id/reject')
  async reject(@Param('id') id: string) {
    return this.refundsService.reject(id);
  }

  @Put(':id/process')
  async process(@Param('id') id: string) {
    return this.refundsService.process(id);
  }
}