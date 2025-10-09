import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  sex: boolean;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;
}
