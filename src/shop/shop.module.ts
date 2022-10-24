import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './schema/new-shop.schema';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forFeature(
        [
            {
                name: 'Shop', schema: Shop
            }
        ]
    )
  
  ],
  
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopsModule {}
//schema add