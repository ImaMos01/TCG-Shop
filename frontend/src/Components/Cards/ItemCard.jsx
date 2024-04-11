import { TbShoppingCartPlus } from "react-icons/tb";
import PropTypes from "prop-types";

function ItemCard({ img_URL, title, stock, price }) {
  /*
  Card template to put information about the Items to buy

  Args:

   
  Return: 
    Card item that is a product tumbnail
  */

  return (
    <article className="max-w-xs rounded-xl overflow-hidden shadow-lg my-2 border rounded border-gray-200 dark:border-gray-900 dark:shadow-md dark:shadow-slate-700">
      {/*Image */}
      <button className="w-full flex justify-center pt-2 ">
        <img className="w-28 h-40" src={img_URL} alt={title} />
      </button>

      {/*Content */}
      <form className="px-5 py-4">
        <h3 className="font-bold text-base mb-2 text-center hover:text-blue-800">
          {title}
        </h3>
        <p className="text-black text-sm underline">Yu-Gi-Oh! product</p>

        {/*Check the stock of the product */}
        {stock === 0 ? (
          <p className="text-red-600 text-sm">Out of stock</p>
        ) : (
          <>
            <p className="text-black text-sm">{stock} in stock</p>
            <p className="text-sm text-red-600">discount</p>
            <div className="flex felx-col items-center justify-between my-2">
              <div>
                <p className="text-xs line-through">${price}</p>
                <p>${price}</p>
              </div>
              <button
                type="submit"
                className="w-20 bg-green-500 rounded-md p-1 text-white flex justify-center hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700"
                aria-label="add to cart"
              >
                <TbShoppingCartPlus className="size-6" />
              </button>
            </div>
          </>
        )}
        <p className="pt-3 text-center no-underline hover:underline decoration-2 text-blue-800">
          View More
        </p>
      </form>
    </article>
  );
}
ItemCard.propTypes = {
  img_URL: PropTypes.string,
  title: PropTypes.string,
  stock: PropTypes.number,
  price: PropTypes.string,
};

export default ItemCard;
