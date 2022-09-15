import { Controller, Get } from '@nestjs/common';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
import { BookService } from "./book.service";
@Controller('/books')
export class BookController {
    constructor(private readonly BookService: BookService) {}
    @Get()
    getHello(): string {
        return this.BookService.getHello();
    }
}
