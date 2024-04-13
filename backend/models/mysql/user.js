import { connection } from "./connection.js";
import bcrypt from "bcrypt";

export class UserModel {
  static async getAll() {
    const [products] = await connection.query(
      "SELECT BIN_TO_UUID(id) id, first_name, last_name, user_name, mail FROM User"
    );
    return products;
  }

  static async getByUserName({ userName }) {
    try {
      const [user] = await connection.query(
        `SELECT BIN_TO_UUID(id) id, first_name, last_name, user_name, mail, password FROM User WHERE user_name = ?`,
        [userName]
      );

      return user[0];
    } catch (error) {
      return null;
    }
  }

  static async hashPassword(password) {
    const saltRounds = 10;
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password.toString(), salt);
      return hash;
    } catch (error) {
      console.error(error.message);
    }
  }

  static async createUser({ input }) {
    const { fName, lName, uName, mail, password } = input;
    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;
    //hash the password
    const newPassword = await this.hashPassword(password);

    try {
      await connection.query(
        `INSERT INTO User (id, first_name, last_name, user_name, mail, password) VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?);`,
        [fName, lName, uName, mail, newPassword]
      );
      return { message: "success" };
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
