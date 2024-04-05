import express, { json } from "express";
import { createProductRouter } from "./routes/products.js";
import { corsMiddleware } from "./middleware/cors.js";
import { ProductModel } from "./models/mysql/product.js";
//zod to validate the data of the request

const app = express();
app.use(corsMiddleware());
app.disable("x-powered-by"); //disable the header Express

app.get("/product", createProductRouter({ productModel: ProductModel }));

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log("server");
});
