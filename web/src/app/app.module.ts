import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import secret from 'src/secret';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppMiddleware } from './app.middleware';
import { AppService } from './app.service';

// !!! IMPORTANT !!! Try remove UserModule from imports because it already imported from AuthModule
@Module({
  imports: [MongooseModule.forRoot(secret.MONGODB), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes({
      path: '/',
      method: RequestMethod.GET,
    });
  }
}
