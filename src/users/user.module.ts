import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User} from './schemas/user.schema';
import { NUser } from './schemas/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
        [
            {
                name: 'User', schema: User
            }
        ]
    ),
    MongooseModule.forFeature([{ name: 'NUser', schema: NUser}])
  
  ],
  
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
