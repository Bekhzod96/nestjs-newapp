import { Injectable } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat);
    this.cats.push(cat);
  }

  findAll(query: string): Cat[] {
    console.log(query);
    return this.cats;
  }
}
