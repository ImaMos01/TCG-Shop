import { connection } from "./connection.js";

export class UserModel {
  static async getAll() {
    const [products] = await connection.query(
      "SELECT BIN_TO_UUID(id) id, first_name, last_name, user_name FROM User"
    );
    return products;
  }

  static async getByUserName({ userName }) {
    try {
      const [user] = await connection.query(
        `SELECT BIN_TO_UUID(id) id, first_name, last_name, user_name FROM User WHERE user_name = ?`,
        [userName]
      );

      return user[0];
    } catch (e) {
      return null;
    }
  }
}
