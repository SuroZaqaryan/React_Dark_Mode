import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from 'react-dom';

export default function App() {
  const [color, setColor] = useState(localStorage.getItem("color"));


  useEffect(() => {
    localStorage.setItem('color', color);
  });

  const changeBg = (backgroundColor) => {
    localStorage.setItem('color', backgroundColor);
    setColor(backgroundColor)
  };

  return (
    <div style={{ backgroundColor: color }}>
      <div>
        <label>
          <input
            onChange={() => changeBg("green")}
            type="radio"
            name="background"
          />{" "}
        Green
      </label>
        <label>
          <input
            onChange={() => changeBg("red")}
            type="radio"
            name="background"
          />{" "}
        Red
      </label>
        <label>
          <input
            onChange={() => changeBg("blue")}
            type="radio"
            name="background"
          />{" "}
        Blue
      </label>
      </div>
    </div>
  );
}