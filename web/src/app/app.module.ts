import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://moderator:BkZXcvijmacf0VMP@mangaobservercluster.ph08p.mongodb.net/mo_db?retryWrites=true&w=majority',
    ),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
