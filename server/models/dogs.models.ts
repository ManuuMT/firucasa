import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

class Dog extends Model {}

Dog.init(
  {
    dog_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dog_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Dog",
  }
);

// Dog.belongsTo(User);
// User.hasMany(Dog);

// Employees.belongsTo(Sectors, {foreignKey:"sectorId", as:"sector"});
// Sectors.hasMany(Employees, {as: "employee"})

export default Dog;
