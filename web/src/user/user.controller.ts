import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import UserDto from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users in database
  @Get()
  getAll() {
    this.userService.findAll().then((data) => {
      return data;
    });
  }

  // Create new user
  @Post()
  @HttpCode(201)
  newUser(@Body() user: UserDto) {
    this.userService.create(user).then(() => {
      return `User ${user.name} created`;
    });
  }
}
