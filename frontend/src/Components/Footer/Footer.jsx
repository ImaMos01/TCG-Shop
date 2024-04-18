import NavMenu from "../Navbar/NavMenu";
import Logo from "../Logo/Logo";

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
        <Logo sizeImg={"6"} sizeText={"md"} />
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
