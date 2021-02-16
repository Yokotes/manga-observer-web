import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/ignore')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
