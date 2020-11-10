import { Controller, Get, Req, Post } from '@nestjs/common';
import { Request } from 'express';
@Controller('cats')
export class CatsController {
  @Post()
  create(@Req() req: Request): string {
    const body = JSON.stringify(req.body);
    console.log(body);
    return `This is in req body ${body}`;
  }

  @Get()
  sendArspons(@Req() req: Request): string {
    return `This request has ben arrived ${req.body[0]}`;
  }
}
