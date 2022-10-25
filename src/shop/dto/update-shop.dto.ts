import {IsString, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateShopDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    discount: number;

    @IsNumber()
    @IsNotEmpty()
    size: number;

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    description: string

}

