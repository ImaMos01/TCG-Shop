import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCart, updateQty } from "../../features/shopingCart/productSlice";
import PropTypes from "prop-types";

function CartItem({ id, img_URL, price, quantity, stock, title, originPrice }) {
  /*
    Item for the shopping cart
  */

  const shopCart = useDispatch();

  const handleDelete = () => {
    shopCart(deleteCart(id));
  };

  const handleQuantity = (e) => {
    const data = {
      id,
      quantity: Number(e.target.value),
      originPrice,
    };
    shopCart(updateQty(data));
  };

  return (
    <article className="border rounded-md border-gray-400 shadow-sm p-2 mx-1 dark:border-gray-500">
      <div className="flex flex-col gap-y-4 md:flex-row justify-between">
        <div className="flex flex-row gap-4 w-full justify-center md:justify-start md:w-1/2 lg:w-2/3">
          <img className="w-16 h-20" src={img_URL} alt="product image" />
          <div>
            <h4 className="font-bold">{title}</h4>
            <p className="font-thin text-sm">category</p>
            <p className="font-thin text-sm">type</p>
          </div>
        </div>

        {/*price and remove */}
        <div className="flex flex-row gap-2 items-center justify-center md:justify-between w-full md:w-1/2 lg:w-1/3">
          <input
            type="number"
            id="qty"
            name="qty"
            min="1"
            max={stock}
            defaultValue={quantity}
            className="w-2/12 md:w-1/5 bg-gray-300 dark:bg-white dark:text-gray-900 rounded text-center"
            onChange={handleQuantity}
          />
          <p>$ {parseFloat(price).toFixed(2)}</p>
          <button
            type="submit"
            className="border rounded-md text-white p-2 mx-2 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-700 dark:border-gray-800"
            aria-label="remove button"
            onClick={handleDelete}
          >
            <FaRegTrashAlt className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  img_URL: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  stock: PropTypes.number,
  title: PropTypes.string,
  originPrice: PropTypes.number,
};
export default CartItem;
