import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AppService } from './app.service';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  constructor(private appService: AppService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const api = req.url.includes('api');

    if (!api) {
      return res.send(this.appService.getPage(req.url).trim());
    }

    next();
  }
}
