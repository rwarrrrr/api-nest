import { Module } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { PegawaiController } from './pegawai.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pegawai, PegawaiSchema } from 'src/schemas/pegawai.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pegawai.name, schema: PegawaiSchema }])],
  controllers: [PegawaiController],
  providers: [PegawaiService, JwtService],
})
export class PegawaiModule {}
