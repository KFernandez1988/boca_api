import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { BlogsModel } from 'src/blogs/blogs.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentModel } from './models/comments.model';

@Injectable()
export class CommentsService {

  constructor(
    @InjectModel(CommentModel) private model: typeof CommentModel,
    private jwtServ: JwtService
    ) {

 }

  async create(_comment: CreateCommentDto, token: any) {
   const { blogId, comment } = _comment;
   console.log("from create serv comment", token)
    const { id  } = this.jwtServ.verify(token, {
      secret: "testing",
    })
    console.log("from create serv comment", id)
    return await this.model.create({ userId: id, blogId, comment}).catch(err => { console.log("creating comment fail", err)});
  }

  async findAll(blogId: string) {
    return this.model.findAll({ where: { blogId}});
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
