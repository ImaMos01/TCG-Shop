import OrderItem from "../../Components/Cards/OrderItem";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Order() {
  //view order history of the user
  const [orderH, setOrderH] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const orders = await axios.get(
          `${import.meta.env.VITE_API}/pay/orders/${user[0]?.id}`
        );
        const data = await orders.data;
        setOrderH(data);
      } catch (error) {
        console.error("error fetching data:", error.message);
      }
    };
    fetchingData();
  }, [user]);

  return (
    <section className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <h2 className="text-2xl pb-4">Order history</h2>

      <ul className="flex flex-col gap-2">
        {orderH.map((it) => (
          <li key={it.id}>
            <OrderItem
              id={it.id}
              first_name={it.first_name}
              total_price={it.total_price}
              created_at={it.created_at}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Order;
