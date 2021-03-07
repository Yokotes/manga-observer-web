import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
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

  async findMany(_ids: string[]): Promise<Manga[]> {
    const objectIds = _ids.map((_id) => Types.ObjectId(_id));
    const mangaArray = await this.mangaModel
      .find({
        _id: {
          $in: objectIds,
        },
      })
      .exec();
    return mangaArray;
  }

  async findOne(_id: string): Promise<Manga> {
    const manga = await this.mangaModel.findById(_id);
    if (manga) return manga;
    else throw new NotFoundException('Not found manga with this id');
  }

  async removeSubscriber(_mangaId: string, _userId: string) {
    const manga = await this.mangaModel.findById(_mangaId);
    const subscribers = manga.subscribers.filter((id) => id !== _userId);
    await this.mangaModel.updateOne(
      {
        _id: _mangaId,
      },
      {
        $set: {
          subscribers: subscribers,
        },
      },
    );
  }

  async subscribe(_mangaId: string, users: string[]) {
    await this.mangaModel.updateOne(
      {
        _id: _mangaId,
      },
      {
        $addToSet: {
          subscribers: {
            $each: users,
          },
        },
      },
    );
  }
}
