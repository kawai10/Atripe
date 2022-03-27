import * as subscription from "./models.js";
import { v4 as uuidv4 } from "uuid";
import { getPriceObject } from "../prices/models.js";
async function createSubscriptionObject(req, res) {
  const uuid = uuidv4();
  const id = uuid.replace("-", "").substring(0, 12);
  const sub_id = `sub_${id}`;
  const { customer_id, pricePriceId } = req.body;
  const subscriptionObject = await subscription.createSubscription(
    sub_id,
    customer_id,
    pricePriceId
  );
  const priceObject = await getPriceObject(pricePriceId);
  subscriptionObject.push(priceObject);
  res.status(201).json(subscriptionObject);
}

export { createSubscriptionObject };
