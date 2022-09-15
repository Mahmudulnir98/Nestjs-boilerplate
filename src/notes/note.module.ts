import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
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
  ],
  
  controllers: [NoteController],
  providers: [NoteService],
})
export class NotesModule {}