import { useSelector } from "react-redux";
import UseNavPages from "../../Hooks/UseNavPages";
import CartItem from "../../Components/Cards/CartItem";
import useCountQty from "../../Hooks/useCountQty";
import useCountTotal from "../../Hooks/useCountTotal";

function ShoppCart() {
  //page of the shoping cart using redux to obtain the products
  const products = useSelector((state) => state.cart);

  const { allItems } = useCountQty(products);
  const { totalPrice } = useCountTotal(products);

  const navTo = UseNavPages();

  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <div className="container flex flex-1 flex-col">
        <h2 className="text-2xl pb-10">Shopping cart</h2>
        {/* if the shopping cart is empty */}
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
            {/*Cart Items */}
            <section className="w-full md:w-3/4 border border-gray-200 shadow-md dark:border-gray-900 dark:shadow-slate-700">
              <h3 className="p-2">{allItems} Total Items</h3>
              <ul className="p-2 flex flex-col gap-4 mb-6">
                {products.map((it) => (
                  <li key={it.id} className="mr-6">
                    <CartItem
                      id={it.id}
                      img_URL={it.img_URL}
                      price={parseFloat(it.price)}
                      quantity={Number(it.quantity)}
                      stock={it.stock}
                      title={it.title}
                      originPrice={it.originPrice}
                      categ={it.categ}
                      type={it.type}
                    />
                  </li>
                ))}
              </ul>
              <div className="w-full bg-blue-700 text-end px-2 py-1 text-white">
                subtotal: $ {parseFloat(totalPrice).toFixed(2)}
              </div>
            </section>

            {/*Checkout */}
            <aside className="w-3/4 md:w-1/4">
              <div className="border rounded border-gray-200 shadow-md p-2 dark:border-gray-900 dark:shadow-slate-700">
                <p>Subtotal: $ {parseFloat(totalPrice).toFixed(2)}</p>
                <button
                  className="w-full text-white bg-orange-500 rounded-md border hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 my-4 p-1 dark:border-gray-800"
                  onClick={() => navTo("/Checkout")}
                  aria-label="procced to checkout"
                >
                  Secure Checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </article>
  );
}

export default ShoppCart;
