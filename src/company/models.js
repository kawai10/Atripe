import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Customer } from "../customers/models.js";
const DataTypes = SQ.DataTypes;

// 테이블 정의
const Company = sequelize.define("company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  key: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true,
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
Company.hasMany(Customer, { as: "customer" });

async function createCompanyObject(id, email, password, key, name) {
  // TODO : change variable name
  await Company.create({
    id,
    email,
    password,
    key,
    name,
  });
  return getCompanyObject(email, password);
}

function getCompanyObject(email, password) {
  return Company.findOne({
    attributes: { exclude: ["password"] },
    where: {
      email,
      password,
    },
  });
}

function deleteCompanyObject(email, password) {
  return Company.destroy({
    where: {
      email,
      password,
    },
  });
}

function validateApiKey(key) {
  return Company.findOne({
    where: {
      key,
    },
  });
}

export {
  createCompanyObject,
  getCompanyObject,
  validateApiKey,
  deleteCompanyObject,
};
