import express from "express";
import {companyRouter} from "../src/company/router.js"
import {customerRouter} from "../src/customers/router.js"
import {priceRouter} from "../src/prices/router.js"
import {productRouter} from "../src/product/router.js"
import {subscribeRouter} from "../src/subscribe/router.js"


export const atripeRouter = express.Router();

// 공통은 나중에 생각

// company
atripeRouter.use('/company', companyRouter);
// customer
atripeRouter.use('/customer', customerRouter);
// prices
atripeRouter.use('/price', priceRouter);
// product
atripeRouter.use('/product', productRouter);
// subscribe
atripeRouter.use('/subscribe', subscribeRouter);