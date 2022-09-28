import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloo(): string {
    return 'hello this is Mahmud, I am a backend developer';
  }
  getTake():string {
    return 'I wish I were a good backend developer';
}

}
