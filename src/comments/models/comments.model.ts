import { InjectModel } from "@nestjs/sequelize";
import { DataTypes } from "sequelize";
import {Table, Column, Model, PrimaryKey, HasOne} from "sequelize-typescript";


@Table
export class  CommentModel extends Model {
 
  @PrimaryKey
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  })
  id: string

  @Column
  blogId:string


  @Column
  userId:string

  @Column
  comment:string
}