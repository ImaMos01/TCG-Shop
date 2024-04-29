import UseNavPages from "../../Hooks/UseNavPages";
import check from "../../assets/check.png";

function Payment() {
  const navTo = UseNavPages();

  return (
    <article className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 pb-4 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:shadow-slate-700 dark:border-gray-900">
      <div className="container flex flex-1 flex-col">
        <div className="flex flex-col items-center gap-2">
          <img src={check} alt={"confirm check"} className="size-20" />
          <h3 className="text-lg">Thanks for your purchase.</h3>
          <button
            className="py-1 px-2 bg-orange-500 rounded-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 text-white"
            onClick={() => navTo("/")}
            aria-label="go to home"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </article>
  );
}

export default Payment;
