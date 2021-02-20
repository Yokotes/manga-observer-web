import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Manga, MangaSchema } from '../schemas/manga.schema';
import { MangaController } from './manga.controller';
import { MangaService } from './manga.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Manga.name, schema: MangaSchema }]),
  ],
  controllers: [MangaController],
  providers: [MangaService],
})
export class MangaModule {}
