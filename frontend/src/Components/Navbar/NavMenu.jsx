import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavMenu({ name, url }) {
  return (
    <li className="no-underline hover:underline">
      <Link to={`/${url}`}>{name}</Link>
    </li>
  );
}

NavMenu.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default NavMenu;
