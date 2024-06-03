import { IsBoolean, IsEmpty, IsEnum, IsString } from "class-validator";


export class UpdateUserDto {
    
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEnum( ['admin', 'user'] )
    role: string;

    @IsBoolean()
    active: string;

    @IsEmpty()
    updatedBy?: string;

    @IsEmpty()
    updatedAt?: Date;
}
