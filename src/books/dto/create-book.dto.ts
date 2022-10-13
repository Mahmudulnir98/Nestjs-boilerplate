import {IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsNumber()
    @IsNotEmpty()
    publishedYear: number;

    @IsNumber()
    @IsNotEmpty()
    chapter: number;



    @IsString()
    @IsNotEmpty()
    author: string



}
