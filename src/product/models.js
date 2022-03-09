import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
const DataTypes = SQ.DataTypes;

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
  },
});
function getAllProductObject(companyId) {
  return Product.findAll({
    where: {
      companyId,
    },
  });
}

function getProductObject(id) {
  return Product.findOne({
    where: {
      id,
    },
  });
}

async function createProductObject(id, name, companyId) {
  await Product.create({
    id,
    name,
    companyId,
  });
  return getProductObject(id);
}

async function updateProductObject(id, name, active) {
  await Product.update(
    {
      active: active,
      name: name,
    },
    {
      where: {
        id,
      },
    }
  );
  return getProductObject(id);
}

function deleteOneProductObject(id) {
  Product.destroy({
    where: {
      id,
    },
  });
}

function deleteAllProductObjet() {
  Product.destroy({
    truncate: true,
  });
}

export {
  Product,
  getProductObject,
  getAllProductObject,
  createProductObject,
  updateProductObject,
  deleteAllProductObjet,
  deleteOneProductObject,
};
