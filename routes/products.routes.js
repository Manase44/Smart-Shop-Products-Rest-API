import { Router } from "express";
import getAllProducts from "../controllers/getAllProducts.controller.js";
import getSingleProduct from "../controllers/getSingleProduct.conroller.js";
import createProduct from "../controllers/createProduct.controller.js";
import updateProduct from "../controllers/updateProduct.controller.js";
import deleteProduct from "../controllers/deleteProduct.conroller.js";

const route = Router();

route
  .get("/", getAllProducts)
  .get("/:id", getSingleProduct)
  .post("/", createProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default route;
