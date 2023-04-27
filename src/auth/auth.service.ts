import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    /**
     * WARNING
    Of course in a real application, you wouldn't store a password in plain text. 
    You'd instead use a library like bcrypt, with a salted one-way hash algorithm. 
    With that approach, you'd only store hashed passwords, and then compare the 
    stored password to a hashed version of the incoming password, thus never storing 
    or exposing user passwords in plain text. To keep our sample app simple, 
    we violate that absolute mandate and use plain text. 
    Don't do this in your real app!
    */
    const payload = { email: user.email, sub: user.userId };
    return {
      acess_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(username: string, email: string, password: string) {
    console.log('Start SingUp');
    const newUserData: object = { username, email, password };
    const userCreated = await this.userService.addOne(newUserData);
    console.log('start if statement of signUp');
    if (userCreated === false) {
      console.log('User already exist, try login or another email!');
      throw new HttpException(
        'User with this email already exists. Try logging in or using another email.',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log('User added! ');
    }
    console.log('end if statement of signUp');
    await this.userService.list();
    return true;
  }
}
