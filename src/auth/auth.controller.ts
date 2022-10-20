import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from 'src/dtoAuth/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private srv: AuthService) { }
    @Post()
    login(@Body() body: AuthDto) {
        return this.srv.login(body)
    }
}
