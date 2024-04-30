import mysql from "mysql2";
import { 
  DB_DATABASE, 
  DB_HOST, 
  DB_PASSWORD, 
  DB_PORT,
  DB_USER 
} from "../../config";

const config = {
  host: DB_HOST,
  user: DB_USER ,
  password: DB_PASSWORD,
  port:  DB_PORT,
  database: DB_DATABASE,
};

export const connection = mysql.createPool(config).promise();
