import { Module } from '@nestjs/common';
import { JabatanService } from './jabatan.service';
import { JabatanController } from './jabatan.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Jabatan, JabatanSchema } from '../schemas/pegawai.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: Jabatan.name, schema: JabatanSchema }])],
  controllers: [JabatanController],
  providers: [JabatanService, JwtService],
})
export class JabatanModule {}
