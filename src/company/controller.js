import * as company from "./models.js"
import  {v4 as uuidv4} from "uuid"

async function createCompany(req, res){
    const key = createApikeys();
    const {id, email, password, name} = req.query;
    const companyObject = await company.createCompanyObject(id, email, password, key, name );
    res.status(201).json(companyObject);
}

async function getCompany(req, res){
    const {email, password} = req.query;
    const companyObject = await company.getCompanyObject(email, password);
    res.status(200).json(companyObject)
}

async function deleteCompany(req, res){
    const {email, password} = req.query;
    const companyObject = await company.deleteCompanyObject(email, password);
    if(companyObject == 1){
        res.status(200).json("Delete successd")
    } else {
        res.status(400).json("Invalid request parameters")
    }
    
}


function createApikeys() {
    const uuid = uuidv4();
    const APIKeys = 'Atripe_' + uuid
    return APIKeys
}


export {createCompany, getCompany, deleteCompany}