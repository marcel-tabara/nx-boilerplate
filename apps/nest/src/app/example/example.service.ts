import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExampleDTO } from './dto/example.dto';
import { PaginationDto } from './dto/pagination.dto';
import { Example } from './interfaces/example.interface';

@Injectable()
export class ExampleService {
  constructor(
    @InjectModel('Example') private readonly exampleModel: Model<Example>,
  ) {}

  find = async (paginationQuery: PaginationDto, query): Promise<Example[]> => {
    Logger.log(
      `ExampleService: Find examples ${JSON.stringify(query, null, 2)}`,
    );
    const { limit, skip, sort } = paginationQuery;
    return await this.exampleModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec();
  };

  findById = async (_id): Promise<Example> => {
    Logger.log(`ExampleService: findById ${_id}`);
    return await this.exampleModel.findById(_id).exec();
  };

  create = async (exampleDTO: ExampleDTO): Promise<Example> => {
    Logger.log(
      `ExampleService: Create example. ${JSON.stringify(exampleDTO, null, 2)}`,
    );
    const newExample = await new this.exampleModel(exampleDTO).save();

    return newExample;
  };

  findByIdAndUpdate = async (
    _id: string,
    exampleDTO: ExampleDTO,
  ): Promise<Example> => {
    Logger.log(`ExampleService: findByIdAndUpdate ${_id}`);

    return await this.exampleModel.findByIdAndUpdate(_id, exampleDTO, {
      new: true,
    });
  };

  findByIdAndRemove = async (_id): Promise<Example> => {
    Logger.log(`ExampleService: findByIdAndRemove ${_id}`);
    return await this.exampleModel.findByIdAndRemove(_id);
  };
}
