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
} from '@nestjs/common';
import { Response } from 'express';
import { CreateAdminDto, updateAdminDto } from './dto';
import { RolesGuard } from '../common/guards/roles.guard';
@Controller('admin')
@UseGuards(RolesGuard)
export class AdminController {
  @Post()
  create(@Body() createAdminDto: CreateAdminDto, @Res() res: Response) {
    res.status(HttpStatus.CREATED).json([createAdminDto]);
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
