import { connection } from "./connection.js";

export class PaymentModel {
  static async addItemCart(input) {
    const { productId, orderId, quantity, stock, total_price } = input;

    let finalStock = stock - quantity;
    if (finalStock <= 0) finalStock = 0;

    try {
      //add to the item cart
      await connection.query(
        "INSERT INTO Cart_Item (product_id, order_id, quantity, total_price ) VALUES (UUID_TO_BIN(?),UUID_TO_BIN(?),?,?);",
        [productId, orderId, quantity, total_price]
      );
      //update the stock of the product
      await connection.query(
        "UPDATE Product SET stock = ? WHERE BIN_TO_UUID(id) = ?",
        [finalStock, productId]
      );
      return { message: "success" };
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async payment(input) {
    const { userId, totalPrice } = input;
    const [uuidResult] = await connection.query("SELECT UUID() uuid;");
    const [{ uuid }] = uuidResult;

    //create a order detail to the user
    await connection.query(
      `INSERT INTO Order_Details (id, id_user, total_price) VALUES (UUID_TO_BIN("${uuid}"),UUID_TO_BIN("${userId}"),?);`,
      [totalPrice]
    );

    try {
      const [order] = await connection.query(
        "SELECT BIN_TO_UUID(id) id, BIN_TO_UUID(id_user) id_user, total_price, created_at FROM Order_Details WHERE BIN_TO_UUID(id_user) = ? GROUP BY id ORDER BY created_at DESC;",
        [userId]
      );
      return order[0];
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async orderHistory({ id }) {
    try {
      //view all orders
      const [orderList] = await connection.query(
        "SELECT BIN_TO_UUID(Order_Details.id) AS id, User.first_name, total_price, created_at FROM Order_Details INNER JOIN User ON Order_Details.id_user = User.id WHERE BIN_TO_UUID(Order_Details.id_user) = ? GROUP BY id ORDER BY created_at DESC;",
        [id]
      );
      return orderList;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static async viewOrder({ id }) {
    try {
      //view a specific order
      const [vOrder] = await connection.query(
        "SELECT Product.title, quantity, total_price FROM Cart_Item INNER JOIN Product ON Product.id = Cart_Item.product_id WHERE BIN_TO_UUID(Cart_Item.order_id) = ?;",
        [id]
      );
      return vOrder;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }
}
