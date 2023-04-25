import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor(private prisma: PrismaClient) {}

  async createUser(user: User): Promise<User> {
    return this.prisma.user.create({ data: user });
  }

  async findUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findUserByUsername(username: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { username } });
  }
}
