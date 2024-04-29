import PropTypes from "prop-types";

function CheckoutItem({ id, img_URL, price, quantity, title }) {
  /*
    Item for each product to pay
  */

  return (
    <article className="border rounded-md border-gray-400 shadow-sm p-2 mx-1 dark:border-gray-500">
      <div
        id={id}
        className="flex flex-col gap-y-4 md:flex-row justify-between"
      >
        <div className="flex flex-row gap-4 w-full justify-center md:justify-start md:w-1/2 lg:w-3/4">
          <img className="w-16 h-20" src={img_URL} alt="product image" />
          <div>
            <h4 className="font-bold">{title}</h4>
            <p className="font-thin text-sm">category</p>
            <p className="font-thin text-sm">type</p>
          </div>
        </div>

        {/*quantity and price */}
        <div className="flex flex-row gap-2 items-center justify-center md:justify-between w-full md:w-1/2 lg:w-1/4">
          <div className="flex flex-row gap-1">
            <p className="font-bold">qty:</p>
            <p>{quantity}</p>
          </div>
          <p>$ {parseFloat(price).toFixed(2)}</p>
        </div>
      </div>
    </article>
  );
}

CheckoutItem.propTypes = {
  id: PropTypes.string,
  img_URL: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  stock: PropTypes.number,
  title: PropTypes.string,
  originPrice: PropTypes.number,
};
export default CheckoutItem;
