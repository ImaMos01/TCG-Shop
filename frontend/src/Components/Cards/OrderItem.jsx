import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrderItem({ id, first_name, total_price, created_at }) {
  const [date] = created_at.split("T");
  return (
    <article className="border rounded-md border-gray-400 shadow-sm p-2 mx-1 dark:border-gray-500">
      <div className="flex flex-col gap-y-4 md:flex-row justify-between">
        <div className="flex flex-row gap-4 w-full justify-center md:justify-start md:w-1/2">
          <div>
            <h4 className="font-bold no-underline hover:underline">
              <Link to={`/History/${id}`}>{id}</Link>
            </h4>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center md:justify-between w-full md:w-1/2">
          <p>{first_name}</p>
          <p>{date}</p>
          <p>$ {total_price}</p>
        </div>
      </div>
    </article>
  );
}

OrderItem.propTypes = {
  id: PropTypes.string,
  first_name: PropTypes.string,
  total_price: PropTypes.string,
  created_at: PropTypes.string,
};

export default OrderItem;
