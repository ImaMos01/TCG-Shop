import { useState } from "react";
import {
  LuUser2,
  LuShoppingCart,
  LuMoon,
  LuMenu,
  LuX,
  LuSearch,
} from "react-icons/lu";
import pageLogo from "./../../assets/pageLogo.svg";

function Navbar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 pb-2">
      <div className="max-w-2xl lg:max-w-4xl flex flex-col md:flex-row items-center justify-between mx-auto py-4 px-5 gap-6">
        <div className="flex items-center gap-2">
          <img src={pageLogo} className="size-12" />
          <a>TCG Shop</a>
        </div>

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
            >
              <LuSearch className="size-5" />
            </button>
          </div>
        </form>

        {/*buttons */}
        <div className="flex gap-4">
          <div className="flex items-center gap-1 hover:text-blue-700">
            <LuUser2 className="size-6" />
            <a>Sign in</a>
          </div>
          <div className="flex items-center gap-1 hover:text-blue-700">
            <LuShoppingCart className="size-6" />
            <a>Shop</a>
          </div>
          <button className="p-1 my-2 border-2 rounded-md border-black hover:bg-gray-400">
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
          >
            {/*Change icons in each click */}
            {!isClick ? (
              <LuMenu className="size-5" />
            ) : (
              <LuX className="size-5" />
            )}
          </button>
          <ul className="hidden sm:flex sm:flex-row gap-8">
            <li>Yu-Gi-Oh!</li>
            <li>Pokemon</li>
            <li>Digimon</li>
            <li>Magic: The Gathering</li>
          </ul>

          {/*Appears when clicks the button */}
          {isClick && (
            <ul className="mx-4 sm:hidden flex flex-col gap-2 mt-2">
              <li>Yu-Gi-Oh!</li>
              <li>Pokemon</li>
              <li>Digimon</li>
              <li>Magic: The Gathering</li>
            </ul>
          )}
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
