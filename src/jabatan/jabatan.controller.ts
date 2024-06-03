import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { JabatanService } from './jabatan.service';
import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('api/jabatans')
@UseGuards(AuthGuard)
export class JabatanController {
  constructor(private readonly jabatanService: JabatanService) {}

  @Post()
  create(@Body() createJabatanDto: CreateJabatanDto) {
    return this.jabatanService.create(createJabatanDto);
  }

  @Get()
  findAll() {
    return this.jabatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jabatanService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateJabatanDto: UpdateJabatanDto) {
    return this.jabatanService.update(id, updateJabatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jabatanService.remove(id);
  }
}
