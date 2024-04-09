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
        `SELECT BIN_TO_UUID(id) id, title, price, type, img_URL, stock, discount, category_id FROM Product WHERE ${column} = ?;`,
        [value]
      );
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
      const product = this.getProducts("category_id", id);
      return product;
    } catch (e) {
      return null;
    }
  }
  /*
  static async create({ input }) {
    const { title, category, price } = input;

    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;
    try {
      await connection.query(
        `INSERT INTO Product (id, title, price, type, img_URL, stock, category_Id, discount_Id) VALUES (UUID_TO_BIN("${uuid}"),?,?,?,?,?,?,?);`,
        [title, category, price]
      );
    } catch (e) {
      throw new Error("Error creating product");
    }
  }
  */
}
