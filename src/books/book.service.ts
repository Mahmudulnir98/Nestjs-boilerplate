import { Injectable } from '@nestjs/common'

@Injectable()
export class BookService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer';
    }
}