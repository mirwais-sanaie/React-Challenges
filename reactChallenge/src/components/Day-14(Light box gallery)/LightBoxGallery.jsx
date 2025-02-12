/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./LightboxGallery.css";

const images = [
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1025/800/600",
  "https://picsum.photos/id/1035/800/600",
  "https://picsum.photos/id/1040/800/600",
  "https://picsum.photos/id/1042/800/600",
  "https://picsum.photos/id/1044/800/600",
  "https://picsum.photos/id/1045/800/600",
  "https://picsum.photos/id/1047/800/600",
];

function LightBoxGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  function handleOpen(index) {
    setIsOpen(true);
    setActiveImage(index);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handlePrev() {
    setActiveImage((prev) =>
      setActiveImage(prev === 0 ? images.length - 1 : prev - 1)
    );
  }
  function handleNext() {
    setActiveImage((prev) =>
      setActiveImage(prev === images.length - 1 ? 0 : prev + 1)
    );
  }
  return (
    <div>
      {/* gallery of images  */}
      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => handleOpen(index)}
            className="thumbnail"
          />
        ))}
      </div>
      {/* opened images */}

      {isOpen && (
        <div className="lightbox-overlay" onClick={handleClose}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleClose} className="close-btn">
              &times;
            </button>
            <img className="lightbox-image" src={images[activeImage]} alt="" />
            <button onClick={handlePrev} className="nav-btn prev-btn">
              &lt;
            </button>
            <button onClick={handleNext} className="nav-btn next-btn">
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LightBoxGallery;
