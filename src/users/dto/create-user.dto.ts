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

export class CreateUserDto{
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    plot: number;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string

}

export class CreateNewUserDto{
    @IsString()
    @IsNotEmpty() 
    name: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNumber()
    @IsNotEmpty()
    plot: number;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string

}

