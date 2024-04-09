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
    return res.json(user);
  };
}
