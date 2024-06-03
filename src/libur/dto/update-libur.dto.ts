import { IsBoolean, IsDate, IsDateString, IsEmpty, IsString } from "class-validator"

export class UpdateLiburDto {
    @IsDateString()
    tgl_libur: Date

    @IsString()
    deskripsi: string

    @IsBoolean()
    status_aktif: boolean

    @IsEmpty()
    updatedBy?: string
}
