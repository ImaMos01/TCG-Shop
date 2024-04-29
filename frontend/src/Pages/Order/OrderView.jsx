import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OrderView() {
  //view individual order
  const [orderD, setOrderD] = useState([]);
  const idOrder = useParams();

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const fData = await axios.get(
          `http://localhost:8080/pay/order/${idOrder.id}`
        );
        const data = await fData.data;
        setOrderD(data);
      } catch (error) {
        console.error("error fetching data:", error.message);
      }
    };
    fetchingData();
  }, [idOrder]);

  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pb-4 pt-56 md:pt-36 lg:pt-28 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <section className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
        <aside className="w-full">
          <h3 className="text-2xl mb-2 font-medium">Order</h3>

          <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-4 text-lg">
            <p>{idOrder.id}</p>
          </div>
          <h2 className="text-lg font-medium underline mb-4">Products</h2>

          {/*Table that shows the products */}
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="uppercase bg-gray-200 dark:bg-gray-600">
              <th scope="col" className="px-2 py-3">
                Title
              </th>
              <th scope="col" className="px-2 py-3">
                Quantity
              </th>
              <th scope="col" className="px-2 py-3">
                Price
              </th>
            </thead>
            <tbody>
              {orderD.map((it, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <th scope="row" className="px-2 py-4 whitespace-nowrap">
                    {it.title}
                  </th>
                  <td className="px-2 py-4 text-center">{it.quantity}</td>
                  <td className="px-2 py-4">$ {it.total_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </section>
    </article>
  );
}

export default OrderView;
