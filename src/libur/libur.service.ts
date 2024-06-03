import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLiburDto } from './dto/create-libur.dto';
import { UpdateLiburDto } from './dto/update-libur.dto';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Libur } from 'src/schemas/libur.schema';

@Injectable()
export class LiburService {
  constructor(@InjectModel(Libur.name) private liburModel: Model<Libur>) {}
  create(createLiburDto: CreateLiburDto) {
    const createdLibur = new this.liburModel(createLiburDto)

    return createdLibur.save()
  }

  findAll() {
    const liburs = this.liburModel.find().exec()

    return liburs
  }

  findOne(id: string) {
    const liburs = this.liburModel.findOne({
      _id: new ObjectId(id)
    }).exec()

    if(!liburs) {
      throw new NotFoundException('data libur tidak ditemukan')
    }

    return liburs
  }

  update(id: string, updateLiburDto: UpdateLiburDto) {
    const liburs = this.liburModel.findOneAndUpdate({
      _id: new ObjectId(id)
    }, updateLiburDto).exec()

    if(!liburs) {
      throw new NotFoundException('data libur tidak ditemukan')
    }

    return liburs
  }

  remove(id: string) {
    const liburs = this.liburModel.findOneAndDelete({
      _id: new ObjectId(id)
    })

    if(!liburs) {
      throw new NotFoundException('data libur tidak ditemukan')
    }

    return liburs
  }
}
