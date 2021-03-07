import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as schema } from 'mongoose';

export type MangaDocument = Manga & Document;

@Schema()
export class Manga {
  @Prop({ type: schema.Types.ObjectId, auto: true, transform: String })
  _id: string;

  @Prop({ type: String, default: '' })
  title: string;

  @Prop({ type: String, default: '' })
  link: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String, default: '/no_img.png' })
  img: string;

  @Prop({ type: String, default: '' })
  latestChapter: string;

  @Prop({ type: Array, default: [] })
  subscribers: string[];
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
