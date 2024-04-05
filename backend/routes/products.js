import { Router } from "express";
import { ProductModel } from "../models/mysql/product.js";
import { ProductController } from "../controller/products.js";

export const createProductRouter = ({ productModel }) => {
  const productRouter = Router();

  const productController = new ProductController({ productModel });

  productRouter.get("/", productController.getAll);

  productRouter.get("/:id", (res, req) => {});

  productRouter.delete("/:id", (req, res) => {});

  return productRouter;
};
