import express from "express";
import * as product from "./controller.js";
import { checkAPIKey } from "../../middleware/middleware.js";

export const productRouter = express.Router();

//상품 생성
productRouter.post("/create", checkAPIKey, product.createProduct);

//모든 상품 조회
productRouter.get("/retrieves", checkAPIKey, product.getAllProduct);

//특정 상품 조회
productRouter.get("/retrieve/:id", checkAPIKey, product.getProduct);

//상품 수정
productRouter.delete("/update", checkAPIKey, product.updateProduct);

//상품 삭제
productRouter.delete("/delete", checkAPIKey, product.deleteProduct);

productRouter.delete("/delete/:id", checkAPIKey, product.deleteProduct);
