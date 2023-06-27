import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, senha: string) {
    console.log('entrou no singIn');

    const user = await this.userService.findOne(email);
    if (!user) {
      console.log('entrou no if 1');

      throw new UnauthorizedException();
    }
    console.log('passou if 1');
    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      console.log('entrou no if 2');
      throw new UnauthorizedException();
    }
    console.log('passou if 2');
    console.log('user:');
    console.log(user);

    const payload = { email: user.email, sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      access_token: accessToken,
    };
  }

  async signUp(newUserData: UsuarioEntity) {
    console.log('Start SingUp');
    const { nome, cpf, email, senha, setor, setorId, orgao, orgaoId } =
      newUserData;

    const userCreated = await this.userService.createUser({
      nome,
      cpf,
      email,
      senha,
      setor,
      setorId,
      orgao,
      orgaoId,
    });

    if (userCreated === false) {
      throw new HttpException(
        'User with this email already exists. Try logging in or using another email.',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log('User added! ');
    }

    return {
      message: 'User created successfully',
      user: userCreated,
    };
  }
}
