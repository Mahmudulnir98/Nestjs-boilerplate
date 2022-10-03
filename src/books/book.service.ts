import { Injectable } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto';

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

    
    getNew():string {
        return 'I wish I were a good backend developer and developer, I want to develop my self ';
    }
    
    putNew():string {
        return 'Today I will learn about put method'
    }
}