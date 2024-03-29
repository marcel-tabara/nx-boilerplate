import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.NX_MONGO_URL), ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
