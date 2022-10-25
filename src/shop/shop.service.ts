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
    
     public ucart( createShopDto: CreateShopDto): IShops {     //schema add
        const shopSchema: IShops = {
            name: createShopDto.name,
            price: createShopDto.price,
            discount: createShopDto.discount,
            size: createShopDto.size,
            id: createShopDto.id,
            description: createShopDto.description
        }

        return shopSchema

    }
    

 
}