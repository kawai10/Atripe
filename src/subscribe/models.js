import SQ from "sequelize";
import { sequelize } from "../../connection/dbConnection.js";
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
});

export { Subscription };
