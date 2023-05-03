import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//app
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BensMoveisModule } from './bens-moveis/bens-moveis.module';
import { BensMoveisModule } from './bens-moveis/bens-moveis.module';
import { BensMoveisModule } from './bens-moveis/bens-moveis.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule, BensMoveisModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
