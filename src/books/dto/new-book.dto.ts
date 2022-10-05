import {IsString, IsNotEmpty, IsNumber } from "class-validator";
export class NewBookDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNumber()
    @IsNotEmpty()
    chapter: number;

    @IsString()
    @IsNotEmpty()
    author: string
}