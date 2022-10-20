import { PutBookDto } from './dto/put-book.dto';
import { PBooks } from './interfaces/put.interface';
import { IBooks } from './interfaces/books.interface';
import { NBooks } from './interfaces/post.interface';
import { Injectable } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto';
import { NewBookDto } from './dto/new-book.dto';
import { PostBookDto } from './dto/post-book.dto';
@Injectable()
export class BookService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';

    }
    getBack(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';

    }
    putNew(): string {
        return 'Today I will learn about put method'
    }
    // patch request.
    patchreq(): string {
        return 'Patch request update a single field'
    }

    //delete request.
    deletereq(): string {
        return 'It is use to delete a resource'
    }


//
    public async getTake(bookCreateData: CreateBookDto): Promise<string> {

        console.log('book create', bookCreateData)

        return 'I wish I were a good backend developer';
    }

//dto
    public async getNew(newCreateData: NewBookDto): Promise<string> {
        console.log('new create', newCreateData)
        return 'I wish I were a good backend developer and developer, I want to develop my self ';
    }

   

    //create book interface
    public createBook(createBookDto: CreateBookDto): IBooks {
        const newBook: IBooks = {
            name: createBookDto.name,
            publishedYear: createBookDto.publishedYear,
            author: createBookDto.author,
            chapter: createBookDto.chapter
        }

        return newBook
    }

    //post book interface
    public updateBook( postBookDto: PostBookDto): NBooks {
        const postBook: NBooks = {
            name: postBookDto.name,
            publishedYear: postBookDto.publishedYear,
            author: postBookDto.author
        }

        return postBook

    }

    public putBook( PutBookDto: PutBookDto ): PBooks{
        const PutBook: PBooks = {
            name: PutBookDto.name,
            publishedYear: PutBookDto.publishedYear,
            author: PutBookDto.author,
            plot: PutBookDto.plot
        }
        return PutBook
    }
}