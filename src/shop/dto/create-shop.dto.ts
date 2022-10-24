import {IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateShopDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    discount: number


}