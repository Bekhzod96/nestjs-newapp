import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
  UsePipes,
  UseGuards,
  SetMetadata,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateAdminDto, updateAdminDto } from './dto';
import { RolesGuard } from '../common/guards/roles.guard';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
@Controller('admin')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class AdminController {
  @Post()
  create(@Body() createAdminDto: CreateAdminDto, @Res() res: Response) {
    setTimeout(() => {
      res.status(HttpStatus.CREATED).json([createAdminDto]);
    }, 5000);
  }
  // GET localhost:3000/admin?user=Bekhzod
  @Get()
  index(@Query() query: string, @Res() res: Response) {
    res.status(HttpStatus.OK).send(query);
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    console.log('This is Controller');
    res.status(HttpStatus.OK).json({ id });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdminDto: updateAdminDto,
    @Res() res: Response,
  ) {
    res.status(HttpStatus.OK).json({ id, ...updateAdminDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json({ id });
  }
}
