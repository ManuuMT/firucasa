import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";
import User from "./users.model";

class Dog extends Model {}

Dog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Dog",
  }
);

Dog.belongsTo(User);
User.hasMany(Dog);

export default Dog;
