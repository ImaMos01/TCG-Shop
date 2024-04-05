import { ProductModel } from "../models/mysql/product.js";
import { validateProduct } from "../schema/product.js";

export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel;
  }
  getAll = async (req, res) => {
    const { category } = req.query;
    const prod = await ProductModel.getAll({ category });
  };
  postAll = async (req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }
  };
}
