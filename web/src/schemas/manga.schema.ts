import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MangaDocument = Manga & Document;

@Schema()
export class Manga {
  @Prop({ type: String, default: '' })
  title: string;

  @Prop({ type: String, default: '' })
  link: string;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String, default: '' })
  img: string;

  @Prop({ type: String, default: '' })
  latestChapter: string;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);