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

  //
  // @Description: Create new manga instance in the database
  //
  async create(mangaDto: MangaDto): Promise<Manga> {
    const manga = new this.mangaModel(mangaDto);
    return manga.save();
  }

  //
  // @Description: Return array with all mangas
  //
  async findAll(): Promise<Manga[]> {
    return this.mangaModel.find().exec();
  }

  //
  // @Description: Return manga array by ids array
  //
  async findManyById(_ids: string[]): Promise<Manga[]> {
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

  //
  // @Description: Return manga by id
  //
  async findOne(_id: string): Promise<Manga> {
    const manga = await this.mangaModel.findById(_id);
    if (manga) return manga;
    else throw new NotFoundException('Not found manga with this id');
  }

  //
  // @Description: Remove subscriber with _userId from manga wiyj _mangaId
  //
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

  //
  // @Description: Add users from array to manga subscribers field
  //
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
