import { IBooks } from './interfaces/books.interface';
import { NBooks } from './interfaces/post.interface';
import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
import { BookService } from "./book.service";
import { CreateBookDto } from './dto/create-book.dto';
import {NewBookDto} from  './dto/new-book.dto'; //'./dto/new-book.dto';
import { PostBookDto } from './dto/post-book.dto';
@Controller('/books')
export class BookController {
    constructor(private readonly BookService: BookService) {}
    @Get('pages')
    getHello(): string {
        return this.BookService.getHello();
    }

    @Get('/back')
    getBac(): string {
        return this.BookService.getBack();
    }

    @Post('/create')
    public async createBook(
        @Req() req: Request,
        @Body() createBookDto: CreateBookDto
    ): Promise<IBooks> {
        return this.BookService.createBook(createBookDto);
    }
    
    @Post('/new')
    public async getHell(
        @Req() req: Request,
        @Body() newBookDto: NewBookDto
    ): Promise<string> {
        return this.BookService.getNew(newBookDto);
    }

    @Post('/post')
    public async updateBook(
        @Req() req: Request,
        @Body() PostBookDto: PostBookDto
    ): Promise<NBooks> {
        return this.BookService.updateBook(PostBookDto)
    }


     @Put('/put')
    putello(): string {
        return this.BookService.putNew();
     }

}
