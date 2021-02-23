import { Injectable } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { UserService } from '../user.service';
import { compare } from 'bcrypt';
import UserDto from '../../dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<User> {
    const user = await this.userService.findOne(name);
    const pass = await compare(password, user.password);

    if (user && pass) {
      return user;
    }

    return null;
  }

  async login(user: UserDto) {
    const payload = {
      name: user.name,
      img: user.img,
      sub: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
