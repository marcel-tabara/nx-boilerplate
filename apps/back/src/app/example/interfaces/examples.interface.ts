import { Document } from 'mongoose';
import { Example } from './example.interface';

export interface Examples extends Document {
  readonly total: number;
  readonly skip: number;
  readonly limit: number;
  readonly data: Example[];
}
