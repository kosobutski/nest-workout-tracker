import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email });
    if (!user) throw new UnauthorizedException('Incorrect email or password');
    const passwordIsMatch = await argon2.verify(user.password as string, pass);
    if (!passwordIsMatch)
      throw new UnauthorizedException('Incorrect email or password');
    return user;
  }
}
