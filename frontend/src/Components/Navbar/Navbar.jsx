import {
  LuUser2,
  LuShoppingCart,
  LuMoon,
  LuMenu,
  LuX,
  LuSearch,
} from "react-icons/lu";
import { useState } from "react";
import UseNavPages from "../../Hooks/UseNavPages";
import pageLogo from "./../../assets/pageLogo.svg";
import NavMenu from "./NavMenu";

const categoryItems = [
  { path: "Digimon", name: "Digimon" },
  { path: "Magic", name: "Magic: The Gathering" },
  { path: "Pokemon", name: "Pokemon" },
  { path: "YuGiOh", name: "Yu-Gi-Oh!" },
];

function Navbar() {
  //Navbar of the website
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-white">
      <div className="max-w-2xl lg:max-w-4xl flex flex-col md:flex-row items-center justify-between mx-auto py-4 px-5 gap-2 md:gap-6">
        <button
          className="flex items-center gap-2"
          onClick={UseNavPages("/")}
          aria-label="Main Page"
        >
          <img src={pageLogo} className="size-12" />
          <span>TCG Shop</span>
        </button>

        {/*search input*/}
        <form className="flex items-center w-1/2 mx-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative w-full ">
            <input
              type="search"
              id="search"
              className="p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-xl border-e-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2 h-full text-white bg-orange-500 rounded-e-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300"
              aria-label="submit search"
            >
              <LuSearch className="size-5" />
            </button>
          </div>
        </form>

        {/*buttons */}
        <div className="flex gap-4">
          <button
            className="flex flex-col items-center hover:text-blue-700 text-center"
            aria-label="sign in"
          >
            <LuUser2 className="size-6" />
            <p>Sign in</p>
          </button>
          <button
            className="flex items-center gap-1 mr-2"
            aria-label="shopping cart"
          >
            <LuShoppingCart className="size-6 hover:text-blue-700" />
            <div className="absolute bg-red-500 rounded-full w-5 h-5 text-white top-28 md:top-7 lg:top-4 mt-3 md:mt-0 mx-4 flex justify-center items-center">
              <div className="text-sm">0</div>
            </div>
          </button>
          <button
            className="p-1 my-2 md:my-4 lg:my-2 border-2 rounded-md border-black hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-20"
            aria-label="change theme"
          >
            <LuMoon className="size-5" />
          </button>
        </div>
      </div>

      {/*sections */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-2xl lg:max-w-4xl flex flex-col sm:flex-row justify-center sm:justify-between mx-auto py-1 px-5">
          <button
            className="sm:hidden flex justify-center p-1 border rounded-md rounded-gray-100 w-full max-w-10 mx-4"
            onClick={toggleNavbar}
            aria-label="Open/Close tab"
          >
            {/*Change icons in each click */}
            {!isClick ? (
              <LuMenu className="size-5" />
            ) : (
              <LuX className="size-5" />
            )}
          </button>
          <ul className="hidden sm:flex sm:flex-row gap-8">
            {categoryItems.map((it, index) => (
              <NavMenu key={index} name={it.name} path={it.path} />
            ))}
          </ul>

          {/*Appears when clicks the button */}
          {isClick && (
            <ul className="mx-4 sm:hidden flex flex-col gap-2 mt-2">
              {categoryItems.map((it, index) => (
                <NavMenu key={index} name={it.name} path={it.path} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
