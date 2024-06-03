import { IsDateString, IsEmpty, IsNumber, IsString } from "class-validator"

export class CreatePegawaiDto {
    @IsString()
    user_id:string

    @IsString()
    kode_pegawai:string

    @IsString()
    nama_pegawai:string

    @IsDateString()
    tgl_lahir:Date

    @IsString()
    jabatan:string

    @IsString()
    hari_libur:string

    @IsNumber()
    shift:number

    @IsNumber()
    jam_istirahat:number

    @IsNumber()
    jam_sholat:number

    @IsNumber()
    jam_break:number

    @IsNumber()
    jatah_cuti:number

    @IsNumber()
    gaji_pokok:number

    @IsNumber()
    tunjangan_jabatan:number
    
    @IsString()
    kode_sales:string

    @IsString()
    kode_toko:string

    @IsNumber()
    pin:number

    @IsEmpty()
    created_by?:string
}
