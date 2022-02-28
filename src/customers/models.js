import SQ from "sequelize"
import {sequelize} from "/Users/cloudike/Desktop/node/Atripe/connection/dbConnection.js"
const DataTypes = SQ.DataTypes;

const Customer = sequelize.define('customer', {
    id : {
        type : DataTypes.STRING(100),
        primaryKey : true,
        allowNull : false,
    },
    company_id : {
        type : DataTypes.INTEGER,
        references : {
            model : 'companys',
            key : 'id'
        }
    },
    email : {
        type : DataTypes.STRING(50),
        unique : true,
        allowNull : false,
    },
    name : {
        type : DataTypes.STRING(20),
        allowNull : false,
    }
})