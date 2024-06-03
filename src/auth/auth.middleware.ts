import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private userService: UsersService){}

  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;
    if (!token) {
      throw new HttpException('unauthorized',401)
    }
    
    next();
  }
}
