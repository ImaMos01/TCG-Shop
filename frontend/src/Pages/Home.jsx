import Carousel from "../Components/Carousel/Carousel.jsx";
import HomeCard from "../Components/Cards/HomeCard.jsx";
import ygo from "../assets/ygo.jpg";

const slideItem = [ygo, ygo, ygo];
//images to big for categoryItem!!
const categoryItem = [
  {
    id: 0,
    url: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "yu gi oh",
    description: "asas",
  },
  {
    id: 1,
    url: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "yu gi oh",
    description: "asas",
  },
  {
    id: 2,
    url: "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/categories/YGOPhantNightFPButton.jpg",
    title: "yu gi oh",
    description: "asas",
  },
];

function Home() {
  /*
  Main page of the website  
  */
  return (
    <section className="w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 md:pt-40 lg:pt-32 px-5">
      <header className="w-[100%] m-auto ">
        <Carousel slides={slideItem} autoSlide={true} />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 my-6 place-items-center sm:place-items-stretch">
        {categoryItem.map((it) => (
          <HomeCard
            key={it.id}
            url={it.url}
            title={it.title}
            description={it.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
