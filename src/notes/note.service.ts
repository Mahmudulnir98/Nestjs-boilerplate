import { Injectable } from '@nestjs/common'

@Injectable()
export class NoteService {
    getHello(): string {
        return 'Hello, This is Mahmud. I am a backend programmer and now I am working in everylearning.org';
    }
}