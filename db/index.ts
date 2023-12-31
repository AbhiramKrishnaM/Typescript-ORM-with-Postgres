import { Sequelize } from "sequelize";
import { config, dialect } from "../config/db.config";
import Tutorial from "../models/tutorial.model";

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectDatabase();
  }

  private async connectDatabase() {
    this.sequelize = new Sequelize({
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
    });
  }
}

export default Database;
