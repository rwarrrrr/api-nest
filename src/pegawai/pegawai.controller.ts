import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/pegawais')
@UseGuards(AuthGuard)
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Post()
  create(@Body() createPegawaiDto: CreatePegawaiDto) {
    return this.pegawaiService.create(createPegawaiDto);
  }

  @Get()
  findAll() {
    return this.pegawaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pegawaiService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto) {
    return this.pegawaiService.update(id, updatePegawaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pegawaiService.remove(id);
  }
}
