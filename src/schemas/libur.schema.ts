import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LiburDocument = HydratedDocument<Libur>;

@Schema({ collection: 'tm_libur', timestamps: true })
export class Libur {

  @Prop()
  tgl_libur: Date;

  @Prop()
  deskripsi: string;

  @Prop({ default: true })
  status_aktif: boolean;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;
  
}

export const LiburSchema = SchemaFactory.createForClass(Libur);