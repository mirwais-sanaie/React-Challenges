import { useState } from "react";
import "./slider.css";
import { useEffect } from "react";

function Slider() {
  const images = [
    {
      src: "https://picsum.photos/id/600/600/400",
      alt: "Forest",
    },
    {
      src: "https://picsum.photos/id/100/600/400",
      alt: "Beach",
    },
    {
      src: "https://picsum.photos/id/200/600/400",
      alt: "Yak",
    },
    {
      src: "https://picsum.photos/id/300/600/400",
      alt: "Hay",
    },
    {
      src: "https://picsum.photos/id/400/600/400",
      alt: "Plants",
    },
    {
      src: "https://picsum.photos/id/500/600/400",
      alt: "Building",
    },
  ];
  return (
    <div className="App">
      <h1>React Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to jump to a specific image
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        goToNext();
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex, isAutoPlay]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsAutoPlay(false)} // Pause on hover
      onMouseLeave={() => setIsAutoPlay(true)} // Resume on mouse leave
    >
      <div className="carousel-images">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
        />
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-button prev" onClick={goToPrevious}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        &gt;
      </button>

      {/* Indicators */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
