import { IsBoolean, IsDate, IsDateString, IsEmpty, IsString } from "class-validator"

export class CreateLiburDto {
    @IsDateString()
    tgl_libur: Date

    @IsString()
    deskripsi: string

    @IsEmpty()
    createdBy?: string
}
