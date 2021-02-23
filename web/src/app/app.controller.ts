import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import UserDto from 'src/dto/user.dto';
import { AuthService } from 'src/user/auth/auth.service';
import { AppService } from './app.service';

@Controller('api/v1')
export class AppController {
  constructor(
    private appService: AppService,
    private authService: AuthService,
  ) {}

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  getJwt(@Req() req: Request) {
    return this.authService.login(req.user as UserDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getUser(@Req() req: Request) {
    return req.user;
  }
}
