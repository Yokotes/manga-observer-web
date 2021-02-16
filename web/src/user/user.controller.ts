import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import UserDto from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('api/v1/auth/login')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getUser(@Req() req: Request) {
    return req.user;
  }

  @Post()
  @HttpCode(201)
  newUser(@Body() user: UserDto) {
    this.userService
      .create(user)
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        return { message: `User ${user.name} created` };
      });
  }
}
