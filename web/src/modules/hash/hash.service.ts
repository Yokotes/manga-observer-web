import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  hash(data: string) {
    const dataArray = Array.from(data);
    let hash = 1;

    for (let i = 0; i < dataArray.length; i++) {
      hash += Math.round(dataArray[i].charCodeAt(0) * Math.random());
    }

    return hash;
  }
}
