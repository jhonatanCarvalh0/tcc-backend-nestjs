import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

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
    return this.authService.signIn(singInDto.usernameq, singInDto.password);
  }
}
