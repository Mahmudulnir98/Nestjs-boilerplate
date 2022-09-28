import { Controller, Get, Post } from '@nestjs/common';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
import { BookService } from "./book.service";
@Controller('books')
export class BookController {
    constructor(private readonly BookService: BookService) {}
    @Get('pages/one')
    getHello(): string {
        return this.BookService.getHello();
    }

    @Get('back')
    getBac(): string {
        return this.BookService.getBack();
    }

    @Post('/bye')
    getHel(): string {
        return this.BookService.getTake();
    }
    
    @Post('/new')
    getHell(): string {
        return this.BookService.getNew();
    }
}
