import { Body, Controller, Get, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
import { BookService } from "./book.service";
import { CreateBookDto } from './dto/create-book.dto';
import {NewBookDto} from  './dto/create-book.dto'; //'./dto/new-book.dto';
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

    @Post('/bye')
    public async getHel(
        @Req() req: Request,
        @Body() createBookDto: CreateBookDto
    ): Promise<string> {
        return this.BookService.getTake(createBookDto);
    }
    
    @Post('/new')
    public async getHell(
        @Req() req: Request,
        @Body() newBookDto: NewBookDto
    ): Promise<string> {
        return this.BookService.getNew(newBookDto);
    }

    @Put('/put')
    puthello(): string {
        return this.BookService.putNew();
    }

}
