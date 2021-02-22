import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserDto from '../dto/user.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userDto: UserDto): Promise<User> {
    const user = await this.userModel.findOne({ name: userDto.name });

    if (user) throw new HttpException('User already exists', 409);

    const newUser = new this.userModel(userDto);
    newUser.password = await hash(newUser.password, 6);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(name: string): Promise<User> {
    return this.userModel.findOne({ name });
  }
}
