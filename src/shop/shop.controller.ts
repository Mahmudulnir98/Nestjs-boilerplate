import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { IShops } from './interface/shop.interface';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
@Controller('/shop')
export class ShopController {
    constructor(private readonly ShopService: ShopService) {}
   //schema add
    @Post('/cart')
    public async upon(
        @Req() req: Request,
        @Body() createShopDto: CreateShopDto
    ): Promise<IShops> {
        return this.ShopService.ucart(createShopDto)
    }


}
