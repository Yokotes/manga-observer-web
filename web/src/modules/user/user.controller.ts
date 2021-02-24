import {
  Controller,
  Post,
  HttpCode,
  Body,
  Get,
  Param,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import UserDto from '../../dto/user.dto';
import { User } from '../../schemas/user.schema';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //
  // @Change: Remove this endpoint from prod build
  //
  @Get()
  async getUsers() {
    const users = await this.userService.findAll();
    return users;
  }

  @Get(':id/manga')
  @UseGuards(AuthGuard('jwt'))
  async getMangaList(@Param('id') id: string, @Req() req: Request) {
    const user = await this.userService.findOneById(id);
    const reqUser = req.user as User;

    if (user && user._id.toString() === reqUser._id.toString()) {
      if (user.mangaList.length !== 0) {
        return { statusCode: 200, data: user.mangaList };
      } else {
        return { statusCode: 204, message: 'Manga list is empty' };
      }
    } else throw new UnauthorizedException();
  }

  @Post('')
  @HttpCode(201)
  async newUser(@Body() user: UserDto) {
    const newUser = await this.userService.create(user);
    return { message: `User '${newUser.name}' created` };
  }
}
