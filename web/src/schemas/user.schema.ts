import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, type: String, _id: true })
  _id: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ required: true, type: String, default: '/default_avatar.jpg' })
  img: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
