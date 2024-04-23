import { LuShoppingCart, LuMoon, LuMenu, LuX, LuSun } from "react-icons/lu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UseNavPages from "../../Hooks/UseNavPages";
import NavMenu from "./NavMenu";
import useThemeContext from "../../Hooks/UseThemeContext";
import Logo from "../Logo/Logo";
import useCountQty from "../../Hooks/useCountQty";
import SearchBar from "../Search/SearchBar";
import LoginIcon from "../LoginIcon/LoginIcon";

const categoryItems = [
  { path: "Digimon", name: "Digimon" },
  { path: "Magic", name: "Magic: The Gathering" },
  { path: "Pokemon", name: "Pokemon" },
  { path: "YuGiOh", name: "Yu-Gi-Oh!" },
];

function Navbar() {
  //Navbar of the website

  const [isClick, setIsClick] = useState(false);
  const { contextTheme, setContextTheme } = useThemeContext();

  //extract data from the sopping cart
  const shoppingCart = useSelector((state) => state.cart);
  const { allItems } = useCountQty(shoppingCart);

  //extract data from user
  const userData = useSelector((state) => state.user);

  const navToPages = UseNavPages();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  //verify the theme color
  useEffect(() => {
    if (contextTheme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").style.backgroundColor = "rgb(31 41 55)";
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").style.backgroundColor = "rgb(243 244 246)";
    }
  }, [contextTheme]);

  //change the theme color
  const handleChangeTheme = () => {
    setContextTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-white dark:bg-gray-800 dark:text-white">
      <div className="max-w-2xl lg:max-w-4xl flex flex-col md:flex-row items-center justify-between mx-auto py-4 px-5 gap-2 md:gap-6">
        <Logo sizeImg={"6"} sizeText={"md"} />

        {/*search input*/}
        <SearchBar />

        {/*buttons */}
        <div className="flex gap-4 items-center">
          {/*Sign in */}
          {userData.length >= 1 ? (
            <LoginIcon name={userData[0].user_name} active={true} />
          ) : (
            <LoginIcon />
          )}

          {/*Shopping cart */}
          <button
            className="flex items-center gap-1 mr-2"
            aria-label="shopping cart"
            onClick={() => navToPages("/Cart")}
          >
            <LuShoppingCart className="size-6 hover:text-blue-700" />
            <div className="absolute bg-red-500 rounded-full w-5 h-5 text-white top-28 md:top-7 lg:top-4 mt-3 md:mt-0 mx-4 flex justify-center items-center">
              <div className="text-sm">{allItems}</div>
            </div>
          </button>

          {/* Change theme */}
          <button
            className="p-1 my-2 md:my-4 lg:my-2 border-2 rounded-md border-gray-500 bg-gray-500 text-white hover:bg-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-20 dark:hover:bg-slate-300 dark:border-slate-500 dark:bg-slate-500"
            aria-label="change theme"
            onClick={handleChangeTheme}
          >
            {contextTheme === "light" ? (
              <LuMoon className="size-5" />
            ) : (
              <LuSun className="size-5" />
            )}
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
