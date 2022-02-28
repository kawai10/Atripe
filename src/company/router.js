import express from "express";
import {createCompany,loginCompany} from "./controller.js";

export const companyRouter = express.Router();

//회원가입
companyRouter.post('/create', createCompany);

//로그인
companyRouter.get('/login', loginCompany);