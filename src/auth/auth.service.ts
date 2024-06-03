import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { authDto } from './dto/auth.dto';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async login (dto: authDto) {
        const user = await this.usersService.findByUsername(dto.username)
        
        if(user && (await compare(dto.password, user.password))) {
            const {password, ...result} = user.toObject()
            const payload = {userId: user._id}
            return {
                ...result,
                acces_token: this.jwtService.sign(payload)
            }
        }
        throw new UnauthorizedException()
    }

}
