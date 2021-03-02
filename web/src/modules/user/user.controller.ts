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
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { hash } from 'bcrypt';
import { Request } from 'express';
import UserDto from '../../dto/user.dto';
import { User } from '../../schemas/user.schema';
import { UserService } from './user.service';
import * as fs from 'fs';
import { resolve } from 'path';

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

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('formImg'))
  async updateUser(
    @Param('id') id: string,
    @Body() body,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const reqUser = req.user as User;
    const auth = reqUser._id.toString() === id.toString();

    if (auth) {
      const password = await hash(body.password, 6);
      const user = await this.userService.findOneById(reqUser._id);
      let newImg = '';

      if (file) {
        fs.writeFileSync(
          resolve(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            'nginx',
            'public',
            'users',
            user.name +
              '.' +
              file.mimetype
                .toString()
                .replace('image', '')
                .replace('\\', '')
                .replace('/', ''),
          ),
          file.buffer,
        );

        newImg = `/users/${user.name}`;
      }

      const data: UserDto = {
        _id: user._id,
        name: body.username ? body.username : user.name,
        password: password ? password : user.password,
        img: newImg ? newImg : user.img,
        mangaList: user.mangaList,
      };

      await this.userService.updateUserData(data._id, data);
    }
  }
}
