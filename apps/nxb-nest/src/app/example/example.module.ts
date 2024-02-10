import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { ExampleSchema } from './schemas/example.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Example', schema: ExampleSchema }]),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
  exports: [ExampleService],
})
export class ExampleModule {}
