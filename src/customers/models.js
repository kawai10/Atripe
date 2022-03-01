import SQ from "sequelize"
import {sequelize} from "../../connection/dbConnection.js"
const DataTypes = SQ.DataTypes;

const Customer = sequelize.define('customer', {
    id : {
        type : DataTypes.STRING(100),
        primaryKey : true,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING(50),
        unique : true,
        allowNull : false,
        validate : {
            isEmail : true
        }
    },
    name : {
        type : DataTypes.STRING(20),
        allowNull : false,
    },
    createdAt : {
        type : DataTypes.DATEONLY
    },
    updatedAt : {
        type : DataTypes.DATEONLY
    }
})

async function createCustomerObject(id, email, name, companyId){
    // TODO : change variable name
    const data = await Customer.create({
        id,
        email,
        name,
        companyId
    });
    return getCustomerObject(id)
}

function getAllCustomerObjects(){
    return Customer.findAll({
        order : [['createdAt', 'DESC']]
    })
}

function getCustomerObject(id){
    return Customer.findOne({
        where : {
            id
        }
    })
}


export {Customer, createCustomerObject, getAllCustomerObjects, getCustomerObject}