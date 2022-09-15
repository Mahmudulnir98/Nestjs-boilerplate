import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/book.module';
import { NotesModule } from './notes/note.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        //s
      }),
    }),
    BooksModule,
    NotesModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
