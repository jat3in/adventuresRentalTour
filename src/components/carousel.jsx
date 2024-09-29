import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(images);
  return (
    <div className="relative w-full md:h-[calc(100vh-8rem)] h-[380px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={images[currentIndex]}
          alt="Carousel"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-40">
          <h1 className="md:text-5xl text-xl font-semibold text-white md:py-6 pb-2 max-w-xl">
            Let's journey and discover a place.
          </h1>
          <p className="text-white/80 md:max-w-2xl max-w-xs md:text-base text-sm px-4">
            Life is unpredictable, and we understand that plans might change.
            Enjoy flexible booking options, so you can reschedule or modify your
            trip with ease.
          </p>
          <button className="bg-[#FFDA32] md:py-2 md:px-4 px-2 py-1 rounded-lg text-white font-semibold mt-3">
           <a href="/"> Book an Enquiry </a>
          </button>
        </div>
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={prevImage}
      >
        <FaChevronLeft className="text-white lg:text-4xl text-2xl" />
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer"
        onClick={nextImage}
      >
        <FaChevronRight className="text-white lg:text-4xl text-2xl" />
      </div>
    </div>
  );
};

export default Carousel;
