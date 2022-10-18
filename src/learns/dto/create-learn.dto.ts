import {IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLearnDto {
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