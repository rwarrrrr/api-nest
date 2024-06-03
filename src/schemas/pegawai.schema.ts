import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type PegawaiDocument = HydratedDocument<Pegawai>;
export type JabatanDocument = HydratedDocument<Jabatan>;

@Schema({ collection: 'tm_pegawai', timestamps: true })
export class Pegawai {

  @Prop()
  user_id: string;

  @Prop({ unique: true })
  kode_pegawai: string;

  @Prop()
  nama_pegawai: string;

  @Prop()
  tgl_lahir: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'tm_jabatan' })
  jabatan: string

  @Prop()
  hari_libur: string;

  @Prop()
  shift: number;

  @Prop()
  jam_istirahat: number;

  @Prop()
  jam_sholat: number;

  @Prop()
  jam_break: number;

  @Prop()
  jatah_cuti: number;

  @Prop()
  gaji_pokok: number;

  @Prop()
  tunjangan_jabatan: number;

  @Prop()
  kode_sales: string;

  @Prop()
  kode_toko: string;

  @Prop()
  pin: number;

  @Prop({default: true})
  status_aktif: boolean;

  @Prop()
  created_by: string;

  @Prop()
  updated_by: string;

}

@Schema({ collection: 'tm_jabatan', timestamps: true })
export class Jabatan {

  @Prop()
  jabatan: string;

  @Prop({default: true})
  status_aktif: boolean;
    
  @Prop()
  created_by: string;

  @Prop()
  updated_by: string;

}

export const PegawaiSchema = SchemaFactory.createForClass(Pegawai);
export const JabatanSchema = SchemaFactory.createForClass(Jabatan);