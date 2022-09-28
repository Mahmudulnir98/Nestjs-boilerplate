import { Injectable } from '@nestjs/common'

@Injectable()
export class BookService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer';
    
    }
    getTake():string {
        return 'I wish I were a good backend developer';
    }
    
}