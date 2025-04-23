import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private readonly requestMap = new Map<
    string,
    { count: number; timestamp: number }
  >();
  private readonly windowMs = 15 * 60 * 1000; // 15 minutes
  private readonly maxRequests = 100; // Maximum 100 requests per windowMs

  use(req: Request, res: Response, next: NextFunction) {
    if (!req.ip) {
      throw new HttpException('IP address missing', HttpStatus.BAD_REQUEST);
    }

    const ip = req.ip;

    const now = Date.now();

    // Clean expired entries
    if (this.requestMap.has(ip)) {
      const data = this.requestMap.get(ip);
      if (now - data!.timestamp > this.windowMs) {
        this.requestMap.delete(ip);
      }
    }

    // Check if limit is reached
    if (this.requestMap.has(ip)) {
      const data = this.requestMap.get(ip);
      if (data!.count >= this.maxRequests) {
        throw new HttpException(
          'Too many requests',
          HttpStatus.TOO_MANY_REQUESTS,
        );
      }

      // Increment count
      this.requestMap.set(ip, {
        count: data!.count + 1,
        timestamp: data!.timestamp,
      });
    } else {
      // Add new entry
      this.requestMap.set(ip, {
        count: 1,
        timestamp: now,
      });
    }

    next();
  }
}
