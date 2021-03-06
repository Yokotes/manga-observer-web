import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: schema.Types.ObjectId, auto: true, transform: String })
  _id: string;

  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  password: string;

  @Prop({ type: String, default: '/default_avatar.jpg' })
  img: string;

  @Prop({ type: Array, default: [] })
  mangaList: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
