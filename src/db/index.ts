import { Sequelize } from "sequelize-typescript";
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
      dialect: dialect,
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
      },
      models: [Tutorial],
    });

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection established successfully!");
      })
      .catch((error) => {
        console.log("Unable to connect to database", error);
      });
  }
}

export default Database;
