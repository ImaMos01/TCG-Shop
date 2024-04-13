import { Router } from "express";
import { UserController } from "../controller/users.js";

export const createUserRouter = ({ userModel }) => {
  const userRouter = Router();

  const userController = new UserController({ userModel });

  userRouter.get("/", userController.getAll);
  userRouter.get("/:userName", userController.getByUserName);

  userRouter.post("/", userController.createUser);

  return userRouter;
};
