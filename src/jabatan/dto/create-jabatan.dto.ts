import { IsEmpty, IsString } from "class-validator"

export class CreateJabatanDto {
    @IsString()
    jabatan: string
    
    @IsEmpty()
    created_by?: string
}
