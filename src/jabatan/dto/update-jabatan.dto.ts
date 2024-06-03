import { IsBoolean, IsEmpty, IsString } from "class-validator"

export class UpdateJabatanDto {
    
    @IsString()
    jabatan: string

    @IsBoolean()
    status_aktif: boolean
    
    @IsEmpty()
    updated_by?: string
}
