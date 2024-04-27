import { Router } from "express";
import { ProductController } from "../controller/products.js";

export const createSearchRouter = ({ productModel }) => {
  const searchRouter = Router();

  const productController = new ProductController({ productModel });

  //for the search bar
  searchRouter.get("/:input", productController.searchProduct);

  return searchRouter;
};
