import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(name: string, pass: string): Promise<User> {
    const user = await this.userService.findOne(name);

    if (user && user.password === pass) {
      return user;
    }

    return null;
  }
}
