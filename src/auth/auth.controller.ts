import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsuarioEntity } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  /**
     * HINT
       Ideally, instead of using the Record<string, any> type,
       we should use a DTO class to define the shape of the request body. 
       See the validation chapter at nestjs docs for more information
     */
  signIn(@Body() singInDto: Record<string, any>) {
    return this.authService.signIn(singInDto.email, singInDto.senha);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  /**
     * HINT
       Ideally, instead of using the Record<string, any> type,
       we should use a DTO class to define the shape of the request body. 
       See the validation chapter at nestjs docs for more information
     */
  signUp(@Body() singUpDto: UsuarioEntity) {
    return this.authService.signUp(singUpDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
