import express from "express";
import * as customer from "./controller.js"
import { checkAPIKey } from "../../middleware/middleware.js";

export const customerRouter = express.Router();

// //고객 생성
customerRouter.post('/create', checkAPIKey ,customer.createCustomer);

//고객 모두 조회
customerRouter.get('/retrieve', checkAPIKey ,customer.getAllCustomers);

//특정 고객 조회
customerRouter.get('/:id', checkAPIKey ,customer.getCustomerbyId);

// //고객 수정
// customerRouter.put('/update/:id', updateCustomer);

// //고객 삭제
// customerRouter.delete('/delete/:id', deleteCustomer);