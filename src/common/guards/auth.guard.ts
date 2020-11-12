import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { throws } from 'assert';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // This function responsiable for validating the request it should return Boolen
  constructor(private authService: AuthService) {}

  async validateRequest(req) {
    console.log('This is AuthGuard ', req.body);
    const { username, password } = req.body;
    const currentUser = await this.authService.validateUser(username, password);
    req.user = currentUser;
    console.log({ currentUser });
    if (currentUser === null) {
      throw new HttpException(
        {
          status: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
          error: 'Username or password wrong!',
        },
        HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      );
    } else {
      return true;
    }
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
