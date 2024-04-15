import { Router } from "express";
import { ProductController } from "../controller/products.js";

export const createCategoryRouter = ({ productModel }) => {
  const categoryRouter = Router();

  const categoryController = new ProductController({ productModel });

  categoryRouter.get("/", categoryController.getCategoryAll);

  return categoryRouter;
};
