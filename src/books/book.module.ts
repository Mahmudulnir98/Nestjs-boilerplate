import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [
  
  ],
  
  controllers: [BookController],
  providers: [BookService],
})
export class BooksModule {}
