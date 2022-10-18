import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { LearnService } from './learn.service';
import { LearnController } from './learn.controller';
import { Learn } from './schemas/learn.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
        [
            {
                name: 'Learn', schema: Learn
            }
        ]
    )
  
  ],
  
  controllers: [LearnController],
  providers: [LearnService],
})
export class LearnsModule {}
//schema add