import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
      >
        <div className="slider-circles">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-circle ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;