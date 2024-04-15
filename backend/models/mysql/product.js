import { connection } from "./connection.js";

export class ProductModel {
  static async getAll() {
    //obtain all the products
    const [products] = await connection.query(
      "SELECT BIN_TO_UUID(id) id, title, price, type, img_URL, stock, discount, category_id FROM Product;"
    );
    return products;
  }

  static async getProducts(column, value) {
    //function to get the products by a column name and its value
    try {
      const [products] = await connection.query(
        `SELECT BIN_TO_UUID(Product.id) AS id, Product.title, Product.price, Product.type, Product.img_URL, Product.stock, Product.discount, Category.name 
          FROM Product INNER JOIN Category ON Product.category_id = Category.id WHERE ${column} = ?;`,
        [value]
      );
      console.log(products);
      return products;
    } catch (e) {
      return null;
      //throw new Error("Error fetching product");
    }
  }

  static async getByCategory({ category }) {
    // Logic to get the products by category name

    try {
      //find the category id by the name of the param of the request
      const [category_id] = await connection.query(
        "SELECT id FROM Category WHERE path_name = ?;",
        [category]
      );
      const [{ id }] = category_id;

      //find the products by id of the category
      const product = await this.getProducts("Product.category_id", id);
      return product;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
  static async getById({ id }) {
    // Logic to get a product by its id
    try {
      const [product] = await connection.query(
        `SELECT BIN_TO_UUID(id) id, title, price, type, img_URL, stock, discount, category_id FROM Product WHERE id = UUID_TO_BIN(?);`,
        [id]
      );
      return product[0];
    } catch (e) {
      return null;
    }
  }

  static async getCategoryAll() {
    // Logic to get all category table
    try {
      const [category] = await connection.query(
        `SELECT id, name, description, img_URL, img_URL_carrousel, path_name FROM Category;`
      );
      return category;
    } catch (e) {
      return null;
    }
  }
}
