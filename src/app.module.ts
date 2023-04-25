import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//app
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
//resources

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
