import { FaRegTrashAlt } from "react-icons/fa";

function CartItem() {
  /*
    Item for the shopping cart
  */
  return (
    <article className="border rounded-md border-gray-400 shadow-sm p-2 mx-1 dark:border-gray-500">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3">
          <img
            className="w-14 h-20"
            src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1739432.JPG"
            alt="product image"
          />
          <div>
            <h4>name</h4>
            <p>category</p>
            <p>type</p>
          </div>
        </div>

        {/*price and remove */}
        <div className="flex flex-row gap-4 items-center">
          <select
            id="qrty"
            className="border border-gray-500 rounded-md p-1 dark:text-gray-900"
          >
            <option selected value="1">
              1
            </option>
            <option value="2">2</option>
          </select>
          <p>2.99</p>
          <button
            className="border rounded-md text-white p-2 mx-2 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-700 dark:border-gray-800"
            aria-label="remove button"
          >
            <FaRegTrashAlt className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
