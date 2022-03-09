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

function getProductObject(id) {
  return Product.findOne({
    where: {
      id,
    },
  });
}

async function createProductObject(id, name) {
  await Product.create({
    id,
    name,
  });
  return getProductObject(id);
}

function updateProductObject(id, active, name) {
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
