import { Module } from '@nestjs/common';
import { LiburService } from './libur.service';
import { LiburController } from './libur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Libur, LiburSchema } from '../schemas/libur.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: Libur.name, schema: LiburSchema }])],
  controllers: [LiburController],
  providers: [LiburService, JwtService],
})
export class LiburModule {}
