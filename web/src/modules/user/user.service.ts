import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserDto from '../../dto/user.dto';
import { User, UserDocument } from '../../schemas/user.schema';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  //
  // @Description: Create new user
  //
  async create(userDto: UserDto): Promise<User> {
    const user = await this.userModel.findOne({ name: userDto.name });

    if (user) throw new HttpException('User already exists', 409);

    const newUser = new this.userModel(userDto);
    newUser.password = await hash(newUser.password, 6);
    return newUser.save();
  }

  //
  // @Description: Update user data
  //
  async updateUserData(id: string, data: UserDto) {
    await this.userModel.updateOne(
      { _id: id },
      {
        $set: {
          name: data.name,
          password: data.password,
          img: data.img,
        },
      },
    );
  }

  //
  // @Description: Remove manga from user manga list
  //
  async removeManga(_userId: string, _mangaId: string) {
    const user = await this.userModel.findById(_userId);
    const mangaList = user.mangaList.filter((manga) => manga !== _mangaId);

    user
      .updateOne({
        $set: {
          mangaList: mangaList,
        },
      })
      .exec();
  }

  //
  // @Description: Add manga to user manga list
  //
  async addManga(_userId: string, _mangaId: string) {
    const user = await this.userModel.findById(_userId);

    await user
      .updateOne({
        $addToSet: {
          mangaList: _mangaId,
        },
      })
      .exec();
  }

  //
  // @Description: Return all users in database
  //
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  //
  // @Description: Return particular user by name
  //
  async findOne(name: string): Promise<User> {
    return this.userModel.findOne({ name });
  }

  //
  // @Description: Return particular user by id
  //
  async findOneById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
}
