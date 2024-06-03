import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './enum/role.guard';
import { AuthMiddleware } from './auth/auth.middleware';
import { LiburModule } from './libur/libur.module';
import { JabatanModule } from './jabatan/jabatan.module';
import { PegawaiModule } from './pegawai/pegawai.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/naga'),UsersModule, AuthModule, LiburModule, JabatanModule, PegawaiModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RoleGuard
    }],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '/api/*',
      method: RequestMethod.ALL
    })
  }
}
