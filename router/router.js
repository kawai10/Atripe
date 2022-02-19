import express, { application } from "express";
import companyRouter, { customersRouter, priceRouter, product, productRouter, subscribeRouter } from "../src/router.js"

export const atripeRouter = express.Router();

// 공통은 나중에 생각

// company
atripeRouter.use('/company', companyRouter);


// customer
atripeRouter.use('/customer', customersRouter);

// prices
atripeRouter.use('/price', priceRouter);
// product
atripeRouter.use('/product', productRouter);
// subscribe
atripeRouter.use('/subscribe', subscribeRouter);
// 회원가입
// 로그인
// 