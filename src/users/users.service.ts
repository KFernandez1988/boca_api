import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { InjectModel } from '@nestjs/sequelize';
import { LogInDTO } from 'src/auth/dto/login-auth.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModelDTO } from './dto/user.dto';
import { UserModel } from './models/users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(UserModel) private model: typeof UserModel){

  }



  async create(user: UserModelDTO) {
    return await this.model.create({
      name: user.name,
      email: user.email,
      username: user.username,
      password: user.password,
    });
  }

  async findAll() {
    return await this.model.findAll();
  }

  findOne(email: string) {
    return this.model.findOne({ where: {email}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
