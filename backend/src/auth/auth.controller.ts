import { Controller, Post, Body, UseGuards, Request, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const { email, password } = registerDto;
    return this.authService.register(email, password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  async login(@Request() req, @Body() loginDto: LoginDto) {
    return this.authService.login(req.user);
  }
}