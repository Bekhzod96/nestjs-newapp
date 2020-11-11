import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: Function) {
  console.log(
    `Logger middleware applied to host${req.route.path} - route and Method: ${
      Object.keys(req.route.methods)[0]
    }`,
  );
  next();
}
