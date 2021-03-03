import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import secret from 'src/secret';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret.JWTSECRET,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findOneById(payload.sub);
    return { name: payload.name, _id: payload.sub, img: user.img };
  }
}
