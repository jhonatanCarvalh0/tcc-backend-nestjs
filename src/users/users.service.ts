import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Usuario } from '@prisma/client';
import { CreateUsuarioDTO } from './dto/create-user.dto';

// This should be a real class/interface representing a user entity
export type User = Usuario;
export type UserArray = any;

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

  constructor(private prisma: PrismaService) {}

  // Encontra um usuário pelo email - Prisma/Database
  async readOnly(email: string): Promise<User | undefined> {
    return this.prisma.usuario.findFirst({
      where: { email },
    });
  }

  // Adiciona um novo usuário - Prisma/Database - TODO
  async createUser(newUserData: CreateUsuarioDTO): Promise<User | undefined> {
    const hashedPassword = await bcrypt.hash(newUserData.senha, 10);

    // Verifica se o usuário já existe no banco de dados
    const existingUser = await this.prisma.usuario.findFirst({
      where: {
        cpf: newUserData.cpf,
      },
    });

    if (existingUser) {
      console.log('User already exists!');
      return undefined;
    }

    const newUser = await this.prisma.usuario.create({
      data: {
        nome: newUserData.nome,
        cpf: newUserData.cpf,
        email: newUserData.email,
        senha: hashedPassword,
        setorId: newUserData.setorId,
        orgaoId: newUserData.orgaoId,
      },
      include: {
        setor: true,
        orgao: true,
      },
    });

    return newUser;
  }

  // Lista todos os usuários - Prisma/Database - TODO
  async list() {
    const users = await this.prisma.usuario.findMany();
    console.log(users);
    return;
  }

  // Encontra um usuário pelo email - Array
  async readOnlyArray(email: string): Promise<UserArray | undefined> {
    const userFind = this.users.find((user) => user.email === email);
    return userFind;
  }
  // Adiciona um novo usuário - Array
  async createUserArray(
    newUserData: CreateUsuarioDTO,
  ): Promise<UserArray | undefined> {
    const hashedPassword = await bcrypt.hash(newUserData.senha, 10);
    const newUser: UserArray = {
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

  // Lista todos os usuários - Array
  async listArray() {
    console.log(this.users);
    return;
  }
}
