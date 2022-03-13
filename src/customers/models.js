import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Subscription } from "../subscribe/models.js";
const DataTypes = SQ.DataTypes;

const Customer = sequelize.define("customer", {
  id: {
    type: DataTypes.STRING(100),
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
  },
});

Customer.hasMany(Subscription, { as: "subscription" });

async function createCustomerObject(id, email, name, companyId) {
  await Customer.create({
    id,
    email,
    name,
    companyId,
  });
  return getCustomerObject(id);
}

function getAllCustomerObjects() {
  return Customer.findAll({
    order: [["createdAt", "DESC"]],
  });
}

function getCustomerObject(id) {
  return Customer.findOne({
    where: {
      id,
    },
  });
}

async function updateCustomerObject(id, email, name) {
  await Customer.update(
    {
      email: email,
      name: name,
    },
    {
      where: {
        id,
      },
    }
  );
  return getCustomerObject(id);
}

function deleteOneCustomerObject(id) {
  Customer.destroy({
    where: {
      id,
    },
  });
}

function deleteAllCustomerObject() {
  Customer.destroy({
    truncate: true,
  });
}

export {
  Customer,
  createCustomerObject,
  getAllCustomerObjects,
  getCustomerObject,
  deleteAllCustomerObject,
  deleteOneCustomerObject,
  updateCustomerObject,
};
