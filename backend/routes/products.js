import { Router } from "express";
import { ProductController } from "../controller/products.js";

export const createProductRouter = ({ productModel }) => {
  const productRouter = Router();

  const productController = new ProductController({ productModel });

  productRouter.get("/", productController.getAll);
  productRouter.get("/:category", productController.getByCategory);
  productRouter.get("/:category/:id", productController.getById);

  return productRouter;
};
