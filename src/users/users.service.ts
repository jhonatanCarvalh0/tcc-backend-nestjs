import { Injectable } from '@nestjs/common';
import { log } from 'console';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 0,
      username: 'jhonatan',
      email: 'asd',
      password: 'asd',
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

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async addOne(newUserData: object): Promise<any | undefined> {
    console.log(`Start addOne --> parameter: ${newUserData}`);
    console.log(this.users);

    const newUser: User = { userId: this.users.length, ...newUserData };
    console.log(`const newUser: User = ${newUser}`);

    if (this.users.find((user) => user.cpf === newUser.cpf)) {
      console.log('if statement: User already exist! Returned false');
      return false;
    }

    this.users.push(newUser);
    console.log('user added! Return true');
    console.log('End addOne');

    return true;
  }

  async list() {
    console.log(this.users);
    return;
  }
}
