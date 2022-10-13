import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class PutBookDto {
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsNumber()
    @IsNotEmpty()
    publishedYear: number;



    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    plot: number

}