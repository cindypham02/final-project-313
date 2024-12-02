import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container relative">
      <div className="carousel-inner">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="carousel-image"
        />
      </div>
      <button
        onClick={prevSlide}
        className="carousel-button carousel-prev"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="carousel-button carousel-next"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;

