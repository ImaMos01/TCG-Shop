import pageLogo from "./../../assets/pageLogo.svg";

function Footer() {
  return (
    <footer className="bottom-0 left-0 z-20 w-full py-4 my-4 bg-blue-600 text-white">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-5 flex flex-col-reverse justify-center md:flex-row items-center gap-12">
        <div className="flex items-center gap-2">
          <img src={pageLogo} className="size-12" />
          <a>TCG Shop</a>
        </div>
        <div>
          shop
          <ul>
            <li>yu</li>
            <li>poke</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
