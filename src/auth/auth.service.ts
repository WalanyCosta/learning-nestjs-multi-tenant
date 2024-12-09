import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login-dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const userFound = await this.userService.findOne(data.email);

    const verificationPassword = bcrypt.compareSync(
      data.password,
      userFound.password,
    );

    if (!userFound || !verificationPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password, ...result } = userFound;

    return {
      access_token: this.jwtService.sign(result),
    };
  }
}
