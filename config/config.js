import dotenv from "dotenv"
dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || undefined
    if(value == null){
        throw new Error(`$key is undefined`)
    } else{
        return value
    }
}

export const config = {
    db : {
        host: required('DB_HOST'),
        user: required('DB_USER'),
        database: required('DB_DATABASE'),
        password: required('DB_PASSWORD'),
    },
    host : {
        port : parseInt(required('HOST_PORT', 8080))
    }
}