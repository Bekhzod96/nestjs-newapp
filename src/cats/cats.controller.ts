import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  sendArspons(): string {
    return 'This is cats route';
  }
}
