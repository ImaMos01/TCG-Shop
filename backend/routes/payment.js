import { Router } from "express";
import { PaymentController } from "../controller/payment.js";

export const createPaymentRouter = ({ paymentModel }) => {
  const paymentRouter = Router();

  const paymentController = new PaymentController({ paymentModel });

  paymentRouter.post("/", paymentController.payment);
  paymentRouter.post("/itemcart", paymentController.addItemCart);
  paymentRouter.get("/orders/:id", paymentController.orderHistory);
  paymentRouter.get("/order/:id", paymentController.viewOrder);

  return paymentRouter;
};
