function Product() {
  /*
    Shows the description of an product 
  */
  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pb-4 pt-56 md:pt-36 lg:pt-28 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <h2 className="pb-4">Home / category / product-name</h2>

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
        <div className="p-2">
          <img
            className="w-56 h-72"
            src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1739432.JPG"
            alt="product image"
          />
        </div>

        <aside className="w-60 md:w-80">
          <form>
            <h3 className="text-2xl mb-2 font-medium">Product name</h3>
            <span className="bg-blue-800 text-white text-sm font-medium px-2.5 py-1 rounded-full">
              2 stock
            </span>

            <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-4 text-lg">
              <p>S/. 200</p>

              {/* quantity and add to cart button */}
              <div className="flex flex-row gap-2 items-center">
                <label htmlFor="qty">qty:</label>
                <select
                  id="qrty"
                  className="border border-gray-500 rounded-md p-1 dark:text-gray-900"
                >
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                </select>
                <button
                  className="bg-green-500 text-white border rounded-md py-1 px-2 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-700 dark:border-gray-800"
                  aria-label="add to cart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </form>

          {/*description */}
          <h2 className="text-lg font-medium">Description</h2>
          <ul className="text-sm mt-2 flex flex-col gap-0.5">
            <li className="flex flex-row gap-2">
              Name:<p>sp</p>
            </li>
            <li className="flex flex-row gap-2">
              Dimension:<p>sp</p>
            </li>
            <li className="flex flex-row gap-2">
              Type:<p>sp</p>
            </li>
            <li className="flex flex-row gap-2">
              Category:<p>sp</p>
            </li>
          </ul>
        </aside>
      </section>
    </article>
  );
}

export default Product;
