import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateAdminDto, updateAdminDto } from './dto';
@Controller('admin')
export class AdminController {
  @Post()
  create(@Body() createAdminDto: CreateAdminDto): string {
    return 'Admin has been created';
  }
  @Get()
  index(@Query() query: string): string {
    return 'Get all admin list';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Get Person Corresponding id: ${id} `;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdminDto: updateAdminDto,
  ): string {
    return `This user inofrmation has been updated ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This user has been removed ${id}`;
  }
}
