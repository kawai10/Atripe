import express from "express";
import { validateApiKey } from "../src/company/models.js";

export async function checkAPIKey(req, res, next) {
  // TODO : change variable name
  const APIKey = req.get("API-key");
  const validateKey = await validateApiKey(APIKey);
  if (validateKey == null) {
    res.status(401).json("Wrong API Key");
  } else {
    next();
  }
}
