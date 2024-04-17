import { useState } from "react";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { updateCart } from "../../features/shopingCart/productSlice";
import UseNavPages from "../../Hooks/UseNavPages";
import PropTypes from "prop-types";

function ItemCard({ id, img_URL, title, stock, price, discount, name }) {
  /*
  Card template to put information about the Items to buy

  Args:

   
  Return: 
    Card item that is a product tumbnail
  */

  //calculate the discount
  const [discMount] = useState(() => {
    let temp = parseFloat(price);
    if (!discount) {
      return temp;
    } else {
      let res = temp - (discount / 100) * temp;
      return res.toFixed(2);
    }
  });

  const addShopingCart = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id,
      img_URL,
      title,
      stock,
      price: discMount,
      quantity: 1,
    };
    console.log(formData);
    addShopingCart(updateCart(formData));
  };
  const navigateToProduct = UseNavPages();

  return (
    <article className="max-w-xs min-h-full rounded-xl overflow-hidden shadow-lg my-2 border rounded border-gray-200 dark:border-gray-900 dark:shadow-md dark:shadow-slate-700">
      {/*Image */}
      <button
        className="w-full flex justify-center pt-2 "
        onClick={() => navigateToProduct(`/${name}/${id}`)}
      >
        {/*Check the stock of the product */}
        {!stock ? (
          <img
            className="w-32 h-36 filter grayscale"
            src={img_URL}
            alt={title}
          />
        ) : (
          <img className="w-32 h-36" src={img_URL} alt={title} />
        )}
      </button>

      {/*Content */}
      <form className="p-4" onSubmit={handleSubmit}>
        <h3 className="font-bold text-sm mb-2 min-h-14 text-center hover:text-blue-800">
          <Link to={`/${name}/${id}`}>{title}</Link>
        </h3>
        <p className="text-md underline font-thin">{name} product</p>

        {/*Check the stock of the product */}
        {!stock ? (
          <>
            <p className="text-red-600 text-sm min-h-12">Out of stock</p>
            <div className="flex flex-col md:flex-row items-center justify-between my-2">
              <p>${discMount}</p>
              <button
                type="submit"
                className="w-20 bg-green-300 rounded-md p-1 text-white flex justify-center cursor-not-allowed"
                aria-label="add to cart"
                disabled
              >
                <TbShoppingCartPlus className="size-6" />
              </button>
            </div>
          </>
        ) : (
          <>
            {/*Check if has a discount */}
            {!discount ? (
              <>
                <p className="text-sm min-h-12">{stock} in stock</p>
                <div className="flex flex-col md:flex-row items-center justify-between my-2">
                  <p>${discMount}</p>

                  <button
                    type="submit"
                    className="w-20 bg-green-500 rounded-md p-1 text-white flex justify-center hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700"
                    aria-label="add to cart"
                  >
                    <TbShoppingCartPlus className="size-6" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm">{stock} in stock</p>
                <p className="text-sm text-red-600 font-normal">
                  -{discount}% off
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between my-2">
                  <div>
                    <p className="text-xs line-through">${price}</p>
                    <p>${discMount}</p>
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
          </>
        )}
        <p className="pt-3 text-center no-underline hover:underline decoration-2 text-blue-800">
          <Link to={`/${name}/${id}`}>View More</Link>
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
  discount: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default ItemCard;
