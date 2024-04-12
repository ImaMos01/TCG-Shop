import pageLogo from "./../../assets/pageLogo.svg";
import NavMenu from "../Navbar/NavMenu";
import UseNavPages from "../../Hooks/UseNavPages";

const categoryItems = [
  { url: "Digimon", name: "Digimon" },
  { url: "Magic", name: "Magic: The Gathering" },
  { url: "Pokemon", name: "Pokemon" },
  { url: "YuGiOh", name: "Yu-Gi-Oh!" },
];

function Footer() {
  // Footer of the website
  return (
    <footer className="bottom-0 left-0 z-20 w-full py-6 mt-14 bg-blue-600 text-white">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-5 flex flex-col-reverse justify-center md:flex-row items-center gap-12">
        <button
          className="flex items-center gap-2"
          onClick={UseNavPages("/")}
          aria-label="Main Page"
        >
          <img src={pageLogo} className="size-12" />
          <p>TCG Shop</p>
        </button>
        <div>
          <ul>
            {categoryItems.map((it, index) => (
              <NavMenu key={index} name={it.name} path={it.url} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
