import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import BlogsController from './blogs.controller';
import { BlogsModel } from './blogs.model';
import BlogsService from './blogs.service';



@Module({
  // imports: [SequelizeModule.forFeature([BlogsModel])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
