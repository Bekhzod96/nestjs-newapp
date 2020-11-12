import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { v4 as uuid } from 'uuid';
import { Response } from 'express';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat);
    const id: string = uuid();
    this.cats.push({ ...cat, id });
    return 'Created Successfully';
  }

  returnString() {
    return 'Hey';
  }
  findAll(query: string) {
    console.log(query);
    return this.cats;
  }

  findOne(id: string) {
    const inquiredCat = this.cats.find((el) => el.id === id);
    return inquiredCat
      ? `This id was inquered ${inquiredCat.name}`
      : 'Cat with this id not Found!';
  }

  getValueInt(id: number) {
    return `As a params recived number ${id}`;
  }
}
