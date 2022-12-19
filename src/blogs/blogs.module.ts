import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import BlogsController from './blogs.controller';
import { BlogsModel } from './blogs.model';
import BlogsService from './blogs.service';



@Module({
  imports: [SequelizeModule.forFeature([BlogsModel]), JwtModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
