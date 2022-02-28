import SQ from "sequelize"
import {sequelize} from "../../connection/dbConnection.js"
const DataTypes = SQ.DataTypes;

// 테이블 정의
const Company = sequelize.define('company', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false,
    },
    email : {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull : false,
    },
    password : {
        type: DataTypes.STRING(50),
        allowNull : false,
    },
    key : {
        type: DataTypes.STRING(100),
        allowNull : true,
        unique : true,
    },
    name : {
        type : DataTypes.STRING(20),
        allowNull : false
    }
})

async function createCompanyObject(id, email, password, key, name){
    return Company.create({
        id,
        email,
        password,
        key,
        name,
    }).then(data => this.getCompanyObjectById(data.id))
}

async function getCompanyObjectById(id){
    return Company.findOne({
        where : {
            id
        }
    })
}

export {createCompanyObject, getCompanyObjectById}
