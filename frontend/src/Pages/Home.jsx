import Carousel from "../Components/Carousel/Carousel.jsx";
import HomeCard from "../Components/Cards/HomeCard.jsx";
import UseNavPages from "../Hooks/UseNavPages.js";
import ygo from "../assets/ygo.jpg";

const slideItem = [ygo, ygo, ygo];
//images to big for categoryItem!!
const categoryItem = [
  {
    id: 0,
    imageURL:
      "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "Digimon",
    description: "asas",
    path: "Digimon",
  },
  {
    id: 1,
    imageURL:
      "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "Magic: The Gathering",
    description: "asas",
    path: "Magic",
  },
  {
    id: 2,
    imageURL:
      "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "Pokemon",
    description: "asas",
    path: "Pokemon",
  },
  {
    id: 3,
    imageURL:
      "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "Yu-Gi-Oh!",
    description: "asas",
    path: "YuGiOh",
  },
];

function Home() {
  /*
  Main page of the website  
  */
  return (
    <section className="w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 md:pt-40 lg:pt-32 px-5">
      {/* Slider */}
      <header className="w-[100%] m-auto ">
        <Carousel slides={slideItem} autoSlide={true} />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 my-6 place-items-center sm:place-items-stretch">
        {categoryItem.map((it) => (
          <button key={it.id} onClick={UseNavPages(`/${it.path}`)}>
            <HomeCard
              image={it.imageURL}
              title={it.title}
              description={it.description}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Home;
