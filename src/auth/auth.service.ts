import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from 'Entities/login.entity';
import { AuthDto } from 'src/dtoAuth/auth.dto';
import { Repository } from 'typeorm';
import { jwtPayload } from './jwt-payload-interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Login) private authRepo: Repository<Login>,
        private srvJWT: JwtService
    ) { }

    async login(body: AuthDto) {
        const check = await this.authRepo.count({ where: { email: body.email, password: body.password } });
        if (check != 1) {
            throw new UnauthorizedException('Invalid Credentials!')
        }
        const payload: jwtPayload = { email: body.email}
        const accessToken = await this.srvJWT.sign(payload)
        return { accessToken }
    }
}
