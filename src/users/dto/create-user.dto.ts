import { IsEmpty, IsEnum, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmpty()
    role: string;

    @IsEmpty()
    active?: string;

    @IsEmpty()
    createdBy?: string;

    @IsEmpty()
    createdAt?: Date;
}
