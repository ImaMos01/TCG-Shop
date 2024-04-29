import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Carousel({ slides, autoSlide = false, autoslideInterval = 7000 }) {
  /**
  Slider for the main page where it show images of the products and the user can iteract with

  Args:
    slides = Array that contain the images
    autoslide = Activate the auto slide
    autoslideInterval = Interval of time of the slide translation in the auto translation
   
  Return: 
    Slider with next and previous buttons and an auto slider
  */

  const [curr, setCurr] = useState(0);

  //move images buttons
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  //slide after 6 sec
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      {/*Images */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((it) => (
          <img key={it.id} src={it.img_URL_carrousel} alt={it.name} />
        ))}
      </div>

      {/*Buttons for next and prev image */}
      <div className="absolute inset-0 flex items-center justify-between p-4 dark:text-gray-900">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white"
          aria-label="Previous image"
        >
          <FaChevronLeft className="size-6" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white"
          aria-label="Next image"
        >
          <FaChevronRight className="size-6" />
        </button>
      </div>

      {/*Bottom indicator  */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              onClick={() => {
                setCurr(index);
              }}
              key={index}
              className={`transition-all w-3 h-3 bg-orange-500 rounded-full ${
                curr === index ? "p-2" : "bg-white"
              }`}
              aria-label="Change image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array,
  autoSlide: PropTypes.bool,
  autoslideInterval: PropTypes.number,
};
export default Carousel;
