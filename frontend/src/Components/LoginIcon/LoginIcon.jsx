import { LuUser2, LuUserCircle2 } from "react-icons/lu";
import PropTypes from "prop-types";
import UseNavPages from "../../Hooks/UseNavPages";
import { useState } from "react";

function LoginIcon({ name = "Sign in", active = false }) {
  const [isClick, setIsClick] = useState(false);

  const navToPages = UseNavPages();

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
        <div className=" font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
          </ul>
          <div className="py-1">
            <a>Sign out</a>
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
