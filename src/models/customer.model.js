import { Model, DataTypes } from "sequelize";
import sequelize from "../db/db.connection.js";

class CustomerModel extends Model {}

CustomerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue:"PANDING"
    },
    rate: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    deposite: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, timestamps: false, modelName: "customer" }
);
export default CustomerModel;