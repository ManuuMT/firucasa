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
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specie: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ageYears: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ageMonths: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
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
