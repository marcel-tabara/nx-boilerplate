import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { ExampleDTO } from './dto/example.dto';
import { PaginationDto } from './dto/pagination.dto';
import { ExampleService } from './example.service';

@Controller('examples')
export class ExampleController {
  constructor(private exampleService: ExampleService) {}

  @Get()
  async findPaginated(@Res() res: any, @Query() paginationQuery: PaginationDto) {
    const { limit, skip } = paginationQuery;
    const data = await this.exampleService.find(paginationQuery, {});
    return res
      .status(HttpStatus.OK)
      .json({ limit, skip, total: data.length, data });
  }

  @Get('/:_id')
  async findById(@Res() res, @Param('_id', new ValidateObjectId()) _id) {
    const example = await this.exampleService.findById(_id);
    return example
      ? res.status(HttpStatus.OK).json(example)
      : res.status(HttpStatus.NOT_FOUND);
  }

  @Post('/')
  async create(@Res() res, @Body() exampleDTO: ExampleDTO) {
    const example = await this.exampleService.create(exampleDTO);
    return res.status(HttpStatus.OK).json({
      message: 'success',
      example,
    });
  }

  @Put('/:_id')
  async findByIdAndUpdate(
    @Res() res,
    @Param('_id', new ValidateObjectId()) _id,
    @Body() exampleDTO: ExampleDTO & { _id: string }
  ) {
    const example = await this.exampleService.findByIdAndUpdate(
      _id,
      exampleDTO
    );
    if (!example) throw new NotFoundException('Example does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'success',
      example,
    });
  }

  @Delete('/:_id')
  async findByIdAndRemove(
    @Res() res,
    @Param('_id', new ValidateObjectId()) _id
  ) {
    const example = await this.exampleService.findByIdAndRemove(_id);
    if (!example) throw new NotFoundException('Example does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'success',
      example,
    });
  }
}
