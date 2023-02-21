import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "firucasadb",
  "root",
  "manucitokarting1234_",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);
