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
      email: 'email',
      password: 'senha',
    },
    {
      userId: 1,
      username: 'john',
      email: 'john@example.com',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      email: 'maria@example.com',
      password: 'guess',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email); // por que caralhas ta dando undefined!!!
  }

  async addOne(newUserData: object): Promise<any | undefined> {
    console.log(`Start addOne --> parameter: ${newUserData}`);
    console.log(this.users);

    const newUser: User = { userId: this.users.length, ...newUserData };
    console.log(`const newUser: User = ${newUser}`);

    if (this.users.find((user) => user.email === newUser.email)) {
      console.log('if statement: User already exist! Returned false');
      return false;
    }

    this.users.push(newUser);
    console.log('user added!Return true');
    console.log('End addOne');

    return true;
  }

  async list() {
    console.log(this.users);
    return;
  }
}
