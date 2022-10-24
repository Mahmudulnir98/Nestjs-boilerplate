import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IShops } from './interface/shop.interface';
import { CreateShopDto } from './dto/create-shop.dto';
@Injectable()
export class ShopService {
    constructor(
        @InjectModel('Shop')
        private readonly ShopModel: Model<IShops>
    ){}
    
 // schema add
     public ucart( createShopDto: CreateShopDto): IShops {
        const shopSchema: IShops = {
            name: createShopDto.name,
            price: createShopDto.price,
            discount: createShopDto.discount
        }

        return shopSchema

    }
    

 
}