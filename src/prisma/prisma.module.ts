import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // Registre o PrismaService como provedor aqui
  exports: [PrismaService], // Exporte o PrismaService para que outros módulos possam importá-lo
})
export class PrismaModule {}
