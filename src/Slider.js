import React from "react";

export default function Slider(props) {
  const { min, max, value, handleChange } = props;
  return (
    <div className="slider-container">
      <input
        type="range"
        className="slider"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
      />
    </div>
  );
}
