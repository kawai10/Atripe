import express from "express";
import * as price from "./controller.js";
import { checkAPIKey } from "../../middleware/middleware.js";
export const priceRouter = express.Router();

//생성
priceRouter.post("/create", checkAPIKey, price.createPrice);
// product 의 모든 price 조회
priceRouter.get("/retrieves", checkAPIKey, price.retrieveAllPrice);
//조회
priceRouter.get("/retrieve", checkAPIKey, price.retrievePrice);

// 삭제
priceRouter.delete("/delete", checkAPIKey, price.deletePrice);
