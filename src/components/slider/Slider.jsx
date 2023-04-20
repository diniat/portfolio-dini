import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SliderCard from "./SliderCard";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section id="proyectos">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-4xl font-bold text-center p-4">Proyectos</h1>
        <div className="relative flex justify-center p-4">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <FaArrowCircleLeft
                  color="black"
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
                {index === current && <SliderCard key={index} {...slide} />}
                <FaArrowCircleRight
                  color="black"
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                  size={50}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
