import { Injectable } from '@nestjs/common';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';
import { InjectModel, Schema } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Pegawai } from 'src/schemas/pegawai.schema';
import { ObjectId } from 'mongodb';

@Injectable()
export class PegawaiService {
  constructor(@InjectModel('Pegawai') private pegawaiModel: Model<Pegawai>) {}
  create(createPegawaiDto: CreatePegawaiDto) {
    const createdPegawai = new this.pegawaiModel(createPegawaiDto);
    return createdPegawai.save();
  }

  findAll() {

    const pegawais = this.pegawaiModel.find().populate({
      path: 'jabatan',
      model: 'Jabatan'
    })

    return pegawais;
  }

  findOne(id: string) {
    const pegawai = this.pegawaiModel.findOne({
      _id: new ObjectId(id)
    })

    return pegawai
  }

  update(id: string, updatePegawaiDto: UpdatePegawaiDto) {
    const pegawai = this.pegawaiModel.findOneAndUpdate({
      _id: new ObjectId(id),
    }, {
      ...updatePegawaiDto
    }, {
      new: true
    })

    return pegawai
  }

  remove(id: string) {
    const pegawai = this.pegawaiModel.findOneAndDelete({
      _id: new ObjectId(id)
    })

    return pegawai
  }
}
