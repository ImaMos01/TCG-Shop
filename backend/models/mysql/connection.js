import mysql from "mysql2";

const config = {
  host: "127.0.0.1",
  user: "root",
  password: "ImaMos01",
  port: 3306,
  database: "tcgShop",
};

export const connection = mysql.createPool(config).promise();
