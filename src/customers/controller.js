import * as customer from "./models.js";
import { v4 as uuidv4 } from "uuid";

async function createCustomer(req, res) {
  const uuid = uuidv4();
  const id = uuid.replace("-", "").substring(0, 12);
  const { email, name, companyId } = req.body;
  const customerObject = await customer.createCustomerObject(
    id,
    email,
    name,
    companyId
  );
  res.status(201).json(customerObject);
}

async function getAllCustomers(req, res) {
  const customerObjects = await customer.getAllCustomerObjects();
  res.status(200).json(customerObjects);
}

async function getCustomerbyId(req, res) {
  const id = req.params.id;
  const customerObject = await customer.getCustomerObject(id);
  res.status(200).json(customerObject);
}

async function deleteCustomer(req, res) {
  const id = req.params.id;
  if (id) {
    await customer.deleteOneCustomerObject(id);
    res.status(200).json({ message: `The ${id} remove successd` });
  } else {
    await customer.deleteAllCustomerObject();
    res.status(200).json({ message: "All Customer are removed" });
  }
}

export { createCustomer, getAllCustomers, getCustomerbyId, deleteCustomer };
