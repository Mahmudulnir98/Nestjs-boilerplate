import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class PostUserDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    plot: number



}