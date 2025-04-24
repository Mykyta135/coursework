// src/pipes/zod-validation.pipe.ts
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      // Parse the value against the schema
      return this.schema.parse(value);
    } catch (error) {
      // If validation fails, throw a BadRequestException with the validation errors
      throw new BadRequestException({
        message: 'Validation failed',
        errors: JSON.stringify(error.errors)
      });
    }
  }
}