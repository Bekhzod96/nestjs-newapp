import { IsString, IsInt, IsNumber } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  breed: string;
}

export class updateCatDto {
  age?: string;
  name?: string;
}

export class getCatBodyMiddleware {
  name?: string;
  age?: string;
  auth: string;
}
