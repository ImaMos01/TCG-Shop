import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavMenu({ name, path }) {
  //link to diferent pages
  return (
    <li className="no-underline hover:underline">
      <Link to={`/${path}`}>{name}</Link>
    </li>
  );
}

NavMenu.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default NavMenu;
