import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Product } from "../product/models.js";
const DataTypes = SQ.DataTypes;

export const Price = sequelize.define("price", {
  price_id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  currency: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
  interval: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  interval_account: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  unit_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
  },
});
