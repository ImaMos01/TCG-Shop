import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart } from "../../features/shopingCart/productSlice";
import { toast } from "sonner";
import axios from "axios";

function Product() {
  /*
    Shows the description of an product 
  */
  const addProduct = useDispatch();

  const [productData, setProductData] = useState([]);
  const [price, setPrice] = useState();

  const params = useParams();

  const findDiscount = (price, discount) => {
    const temp = parseFloat(price);
    if (!discount) {
      setPrice(temp);
    } else {
      const res = temp - (discount / 100) * temp;
      setPrice(res.toFixed(2));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/product/${params.Category}/${params.Id}`
        );
        const result = await response.data;
        setProductData(result);
      } catch (error) {
        console.error("error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    findDiscount(productData.price, productData.discount);
  }, [productData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: productData.id,
      img_URL: productData.img_URL,
      title: productData.title,
      stock: productData.stock,
      price: parseFloat(price),
      originPrice: parseFloat(productData.price),
      quantity: Number(e.target.quantity.value),
    };

    addProduct(updateCart(formData));
    toast.success("Added products to the cart");
  };
  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pb-4 pt-56 md:pt-36 lg:pt-28 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <div className="pb-4 flex flex-col md:flex-row gap-1 md:gap-1.5">
        <h2>
          <Link to={"/"} className="no-underline hover:underline">
            Home
          </Link>{" "}
          /
        </h2>
        <h2>
          <Link
            to={`/${params.Category}`}
            className="no-underline hover:underline"
          >
            {params.Category}
          </Link>{" "}
          /
        </h2>
        <h2>
          <Link
            to={`/${params.Category}/${productData.id}`}
            className="no-underline hover:underline"
          >
            {productData.title}
          </Link>
        </h2>
      </div>
      {/* Content of the product */}
      <section className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
        {/*if there is stock */}
        {!productData.stock ? (
          <>
            <div className="p-2">
              <img
                className="w-56 h-72 filter grayscale"
                src={productData.img_URL}
                alt={productData.title}
              />
            </div>

            <aside className="w-60 md:w-80">
              <form>
                <h3 className="text-2xl mb-2 font-medium">
                  {productData.title}
                </h3>
                <span className="bg-red-800 text-white text-sm font-medium px-2.5 py-1 rounded-full">
                  {productData.stock} stock
                </span>

                <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-4 text-lg">
                  <p>$ {productData.price}</p>

                  {/* quantity and add to cart button */}
                  <div className="flex flex-row gap-2 items-center justify-end">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                      max="0"
                      defaultValue="0"
                      className="w-1/5 bg-gray-300 dark:bg-white dark:text-gray-900 rounded text-center"
                      disabled
                    />
                    <button
                      className="bg-green-300 text-white border border-green-300 rounded-md py-1 px-2 cursor-not-allowed"
                      aria-label="add to cart"
                      disabled
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </form>
              {/*description */}
              <h2 className="text-lg font-medium underline">Description</h2>
              <ul className="text-sm mt-2 flex flex-col gap-0.5">
                <li className="flex flex-row gap-2">
                  Name:<p className="font-semibold">{productData.title}</p>
                </li>
                <li className="flex flex-row gap-2">
                  Type:<p className="font-semibold">{productData.type}</p>
                </li>
                <li className="flex flex-row gap-2">
                  Category:<p className="font-semibold">{params.Category}</p>
                </li>
              </ul>
            </aside>
          </>
        ) : (
          <>
            <div className="p-2">
              <img
                className="w-56 h-72"
                src={productData.img_URL}
                alt={productData.title}
              />
            </div>
            <aside className="w-60 md:w-80">
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl mb-2 font-medium">
                  {productData.title}
                </h3>
                <span className="bg-blue-800 text-white text-sm font-medium px-2.5 py-1 rounded-full">
                  {productData.stock} stock
                </span>

                {/* Find discount */}
                {!productData.discount ? (
                  <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-4 text-lg">
                    <p>$ {productData.price}</p>

                    {/* quantity and add to cart button */}
                    <div className="flex flex-row gap-2 items-center justify-end">
                      <label htmlFor="quantity">qty:</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max={productData.stock}
                        defaultValue="1"
                        className="w-1/5 bg-gray-300 dark:bg-white dark:text-gray-900 rounded text-center"
                      />
                      <button
                        type="submit"
                        className="bg-green-500 text-white border rounded-md py-1 px-2 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700 dark:border-gray-800"
                        aria-label="add to cart"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm text-red-600 font-normal mt-2 ">
                      -{productData.discount}% off
                    </p>
                    <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-4 text-lg">
                      <div>
                        <p className="text-xs line-through">
                          ${productData.price}
                        </p>
                        <p>${price}</p>
                      </div>

                      {/* quantity and add to cart button */}
                      <div className="flex flex-row gap-2 items-center justify-end">
                        <label htmlFor="quantity">qty:</label>
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          max={productData.stock}
                          defaultValue="1"
                          className="w-1/5 bg-gray-300 dark:bg-white dark:text-gray-900 rounded text-center"
                        />
                        <button
                          type="submit"
                          className="bg-green-500 text-white border rounded-md py-1 px-2 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700 dark:border-gray-800"
                          aria-label="add to cart"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </form>
              {/*description */}
              <h2 className="text-lg font-medium underline">Description</h2>
              <ul className="text-sm mt-2 flex flex-col gap-0.5">
                <li className="flex flex-row gap-2">
                  Name:<p className="font-semibold">{productData.title}</p>
                </li>
                <li className="flex flex-row gap-2">
                  Type:<p className="font-semibold">{productData.type}</p>
                </li>
                <li className="flex flex-row gap-2">
                  Category:<p className="font-semibold">{params.Category}</p>
                </li>
              </ul>
            </aside>
          </>
        )}
      </section>
    </article>
  );
}

export default Product;
