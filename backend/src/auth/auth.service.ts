import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dtos/register.dto';

export interface AccessToken {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async validateUser(email: string, password: string):
  Promise<any> {
    const user = await this.userService.findByEmail(email);
    if(!user){
      throw new BadRequestException('User not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const { password: _, ...result } = user;
    return result;
  }

  async login(user: User): Promise<AccessToken>{
    const payload = { email: user.email, sub: user.id, role: user.role };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }

  async register(data: RegisterDto): Promise<AccessToken>{
    const existingUser = await this.userService.findByEmail(data.email);
    if(existingUser){
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await this.userService.createUser({
      email: data.email,
      name: data.name,
      role: data.role,
      password: hashedPassword,
    });
    if (!newUser) {
      throw new BadRequestException('Failed to create user');
    }
    return this.login(newUser);
  }

}
