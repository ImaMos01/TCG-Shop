//logica de negocios
import { randomUUID } from "node:crypto";

export class ProductModel {
  static getAll({ products }) {}
  static async create({ input }) {
    const { title, category, price } = input;

    const [uuidResult] = await Connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;
    try {
      await Connection.query(
        `INSERT INTO product (id,title,category,price) VALUES (UUID_TO_BIN("${uuid}"),?,?,?);`,
        [title, category, price]
      );
    } catch (e) {
      throw new Error("Error creating product");
    }
  }
}
