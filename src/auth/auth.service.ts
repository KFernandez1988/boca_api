import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserModelDTO }  from '../users/dto/user.dto';
import { LogInDTO } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private serv: UsersService,
    private jwtServ: JwtService
    ) {
  }

  async create(cred: UserModelDTO) {
    const { password } = cred;
    console.log("cred in service", cred)
    try {


        const hash = await bcrypt.hash(password, 12)
        
            
          cred.password = hash

      console.log("cred in service after hash", cred)
      const newUser = await this.serv.create(cred)

      return {
        success: true,
      }

    } catch(err) {
      console.error("Got error on created user", err);
    }

  }


  async validateUser(login: LogInDTO) {
    const { email, password } = login;
    try {
      const user = await this.serv.findOne(email)

      if(bcrypt.compare(password, password)) {
        return await this.jwtServ.sign({id: user.id}, {
          secret: "testing",
            expiresIn: '1d',
        });
      }


    } catch(error) {
       console.error("error appear creating toke", error);
    }
    
  }

}
