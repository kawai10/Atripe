import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
import { Price } from "../prices/models.js";
const DataTypes = SQ.DataTypes;

const Subscription = sequelize.define("subscription", {
  sub_id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
  },
  updatedAt: {
    type: DataTypes.DATEONLY,
  },
  customer_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Subscription.belongsTo(Price, { as: "price", foreignKey: "price_id" });

async function createSubscription(sub_id, customer_id, pricePriceId) {
  await Subscription.create({
    sub_id,
    customer_id,
    pricePriceId,
  });
  return getSubscriptionObject(sub_id);
}

function getSubscriptionObject(sub_id) {
  return Subscription.findAll({
    where: {
      sub_id,
    },
  });
}

export { Subscription, createSubscription };
