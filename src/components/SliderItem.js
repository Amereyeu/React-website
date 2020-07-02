import React from "react";

function SlideItem({ bike }) {
  return (
    <div className="keen-slider__slide">
      <img
        className="keen-slider__slide__image"
        src={bike.image}
        alt={bike.subtitle}
      />

      <h2 className="keen-slider__slide__title">{bike.title}</h2>
      <h3 className="keen-slider__slide__subtitle">{bike.subtitle}</h3>
    </div>
  );
}

export default SlideItem;
