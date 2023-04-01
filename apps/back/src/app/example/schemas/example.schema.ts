import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { Document, ObjectId } from 'mongoose';

export type ExampleDocument = Example & Document;

@Schema()
export class Example {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  fact: string;

  @Prop()
  length: number;
}

export const ExampleSchema = SchemaFactory.createForClass(Example);
