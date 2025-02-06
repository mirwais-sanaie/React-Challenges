import { useState } from "react";
import "./slider.css";
// import { useEffect } from "react";

function SliderCopy() {
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
  const [currentImg, setCurrrentImg] = useState(0);
  // const [autoPlay, setAutoPlay] = useState(true);

  function handlePrev() {
    setCurrrentImg((currentImg) =>
      currentImg === 0 ? images.length - 1 : currentImg - 1
    );
  }

  function handleNext() {
    setCurrrentImg((currentImg) =>
      currentImg === images.length - 1 ? 0 : currentImg + 1
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-images">
        <img
          className="carousel-image"
          src={images[currentImg].src}
          alt={images[currentImg].alt}
        />
      </div>

      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>

      <div className="indicators">
        {images.map((image, index) => (
          <span
            key={image.alt}
            className={`indicator ${index === currentImg ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderCopy;
