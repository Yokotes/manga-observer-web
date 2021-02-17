import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/user/auth/auth.module';
import secret from 'src/secret';
import { AppController } from './app.controller';
import { AppMiddleware } from './app.middleware';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(secret.MONGODB), AuthModule],
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
