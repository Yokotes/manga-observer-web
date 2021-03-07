import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import MangaDto from '../../dto/manga,dto';
import { MangaService } from './manga.service';

@Controller('api/v1/mangas')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Post('/new')
  @HttpCode(201)
  async createManga(@Body() mangaDto: MangaDto) {
    const manga = await this.mangaService.create(mangaDto);
    return { message: `Manga ${manga.title} was created!` };
  }

  @Post()
  async getManyByIds(@Body() _ids: string[]) {
    const mangaArray = await this.mangaService.findMany(_ids);
    return mangaArray;
  }

  @Get(':id/users')
  async getSubscribers(@Param('id') _id: string) {
    const manga = await this.mangaService.findOne(_id);

    return manga.subscribers;
  }

  @Delete(':mangaId/users/:userId')
  @HttpCode(200)
  async deleteSubscriber(
    @Param('mangaId') _mangaId: string,
    @Param('userId') _userId: string,
  ) {
    await this.mangaService.removeSubscriber(_mangaId, _userId);

    return 'User is unsubscribed!';
  }

  @Post(':id/users')
  @HttpCode(201)
  async addSubscriber(@Param('id') _id: string, @Body() users: string[]) {
    await this.mangaService.subscribe(_id, users);

    return 'Users are subscribed!';
  }

  @Get()
  async getAll(@Res() res: Response) {
    const mangaList = await this.mangaService.findAll();

    if (mangaList.length !== 0) {
      return res.status(200).json(mangaList);
    } else {
      throw new HttpException('No manga in database!', 404);
    }
  }

  @Get(':id')
  async getManga(@Param('id') id: string) {
    const manga = await this.mangaService.findOne(id);
    return manga;
  }
}
