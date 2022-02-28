import * as company from "./models.js"
import  {v4 as uuidv4} from "uuid"

export async function createCompany(req, res){
    const key = createApikeys();
    const {id, email, password, name} = req.query
    const companyObject = await company.createCompanyObject(id, email, password, key, name )
    res.status(201).json(companyObject);
}


export function loginCompany(req, res){
    res.send("get hihi")
}


function createApikeys() {
    const uuid = uuidv4();
    const APIKeys = 'Atripe_' + uuid
    return APIKeys
}