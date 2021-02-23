import { Controller, Post, HttpCode, Body, Get } from '@nestjs/common';
import UserDto from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.findAll();

    return users;
  }

  @Post('')
  @HttpCode(201)
  async newUser(@Body() user: UserDto) {
    const newUser = await this.userService.create(user);

    return { message: `User '${newUser.name}' created` };
  }
}
