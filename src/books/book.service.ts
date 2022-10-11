import { IBooks } from './interfaces/books.interface';
import { NBooks } from './interfaces/post.interface';
import { Injectable } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto';
import {NewBookDto} from './dto/new-book.dto';
import { PostBookDto } from './dto/post-book.dto';
@Injectable()
export class BookService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';
    
    }
    getBack(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';
    
    }
   
    public async getTake(
        bookCreateData: CreateBookDto
    ): Promise<string> {

        console.log('book create', bookCreateData)

        return 'I wish I were a good backend developer';
    }

    
    public async getNew(
        newCreateData: NewBookDto
    ): Promise<string> {
        console.log('new create', newCreateData)
        return 'I wish I were a good backend developer and developer, I want to develop my self ';
    }
    
    putNew():string {
        return 'Today I will learn about put method'
    }

    //create book
    public createBook(
        createBookDto: CreateBookDto
    ): IBooks{
        const newBook: IBooks = {
         name: createBookDto.name,
         publishedYear: createBookDto.publishedYear,
         author: createBookDto.author,
         chapter: createBookDto.chapter   
        }

        return newBook
    }

    //post book
    public updateBook(
        postBookDto: PostBookDto
    ): NBooks{
        const postBook: NBooks = {
            name: postBookDto.name,
            publishedYear: postBookDto.publishedYear,
            author: postBookDto.author
        }

        return postBook

    }
}