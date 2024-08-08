"use client";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";

const PriceScale = () => {
  const [value, setValue] = useState([200, 800]);
  return (
    <>
      <p className="xlText font-medium">Pricing scale</p>
      <div className="price-scale w-full">
        <RangeSlider
          value={value}
          onInput={setValue}
          min={0}
          max={1000}
          ariaValuemax
        />
      </div>
      <p className="w-full text-center text-sText">
        ${value[0]} - ${value[1]}
      </p>
    </>
  );
};

export default PriceScale;
