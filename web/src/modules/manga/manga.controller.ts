import { Body, Controller, Get, HttpCode, HttpException, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import MangaDto from '../../dto/manga,dto';
import { MangaService } from './manga.service';

@Controller('api/v1/mangas')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Post()
  @HttpCode(201)
  async createManga(@Body() mangaDto: MangaDto) {
    const manga = await this.mangaService.create(mangaDto);
    return { message: `Manga ${manga.title} was created!` };
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
