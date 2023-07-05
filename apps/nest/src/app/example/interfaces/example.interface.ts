import { Document } from 'mongoose';

export interface Example extends Document {
  readonly _id?: string;
  readonly fact?: string;
  readonly length?: number;
}
