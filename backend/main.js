import express, { json } from "express";
import { createProductRouter } from "./routes/products.js";
import { createUserRouter } from "./routes/users.js";
import { corsMiddleware } from "./middleware/cors.js";
import { ProductModel } from "./models/mysql/product.js";
import { PaymentModel } from "./models/mysql/payment.js";
import { UserModel } from "./models/mysql/user.js";
import { createCategoryRouter } from "./routes/category.js";
import { createSearchRouter } from "./routes/search.js";
import { createPaymentRouter } from "./routes/payment.js";
import { PORT } from "./config.js";
//zod to validate the data of the request

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by"); //disable the header Express

app.use("/product", createProductRouter({ productModel: ProductModel }));
app.use("/user", createUserRouter({ userModel: UserModel }));
app.use("/category", createCategoryRouter({ productModel: ProductModel }));
app.use("/search", createSearchRouter({ productModel: ProductModel }));
app.use("/pay", createPaymentRouter({ paymentModel: PaymentModel }));

app.listen(PORT, () => {
  console.log("server");
});
