import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import MangaDto from '../../dto/manga,dto';
import { Manga, MangaDocument } from '../../schemas/manga.schema';

@Injectable()
export class MangaService {
  constructor(
    @InjectModel(Manga.name) private mangaModel: Model<MangaDocument>,
  ) {}

  async create(mangaDto: MangaDto): Promise<Manga> {
    const manga = new this.mangaModel(mangaDto);
    return manga.save();
  }

  async findAll(): Promise<Manga[]> {
    return this.mangaModel.find().exec();
  }

  async findOne(_id: string): Promise<Manga> {
    const manga = await this.mangaModel.findById(_id);
    if (manga) return manga;
    else throw new NotFoundException('Not found manga with this id');
  }
}
