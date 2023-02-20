import { Sequelize } from "sequelize";
// import Dog from "../models/dogs.models";
// import User from "../models/users.model";

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

// Injectamos la conexion (sequelize) a todos los modelos
// [Dog, User].forEach(model => model(sequelize));

// Employees.belongsTo(Sectors, { foreignKey: "sectorId", as: "sector" });
// Sectors.hasMany(Employees, { as: "employee" });
