import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../Components/Carousel/Carousel.jsx";
import HomeCard from "../../Components/Cards/HomeCard.jsx";
import UseNavPages from "../../Hooks/UseNavPages.js";

function Home() {
  /*
  Main page of the website  
  */
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/category`);
        const data = await response.data;
        setCategories(data);
      } catch (error) {
        console.error("error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  const navigateToCategory = UseNavPages();

  return (
    <section className="min-h-screen w-full max-w-2xl lg:max-w-4xl mx-auto pt-60 md:pt-40 lg:pt-32 px-5 bg-white shadow-md border rounded border-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-900 dark:shadow-slate-700">
      {/* Slider */}
      <header className="w-[100%] m-auto ">
        <Carousel slides={categories} autoSlide={true} />
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 my-6 place-items-center sm:place-items-stretch">
        {categories.map((it) => (
          <li key={it.id}>
            <button
              onClick={() => navigateToCategory(`/${it.path_name}`)}
              className="w-full h-full"
            >
              <HomeCard
                image={it.img_URL}
                title={it.name}
                description={it.description}
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
