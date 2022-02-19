import pg from "pg";
import {config} from "../config/config.js"


const {user, host, database, password, port} = config.db;
const db = new pg({
    user : user,
    host : host,
    database : database,
    password : password,
    port : port
});

const client = new pg.Client(db)

client.connect(err => {
    if(err){
        console.log(err)
    } else{
        console.log("데이터베이스 연결 성공")
    }
});