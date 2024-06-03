import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { LiburService } from './libur.service';
import { CreateLiburDto } from './dto/create-libur.dto';
import { UpdateLiburDto } from './dto/update-libur.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/liburs')
@UseGuards(AuthGuard)
export class LiburController {
  constructor(private readonly liburService: LiburService) {}

  @Post()
  create(@Body() createLiburDto: CreateLiburDto) {
    return this.liburService.create(createLiburDto);
  }

  @Get()
  findAll() {
    return this.liburService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liburService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLiburDto: UpdateLiburDto) {
    return this.liburService.update(id, updateLiburDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liburService.remove(id);
  }
}
