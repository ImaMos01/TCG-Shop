import express, { json } from "express";
import { createProductRouter } from "./routes/products.js";
import { createUserRouter } from "./routes/users.js";
import { corsMiddleware } from "./middleware/cors.js";
import { ProductModel } from "./models/mysql/product.js";
import { UserModel } from "./models/mysql/user.js";
//zod to validate the data of the request

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by"); //disable the header Express

app.use("/product", createProductRouter({ productModel: ProductModel }));
app.use("/user", createUserRouter({ userModel: UserModel }));

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log("server");
});
