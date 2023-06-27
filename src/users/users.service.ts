import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuarioEntity } from './entities/user.entity';
// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // Array de usuários fictícios
  private readonly users = [
    {
      id: 0,
      nome: 'jhonatan',
      email: 'asd',
      senha: 'asd',
    },
    {
      id: 11111111,
      nome: 'asd',
      cpf: '11111111',
      email: 'asd',
      senha: 'asd',
      setor: 'NCAPT',
      setorId: 1,
      orgao: 'FAPERO',
      orgaoId: 1,
    },
    {
      id: 12345678,
      nome: 'Jhonatan',
      cpf: '11122233300',
      email: 'jhonatan@email.com',
      senha: 'senha',
      setor: 'NCAPT',
      setorId: 1,
      orgao: 'FAPERO',
      orgaoId: 1,
    },
  ];

  // Encontra um usuário pelo email
  async findOne(email: string): Promise<User | undefined> {
    const userFind = this.users.find((user) => user.email === email);
    return userFind;
  }

  // Adiciona um novo usuário
  async createUser(newUserData: UsuarioEntity): Promise<any | undefined> {
    const hashedPassword = await bcrypt.hash(newUserData.senha, 10);
    const newUser: User = {
      id: this.users.length,
      ...newUserData,
      senha: hashedPassword,
    };

    // Verifica se o usuário já existe no array de usuários
    if (this.users.find((user) => user.cpf === newUser.cpf)) {
      console.log('if statement: User already exist! Returned false');
      return false;
    }

    // Adiciona o novo usuário ao array de usuários
    this.users.push(newUser);

    return true;
  }

  // Lista todos os usuários
  async list() {
    console.log(this.users);
    return;
  }
}
