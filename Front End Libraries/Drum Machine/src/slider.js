import React, { useState } from "react";
import "./styles.css";

function Slider() {
  const [inputVal, setInputVal] = useState(50);

  const getVal = () => {
    let thisVal = document.getElementById("myRange").value;
    setInputVal(thisVal);
  };
  return (
    <>
      <section className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value={inputVal}
          className="slider"
          id="myRange"
          onInput={getVal}
        />
      </section>
      <h4>Volume : {inputVal}</h4>
    </>
  );
}
export default Slider;
