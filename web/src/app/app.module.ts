import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import secret from 'src/secret';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot(secret.MONGODB), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
