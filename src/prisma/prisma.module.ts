import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//Torna meu prisma como um modulo global restringindo assim multiplas instancias
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
