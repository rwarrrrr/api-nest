import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from './role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private refrelector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //getHandler -> function yg sedang di eksekusi
    const roles: string[] = this.refrelector.get(Roles, context.getHandler())

    if(!roles){
      return true
    }

    const {cookies} = context.switchToHttp().getRequest();
      
    return roles.indexOf(cookies.role) != -1;
  }
}
