import React, { useState } from "react";
import "./Carousel.css"; // Assuming you have CSS styles here

function Carousel1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    "img/technologies/1.png",
    "img/technologies/2.png",
    "img/technologies/3.png",
    "img/technologies/4.png",
  ];

  // Handle the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container2">
      {/* First Div: Text and Image */}
      <div className="box">
        <h2>Image Size & Quality Matter</h2>
        <p>
          For Mobile Users, we provide a responsive design to improve the
          website experience, making it easier to view and quick to access,
          just like browsing on a PC.
        </p>
        <img src="img/gif/15e.gif" alt="About Us Image" />
      </div>

      {/* Second Div: Image Carousel */}
      <div className="box carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          ❮
        </button>
        <div className="carousel-wrapper">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Third Div: Text */}
      <div className="box">
        <h2>New Automated Technology</h2>
        <p>
          In software development, we should automate parts of the process to
          leverage the organizational strength of a great developer.
        </p>
        <img src="img/gif/16e.gif" alt="About Us Image" />
      </div>
    </div>
  );
}

export default Carousel1;
