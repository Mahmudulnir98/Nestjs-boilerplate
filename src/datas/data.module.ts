import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { Data } from './schemas/data.schema';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Data',
        schema: Data,
      },
    ]),
  ],

  controllers: [DataController],
  providers: [DataService],
})
export class DatasModule {}
