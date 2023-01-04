import { Example } from '../interfaces/example.interface';

export class ExamplesDTO {
  readonly total: number;
  readonly skip: number;
  readonly limit: number;
  readonly data: Example[];
}
