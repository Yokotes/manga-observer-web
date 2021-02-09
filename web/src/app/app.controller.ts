/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('*')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPage(@Req() req: Request) {
    const url = req.url;

    return this.appService.getPage(url).trim();
  }
}
