import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class BlogsModel extends Model {
  
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
})
  id: string;

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
})
  userId: string;

  @Column
  title: string;

  @Column
  blog: string;

}