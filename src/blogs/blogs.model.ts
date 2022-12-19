import { Column, DataType, Model, PrimaryKey, Table, HasMany } from 'sequelize-typescript';
import { CommentModel } from 'src/comments/models/comments.model';


@Table
export class BlogsModel extends Model {
  
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
})
  id: string;

  @Column
  userId: string;

  @Column
  title: string;

  @Column
  blog: string;

}