import { Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";


@Table
export class AuthModel extends Model {
    @Column
    user: string;

    @Column
    logTime: string;
}
