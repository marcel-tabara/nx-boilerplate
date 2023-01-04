import { Document } from 'mongoose';

export interface Example extends Document {
  readonly _id?: string;
  readonly name?: string;
}
