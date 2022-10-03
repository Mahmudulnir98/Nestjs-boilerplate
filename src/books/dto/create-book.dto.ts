import {IsEmail, IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsNumber()
    @IsNotEmpty()
    publishedYear: number;

    @IsString()
    @IsNotEmpty()
    author: string

}