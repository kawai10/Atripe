"use strict";
import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Subscription } from "../subscribe/models.js";
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
    defaultValue: 0,
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

Price.hasMany(Subscription);

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
    where: {
      price_id: id,
    },
  });
}

function getPriceObjectByProductId(productId) {
  return Price.findAll({
    where: {
      productId,
    },
  });
}

function deleteOneObject(price_id) {
  Price.destroy({
    where: { price_id },
  });
}

function deleteAllObject(productId) {
  Price.destroy({
    where: { productId },
  });
}

export {
  Price,
  createPriceObject,
  getPriceObject,
  getPriceObjectByProductId,
  deleteAllObject,
  deleteOneObject,
};
