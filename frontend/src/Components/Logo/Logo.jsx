import UseNavPages from "../../Hooks/UseNavPages";
import pageLogo from "./../../assets/pageLogo.svg";
import PropTypes from "prop-types";

function Logo({ sizeImg, sizeText }) {
  const navToHome = UseNavPages();
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => navToHome("/")}
      aria-label="Main Page"
    >
      <img src={pageLogo} className={`size-${sizeImg}`} />
      <span className={`text-${sizeText}`}>TCG Shop</span>
    </button>
  );
}

Logo.propTypes = {
  sizeImg: PropTypes.string,
  sizeText: PropTypes.string,
};

export default Logo;
