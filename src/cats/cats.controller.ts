import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
  Body,
  HttpException,
  HttpService,
  HttpStatus,
  UseFilters,
  ForbiddenException,
  ParseUUIDPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto, getCatBodyMiddleware } from './dto/dto';
import { Cat } from './interfaces/cats.interface';
import { HttpExceptionFilter } from '../common/http-exception.filter';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(
    @Query() query: string,
    @Body() body: getCatBodyMiddleware,
  ): Promise<Cat[]> {
    const bodySting = JSON.stringify(body);
    console.info('This message added to controller ', bodySting);
    return this.catsService.findAll(query);
  }
  // @Get(':id')
  // findOne(
  //   @Param(
  //     'id',
  //     new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   id: string,
  // ) {
  //   return this.catsService.findOne(id);
  // }

  @Get(':id')
  getValueInt(@Param('id', new ParseIntPipe()) id) {
    return this.catsService.getValueInt(id);
  }

  @Get('err')
  async sendError() {
    throw new HttpException(
      {
        status: 'Aunotorized route access',
        error: "You don't have a permission to access this route",
      },
      HttpStatus.FORBIDDEN,
    );
  }

  @Post('exception')
  @UseFilters(HttpExceptionFilter)
  async createExeption(@Body() crateCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }

  // @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  // create(@Req() req: Request): string {
  //   const body = JSON.stringify(req.body);
  //   console.log(body);
  //   return `This is in req body ${body}`;
  // }

  // @Get()
  // sendArspons(@Req() req: Request): string {
  //   return `This request has ben arrived ${req.body[0]}`;
  // }

  // --------- Redirect -------
  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
}
