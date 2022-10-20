import { IsEmail, IsString, Min } from "class-validator";

export class AuthDto{
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    password : string
}