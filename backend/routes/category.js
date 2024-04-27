import { Router } from "express";
import { ProductController } from "../controller/products.js";

export const createCategoryRouter = ({ productModel }) => {
  const categoryRouter = Router();

  const categoryController = new ProductController({ productModel });

  //for the categoru of the products
  categoryRouter.get("/", categoryController.getCategoryAll);

  return categoryRouter;
};
