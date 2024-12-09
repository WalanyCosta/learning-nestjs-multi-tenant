import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './login-dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }
}
