import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import * as expressReactViews from 'express-react-views';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(resolve(__dirname, 'layouts'));
  app.set('view engine', 'js');
  app.engine('js', expressReactViews.createEngine());

  await app.listen(3000);
}
bootstrap();
