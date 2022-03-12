"use strict";
import * as price from "./models.js";

async function createPrice(req, res) {
  // TODO : currency and interval check
  const randomValue = Math.random().toString(36).split(".")[1];
  const price_id = "price_" + randomValue;
  const { currency, unit_amount, interval, productId } = req.body;
  const priceObject = await price.createPriceObject(
    price_id,
    currency,
    unit_amount,
    interval,
    productId
  );
  res.status(201).json(priceObject);
}

async function retrievePrice(req, res) {
  const price_id = req.body.price_id;
  const priceObject = await price.getPriceObject(price_id);
  res.status(200).json(priceObject);
}

async function retrieveAllPrice(req, res) {
  const productId = req.body.productId;
  const productObject = await price.getPriceObjectByProductId(productId);
  res.status(200).json(productObject);
}

export { createPrice, retrievePrice, retrieveAllPrice };
