import express from "express";
import * as company from "./controller.js";
import {checkAPIKey} from "../../middleware/middleware.js";

export const companyRouter = express.Router();

//회원가입
companyRouter.post('/create', company.createCompany);
companyRouter.get('/retrieve', checkAPIKey ,company.getCompany);
companyRouter.post('/delete', checkAPIKey ,company.deleteCompany);



// TODO : password encryption