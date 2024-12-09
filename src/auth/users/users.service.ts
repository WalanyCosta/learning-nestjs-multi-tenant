import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  createPartnerUser(data: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: UserRoles.PARTNER,
      },
    });
  }

  createCommonUser(data: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: UserRoles.USER,
      },
    });
  }

  private generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  findOne(idOrEmail: number | string) {
    return this.prismaService.user.findFirst({
      where: {
        ...(typeof idOrEmail === 'number'
          ? { id: idOrEmail }
          : { email: idOrEmail }),
      },
    });
  }
}
