import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: Function) {
  console.log(
    `Logger middleware applied to host${req.route.path} - route and Mrthod: ${
      Object.keys(req.route.methods)[0]
    }`,
  );
  next();
}
