import { Model, Column, Table, DataType } from "sequelize-typescript";

@Table({
  tableName: "tutorials",
})
export default class Tutorial extends Model {}
