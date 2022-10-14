import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class PassUserDto {
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