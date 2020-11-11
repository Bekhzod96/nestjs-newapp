export class CreateCatDto {
  name: string;
  age: number;
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
