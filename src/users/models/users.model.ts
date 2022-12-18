import { DataTypes } from "sequelize";
import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table
export class UserModel extends Model {
    
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    })
    id: string;

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        validate: {
            isEmail: {
                msg: "please enter valid email"
            },
            len: [5, 20],
        }
    })
    email: string

    @Column({
        allowNull: false
    })
    password: string


}