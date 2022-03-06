import express from "express";
import * as customer from "./controller.js";
import { checkAPIKey } from "../../middleware/middleware.js";

export const customerRouter = express.Router();

//고객 생성
customerRouter.post("/create", checkAPIKey, customer.createCustomer);

//고객 모두 조회
customerRouter.get("/retrieve", checkAPIKey, customer.getAllCustomers);

//특정 고객 조회
customerRouter.get("/retrieve/:id", checkAPIKey, customer.getCustomerbyId);

//고객 수정
// customerRouter.put('/update/:id', updateCustomer);
// TODO : update, delete 쿼리 수정하기
//모든 고객 삭제
customerRouter.delete("/delete", checkAPIKey, customer.deleteCustomer);

//특정 고객 삭제
customerRouter.delete("/delete/:id", checkAPIKey, customer.deleteCustomer);
