import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemCard from "../../Components/Cards/ItemCard";

function Category() {
  //show products by its category
  const [products, setProducts] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/product/${params.Category}`
        );
        const data = await response.data;
        setProducts(data);
      } catch (error) {
        console.error("error fetching data:", error.message);
      }
    };
    fetchData();
  }, [params.Category]);

  return (
    <section className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <h2 className="text-2xl pb-4">{products[0]?.name}</h2>

      <div className="border rounded-lg border-gray-300 mb-3 p-2 dark:border-gray-900">
        <p className="text-sm pl-2 italic">{products.length} Products found</p>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((it) => (
          <li key={it.id}>
            <ItemCard
              id={it.id}
              img_URL={it.img_URL}
              title={it.title}
              stock={it.stock}
              price={it.price}
              discount={it.discount}
              name={params.Category}
              type={it.type}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Category;
