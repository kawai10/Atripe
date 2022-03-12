import express from "express";
import * as price from "./controller.js";
import { checkAPIKey } from "../../middleware/middleware.js";
export const priceRouter = express.Router();

//생성
priceRouter.post("/create", checkAPIKey, price.createPrice);
// //모두 조회
// priceRouter.get('/prices', getAllPrices);
// //조회
// priceRouter.get('/price/:id', getPrice);
// //수정
// priceRouter.put('/update/:id', updatePrice);
// //삭제
// priceRouter.delete('delete/:id', deletePrice);
