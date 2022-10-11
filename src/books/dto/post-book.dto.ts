import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class PostBookDto {
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
