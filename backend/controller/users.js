import { validateUser } from "../schema/user.js";

export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    const users = await this.userModel.getAll();
    if (users) return res.json(users);
    res.status(404).send({ message: "users not found" });
  };

  getByUserName = async (req, res) => {
    const { userName } = req.params;
    const user = await this.userModel.getByUserName({ userName });
    return res.status(200).json(user);
  };

  createUser = async (req, res) => {
    const result = validateUser(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const message = await this.userModel.createUser({ input: result.data });
    return res.status(201).json(message);
  };
}
