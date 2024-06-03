import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';
import { Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    @Post('login')
    async login(@Body() dto: authDto, @Res({passthrough: true}) res: Response) {
        const user = await this.authService.login(dto)
        res.header("Access-Control-Allow-Origin", "*")
        res.cookie('username', user.username)
        res.cookie('role', user.role)
        res.status(200).json(user)
    }

    
    @Post('register')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

}
