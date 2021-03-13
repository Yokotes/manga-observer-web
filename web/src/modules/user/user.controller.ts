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
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { hash } from 'bcrypt';
import { Request } from 'express';
import UserDto from '../../dto/user.dto';
import { User } from '../../schemas/user.schema';
import { UserService } from './user.service';
import * as fs from 'fs';
import { resolve, join } from 'path';
import { AuthService } from '../auth/auth.service';
import { HashService } from '../hash/hash.service';

@Controller('api/v1/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly hashService: HashService,
  ) {}
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

  @Post(':id/manga')
  @UseGuards(AuthGuard('jwt'))
  async addToMangaList(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() mangaId: string[],
  ) {
    const user = await this.userService.findOneById(id);
    const reqUser = req.user as User;

    if (user && user._id.toString() === reqUser._id.toString()) {
      await this.userService.addManga(id, mangaId[0]);
      return (await this.userService.findOneById(id)).mangaList;
    } else throw new UnauthorizedException();
  }

  @Delete(':userId/manga/:mangaId')
  @UseGuards(AuthGuard('jwt'))
  async removeMangaFromMangaList(
    @Param('userId') _userId: string,
    @Param('mangaId') _mangaId: string,
    @Req() req: Request,
  ) {
    const reqUser = req.user as User;
    if (_userId !== reqUser._id.toString()) throw new UnauthorizedException();

    await this.userService.removeManga(_userId, _mangaId);
    return 'Manga deleted from list';
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
      const user = await this.userService.findOneById(reqUser._id);
      const password = body.password ? await hash(body.password, 6) : '';
      let newImg = '';

      if (file && file.mimetype.includes('image')) {
        const filename =
          user.name +
          '.' +
          this.hashService.hash(user.name) +
          '.' +
          file.mimetype.replace('image/', '');
        const path = resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'nginx',
          'public',
        );

        newImg = join('users', filename);
        try {
          fs.unlinkSync(join(path, user.img));
        } catch {
          throw new Error('No such file in directory!');
        }
        fs.writeFileSync(join(path, newImg), file.buffer);
      }

      const data: UserDto = {
        _id: user._id,
        name: body.username ? body.username : user.name,
        password: password ? password : user.password,
        img: newImg ? newImg : user.img,
        mangaList: user.mangaList,
      };

      await this.userService.updateUserData(data._id, data);

      return this.authService.login(data);
    }
  }
}
