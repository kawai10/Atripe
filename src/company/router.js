import express from "express";
import * as company from "./controller.js";
import { checkAPIKey } from "../../middleware/middleware.js";

export const companyRouter = express.Router();

//회원가입
companyRouter.post("/create", company.createCompany);
companyRouter.get("/retrieves", company.getAllCompany);
companyRouter.get("/retrieve", company.getCompany);
companyRouter.post("/delete", checkAPIKey, company.deleteCompany);

// TODO : password encryption
