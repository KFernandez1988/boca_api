import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentModel } from './models/comments.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([CommentModel]), JwtModule],
  controllers: [CommentsController],
  providers: [CommentsService, JwtModule]
})
export class CommentsModule {}
