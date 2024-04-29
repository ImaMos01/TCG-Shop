import { useSelector } from "react-redux";
import { useState } from "react";
import UseNavPages from "../../Hooks/UseNavPages";
import useCountQty from "../../Hooks/useCountQty";
import useCountTotal from "../../Hooks/useCountTotal";
import CheckoutItem from "../../Components/Cards/CheckoutItem";
import { MdLockOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../features/shopingCart/productSlice";
import axios from "axios";

function Checkout() {
  //page to procced to do the payment
  const [formInput, setFormInput] = useState({
    cardName: "",
    cardNumber: "",
    eDate: "",
    sCode: "",
  });
  const [mError, setMError] = useState({ message: "" });

  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const { allItems } = useCountQty(products);
  const { totalPrice } = useCountTotal(products);

  const navTo = UseNavPages();
  const deleteProd = useDispatch();

  //save form
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  //validate input
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formInput.cardNumber.length !== 16) {
      setMError({ message: "The card number must have 16 digits" });
      return;
    }
    if (formInput.sCode.length !== 3) {
      setMError({ message: "Security code must have 3 digits" });
      return;
    }
    //fetching the data
    try {
      const orderD = await axios.post(`http://localhost:8080/pay`, {
        userId: user[0]?.id,
        totalPrice: totalPrice.toFixed(2),
      });
      await products.forEach((element) => {
        axios.post(`http://localhost:8080/pay/itemcart`, {
          productId: element.id,
          orderId: orderD.data.id,
          quantity: element.quantity,
          stock: element.stock,
          total_price: element.price,
        });
      });
      deleteProd(deleteAll());
      navTo("/thx");
    } catch (error) {
      console.error("error fetching data:", error.message);
    }
  };
  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <div className="container flex flex-1 flex-col">
        <h2 className="text-2xl pb-8">Checkout</h2>
        {products.length === 0 ? (
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg">
              There are no items in your shopping cart. Please click the link
              below to continue shopping.
            </h3>
            <button
              className="py-1 px-2 bg-orange-500 rounded-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 text-white"
              onClick={() => navTo("/")}
              aria-label="go to home"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col md:flex-row gap-4 items-center md:items-start">
            {/*products */}
            <section className="w-full md:w-3/5 border border-gray-200 shadow-md dark:border-gray-900 dark:shadow-slate-700">
              <h3 className="p-2">{allItems} Total Items</h3>
              <ul className="p-2 flex flex-col gap-4 mb-6">
                {products.map((it) => (
                  <li key={it.id} className="mr-6">
                    <CheckoutItem
                      id={it.id}
                      img_URL={it.img_URL}
                      price={parseFloat(it.price)}
                      quantity={Number(it.quantity)}
                      stock={it.stock}
                      title={it.title}
                      originPrice={it.originPrice}
                    />
                  </li>
                ))}
              </ul>
              <div className="w-full bg-blue-700 text-end px-2 py-1 text-white">
                subtotal: $ {parseFloat(totalPrice).toFixed(2)}
              </div>
            </section>

            {/*credit card form */}
            <aside className="w-full md:w-2/5">
              <div className="border rounded border-gray-200 shadow-md p-2 dark:border-gray-900 dark:shadow-slate-700">
                <form onSubmit={handleSubmit}>
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    className="h-8 mb-2"
                  />
                  <label htmlFor="cardName" className="pl-0.5">
                    Name on card:
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
                    name="cardName"
                    placeholder="Name on card"
                    onChange={handlechange}
                    required
                  />
                  <label htmlFor="cardNumber" className="pl-0.5">
                    Card Number:
                  </label>
                  <input
                    id="cardNumber"
                    type="text"
                    className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    onChange={handlechange}
                    required
                  />
                  <label htmlFor="eDate" className="pl-0.5">
                    Expiration Date:
                  </label>
                  <input
                    id="eDate"
                    type="month"
                    className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
                    name="eDate"
                    onChange={handlechange}
                    required
                  />
                  <label htmlFor="sCode" className="pl-0.5">
                    Security code:
                  </label>
                  <input
                    id="sCode"
                    type="text"
                    className="block border border-gray-400 w-full p-3 rounded mb-4 mt-2 text-gray-900"
                    name="sCode"
                    placeholder="000"
                    onChange={handlechange}
                    required
                  />
                  <p className="text-red-700">{mError.message}</p>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full min-h-12 text-white bg-orange-500 rounded-md border hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 my-4 p-1 dark:border-gray-800"
                    aria-label="procced to checkout"
                  >
                    <MdLockOutline />
                    Pay Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        )}
      </div>
    </article>
  );
}

export default Checkout;
