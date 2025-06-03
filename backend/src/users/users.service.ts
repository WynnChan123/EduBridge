import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    })
    return user;
  }

  async compareSync(password: string, hashedPassword: string): Promise<boolean> {
    const bcrypt = require('bcrypt');
    return bcrypt.compareSync(password, hashedPassword);
  }

  async createUser(data: any) {
    return this.prisma.user.create({
      data,
    });
  }
}
