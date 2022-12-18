import { Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";


@Table
export class logInModel extends Model {
    @Column
    id: string;
}