"use strict";
import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Product } from "../product/models.js";
const DataTypes = SQ.DataTypes;

const Price = sequelize.define("price", {
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
    allowNull: false,
  },
  interval_account: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: "recurring",
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

async function createPriceObject(
  price_id,
  currency,
  unit_amount,
  interval,
  productId
) {
  await Price.create({
    price_id,
    currency,
    unit_amount,
    interval,
    productId,
  });
  return getPriceObject(price_id);
}

function getPriceObject(id) {
  return Price.findOne({
    attributes: { exclude: ["type", "interval_account"] },
    where: {
      price_id: id,
    },
  });
}

export { Price, createPriceObject, getPriceObject };
