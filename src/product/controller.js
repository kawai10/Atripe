"use strict";

import * as product from "./models.js";
import { getCompanyIdFromApikey } from "../company/models.js";

async function createProduct(req, res) {
  const randomValue = Math.random().toString(36).split(".")[1];
  const id = "prod_" + randomValue;

  const apikey = req.get("API-key");
  const companyObect = await getCompanyIdFromApikey(apikey);
  const companyId = companyObect.id;
  const name = req.body.name;

  const productObject = await product.createProductObject(id, name, companyId);
  res.status(201).json(productObject);
}
async function getAllProduct(req, res) {
  const productObject = await product.getAllProductObject(req.body.companyId);
  res.status(200).json(productObject);
}

async function getProduct(req, res) {
  const productObject = await product.getProductObject(req.params.id);
  res.status(200).json(productObject);
}

async function updateProduct(req, res) {
  const { id, name, active } = req.body;
  const updatedProduct = await product.updateProductObject(id, name, active);
  res.status(200).json(updatedProduct);
}

function deleteProduct(req, res) {
  const id = req.params.id;
  if (id) {
    product.deleteOneProductObject(id);
    res.status(200).json({ message: `The ${id} remove successd` });
  } else {
    product.deleteAllProductObjet();
    res.status(200).json({ message: "All Customer are removed" });
  }
}
export {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
