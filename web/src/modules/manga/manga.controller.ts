import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import MangaDto from '../../dto/manga,dto';
import { MangaService } from './manga.service';

@Controller('api/v1/manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Post()
  @HttpCode(201)
  async createManga(@Body() mangaDto: MangaDto) {
    const manga = await this.mangaService.create(mangaDto);
    return { message: `Manga ${manga.title} was created!` };
  }

  @Get()
  async getAll() {
    const mangaList = await this.mangaService.findAll();
    return mangaList;
  }

  @Get(':id')
  async getManga(@Param('id') id: string) {
    const manga = await this.mangaService.findOne(id);
    return manga;
  }
}
