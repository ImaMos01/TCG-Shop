import { validateProduct } from "../schema/product.js";

export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel;
  }

  getAll = async (req, res) => {
    const prod = await this.productModel.getAll();
    if (prod) return res.json(prod);
    res.status(404).json({ message: "Product not found" });
  };

  getByCategory = async (req, res) => {
    const { category } = req.params;
    const products = await this.productModel.getByCategory({ category });
    if (products) return res.json(products);
    res.status(404).json({ message: "Product not found" });
  };
  /*
  postAll = async (req, res) => {
    const result = validateProduct(req.body);
    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }
  };
  */
}
