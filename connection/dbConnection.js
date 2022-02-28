import {config} from "../config/config.js"
import SQ from "sequelize";


const {user, host, database, password} = config.db;
export const sequelize = new SQ.Sequelize(database,user, password, {
    host,
    dialect: 'postgres'
});