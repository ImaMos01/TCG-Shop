import { TbShoppingCartPlus } from "react-icons/tb";

function ItemCard() {
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
        <img
          className="w-28 h-40"
          src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1739432.JPG"
          alt="sunset"
        />
      </button>

      {/*Content */}
      <form className="px-5 py-4">
        <h3 className="font-bold text-base mb-2 text-center hover:text-blue-800">
          Structure Deck: Albaz Strike
        </h3>
        <p className="text-black text-sm underline">Yu-Gi-Oh! product</p>
        <p className="text-black text-sm">20 in stock</p>
        <div className="flex felx-col items-center justify-between my-2">
          <p>S/.300</p>
          <button
            type="submit"
            className="w-20 bg-green-500 rounded-md p-1 text-white flex justify-center hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700"
            aria-label="add to cart"
          >
            <TbShoppingCartPlus className="size-6" />
          </button>
        </div>
        <p className="pt-3 text-center no-underline hover:underline decoration-2 text-blue-800">
          View More
        </p>
      </form>
    </article>
  );
}

export default ItemCard;
