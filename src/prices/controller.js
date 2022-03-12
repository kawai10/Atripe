"use strict";
import * as price from "./models.js";

async function createPrice(req, res) {
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

export { createPrice };
