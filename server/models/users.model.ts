import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("firucasadb", "root", "manucitokarting1234_", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// export enum UserRol {
//   Admin = "Admin",
//   Owner = "Owner",
//   Adopter = "Adopter",
// }

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
