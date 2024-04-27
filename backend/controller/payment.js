export class PaymentController {
  constructor({ paymentModel }) {
    this.paymentModel = paymentModel;
  }

  addItemCart = async (req, res) => {
    const prod = await this.paymentModel.addItemCart(req.body);
    if (prod) return res.json(prod);
    res.status(404).json({ message: "itmes dont added" });
  };

  payment = async (req, res) => {
    const paydetails = await this.paymentModel.payment(req.body);
    if (paydetails) return res.json(paydetails);
    res.status(404).json({ message: "failed in the payment" });
  };

  orderHistory = async (req, res) => {
    const { id } = req.params;
    const viewOrder = await this.paymentModel.orderHistory({ id });
    if (viewOrder) return res.json(viewOrder);
    res.status(404).json({ message: "orders not found" });
  };

  viewOrder = async (req, res) => {
    const { id } = req.params;
    const viewOrder = await this.paymentModel.viewOrder({ id });
    if (viewOrder) return res.json(viewOrder);
    res.status(404).json({ message: "order not found" });
  };
}
