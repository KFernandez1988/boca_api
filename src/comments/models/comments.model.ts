import { DataTypes } from "sequelize";
import {Table, Column, Model, PrimaryKey} from "sequelize-typescript";


@Table
export class  CommentModel extends Model {

    
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
})
@PrimaryKey
id: string;

@Column
commnet: string;

}