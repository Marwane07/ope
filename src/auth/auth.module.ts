import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'Entities/login.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStartegy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Login]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
    secret: "kksdnxjsqmsdkevvxxpmm%%SDECLDFQQSSDSAZZRRfr8rtf5z888",
    signOptions: {
      expiresIn: 3600
    }
  })

  ],
  controllers: [AuthController,
  ],
  providers: [
    AuthService,
    JwtStartegy
  ],
  exports: [
    JwtStartegy,
    PassportModule
  ],
})
export class AuthModule { }
