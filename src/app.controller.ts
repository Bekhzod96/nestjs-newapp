import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './common/guards/auth.guard';
import { User } from './common/decorators/user.decorator';
import { JwtAuthGuard } from './auth/jwt-auth-guard';

@Controller()
// @UseGuards(LocalAuthGuard)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(AuthGuard)
  @Post('auth/login')
  async login(@User() user) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    console.log(req.headers.authorization);
    return req.user;
  }
}
