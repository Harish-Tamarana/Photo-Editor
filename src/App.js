import { useState } from "react";

import "./App.css";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = options[selectedIndex];
  function handleInputChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedIndex) {
          return option;
        }
        console.log("value");

        console.log(target.value);
        return { ...option, value: target.value };
      });
    });
  }
  function getImageFunction() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    console.log(filters.join(" "));

    return { filter: filters.join(" ") };
  }
  return (
    <>
      <div className="container">
        <div className="main-image" style={getImageFunction()} />
        <div className="sidebar">
          {options.map((option, index) => {
            return (
              <Sidebar
                name={option.name}
                key={index}
                active={index === selectedIndex}
                handleChange={() => {
                  setSelectedIndex(index);
                }}
              />
            );
          })}
        </div>
        <Slider
          value={selectedOption.value}
          max={selectedOption.range.max}
          min={selectedOption.range.min}
          handleChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default App;
