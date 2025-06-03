import { IsEnum, IsNotEmpty, IsEmail } from "class-validator";

export enum Role {
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
}


export class RegisterDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsEnum(Role)
  role: Role;

  constructor(name: string, email: string, password: string, role: Role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}