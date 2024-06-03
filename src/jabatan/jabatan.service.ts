import { Injectable } from '@nestjs/common';
import { CreateJabatanDto } from './dto/create-jabatan.dto';
import { UpdateJabatanDto } from './dto/update-jabatan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jabatan } from 'src/schemas/pegawai.schema';
import { ObjectId } from 'mongodb';

@Injectable()
export class JabatanService {
  constructor(@InjectModel('Jabatan') private jabatanModel: Model<Jabatan>) {}

  create(createJabatanDto: CreateJabatanDto) {
    const createdJabatan = new this.jabatanModel(createJabatanDto);
    return createdJabatan.save();
  }

  findAll() {
    const jabatans = this.jabatanModel.find();
    return jabatans;
  }

  findOne(id: string) {
    const jabatans = this.jabatanModel.findOne({
      _id: new ObjectId(id)
    })

    return jabatans
  }

  update(id: string, updateJabatanDto: UpdateJabatanDto) {
    const jabatans = this.jabatanModel.findOneAndUpdate({
      _id: new ObjectId(id),
    }, updateJabatanDto, {
      new: true
    })

    return jabatans
  }

  remove(id: string) {
    const jabatans = this.jabatanModel.findOneAndDelete({
      _id: new ObjectId(id)
    })

    return jabatans
  }
}
