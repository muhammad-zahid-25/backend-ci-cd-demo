import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('hello this is test purpose console');
    return 'Hello World!';
  }
}
