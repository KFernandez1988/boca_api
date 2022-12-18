import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserModelDTO } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LogInDTO } from './dto/login-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly serv: AuthService) {}

  @Post()
    signUp(@Body() cred: UserModelDTO) {
    return this.serv.create(cred);
  }

  @Post('/login')
  async logIn(@Body() cred: LogInDTO): Promise<string> {
    return this.serv.validateUser(cred);
  }

}
