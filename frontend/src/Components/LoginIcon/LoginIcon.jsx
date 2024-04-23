import { LuUser2, LuUserCircle2 } from "react-icons/lu";
import PropTypes from "prop-types";
import UseNavPages from "../../Hooks/UseNavPages";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/shopingCart/userSlice";
import { Link } from "react-router-dom";

function LoginIcon({ name = "Sign in", active = false }) {
  const [isClick, setIsClick] = useState(false);

  const navToPages = UseNavPages();

  const userData = useDispatch();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return active ? (
    <div className="flex flex-col">
      <button
        className="flex flex-col items-center hover:text-blue-700 text-center"
        aria-label="user"
        onClick={toggleNavbar}
      >
        <LuUserCircle2 className="size-6" />
      </button>
      {isClick && (
        <div className="absolute mt-8 font-normal bg-white shadow-md border-gray-100 divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-800 dark:border-gray-900 dark:divide-gray-400 dark:shadow-slate-700">
          <ul className="m-2">
            <li className="mb-1">
              <p>{name}</p>
            </li>
            <li>
              <a href="#" className="hover:underline">
                history
              </a>
            </li>
          </ul>
          <div className="py-1 m-2 text-red-500 font-bold">
            <p
              className="hover:underline"
              onClick={() => userData(deleteUser())}
            >
              <Link to="/">Sign Out</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  ) : (
    <button
      className="flex flex-col items-center hover:text-blue-700 text-center"
      aria-label="sign in"
      onClick={() => navToPages("/SignIn")}
    >
      <LuUser2 className="size-6" />
      <p>{name}</p>
    </button>
  );
}

LoginIcon.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
};

export default LoginIcon;
