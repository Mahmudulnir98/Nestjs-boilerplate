import { Injectable } from '@nestjs/common'

@Injectable()
export class BookService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';
    
    }
    getBack(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and developer';
    
    }
   
    getTake():string {
        return 'I wish I were a good backend developer';
    }

    
    getNew():string {
        return 'I wish I were a good backend developer';
    }
    
}