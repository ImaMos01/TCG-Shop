import { Router } from "express";
import { UserController } from "../controller/users.js";

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();

  const userController = new UserController({ userModel });

  userRouter.get("/", userController.getAll);
  userRouter.get("/:userName", userController.getByUserName);

  /*
  productRouter.get("/:id", (res, req) => {});

  productRouter.delete("/:id", (req, res) => {});
  */
  return userRouter;
};
