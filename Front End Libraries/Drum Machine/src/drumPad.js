import "./styles.css";
import React, { useState } from "react";
import Slider from "./slider.js";

export default function DrumPad() {
  const tracks = [
    { title: "Heater 1", id: "Q", keycode: 81, audioSrc: "/Heater-1.mp3" },
    { title: "Heater 2", id: "W", keycode: 87, audioSrc: "/Heater-2.mp3" },
    { title: "Heater 3", id: "E", keycode: 69, audioSrc: "/Heater-3.mp3" },
    { title: "Heater 4", id: "A", keycode: 65, audioSrc: "/Heater-4.mp3" },
    { title: "Clap", id: "S", keycode: 83, audioSrc: "/Clap.mp3" },
    {
      title: "Closed High Hat",
      id: "D",
      keycode: 68,
      audioSrc: "/Closed-HH.mp3"
    },
    { title: "Kick", id: "Z", keycode: 90, audioSrc: "/Kick.mp3" },
    { title: "Kick-n-hat", id: "X", keycode: 88, audioSrc: "/Kick_n_Hat.mp3" },
    { title: "Open High Hat", id: "C", keycode: 67, audioSrc: "/Open-HH.mp3" }
  ];
  const [display, setDisplay] = useState("");

  const drumPadQ = () => {
    new Audio(tracks[0].audioSrc).play();
    setDisplay(tracks[0].title);
  };
  const drumPadW = () => {
    new Audio(tracks[1].audioSrc).play();
    setDisplay(tracks[1].title);
  };
  const drumPadE = () => {
    new Audio(tracks[2].audioSrc).play();
    setDisplay(tracks[2].title);
  };
  const drumPadA = () => {
    new Audio(tracks[3].audioSrc).play();
    setDisplay(tracks[3].title);
  };
  const drumPadS = () => {
    new Audio(tracks[4].audioSrc).play();
    setDisplay(tracks[4].title);
  };
  const drumPadD = () => {
    new Audio(tracks[5].audioSrc).play();
    setDisplay(tracks[5].title);
  };
  const drumPadZ = () => {
    new Audio(tracks[6].audioSrc).play();
    setDisplay(tracks[6].title);
  };
  const drumPadX = () => {
    new Audio(tracks[7].audioSrc).play();
    setDisplay(tracks[7].title);
  };
  const drumPadC = () => {
    new Audio(tracks[8].audioSrc).play();
    setDisplay(tracks[8].title);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 81) {
      drumPadQ();
    } else if (event.keyCode === 87) {
      drumPadW();
    } else if (event.keyCode === 69) {
      drumPadE();
    } else if (event.keyCode === 65) {
      drumPadA();
    } else if (event.keyCode === 83) {
      drumPadS();
    } else if (event.keyCode === 68) {
      drumPadD();
    } else if (event.keyCode === 90) {
      drumPadZ();
    } else if (event.keyCode === 88) {
      drumPadX();
    } else if (event.keyCode === 67) {
      drumPadC();
    } else {
      return setDisplay("Please select another key");
    }
  };

  return (
    <div>
      <div>
        <div className="topRow">
          <button
            className="drum-pad"
            id="Q"
            onClick={drumPadQ}
            onKeyDown={handleKeyDown}
          >
            Q
          </button>
          <button
            className="drum-pad"
            id="W"
            onClick={drumPadW}
            onKeyDown={handleKeyDown}
          >
            W
          </button>
          <button
            className="drum-pad"
            id="E"
            onClick={drumPadE}
            onKeyDown={handleKeyDown}
          >
            E
          </button>
        </div>
        <div className="midRow">
          <button
            className="drum-pad"
            id="A"
            onClick={drumPadA}
            onKeyDown={handleKeyDown}
          >
            A
          </button>
          <button
            className="drum-pad"
            id="S"
            onClick={drumPadS}
            onKeyDown={handleKeyDown}
          >
            S
          </button>
          <button
            className="drum-pad"
            id="D"
            onClick={drumPadD}
            onKeyDown={handleKeyDown}
          >
            D
          </button>
        </div>
        <div className="bottomRow">
          <button
            className="drum-pad"
            id="Z"
            onClick={drumPadZ}
            onKeyDown={handleKeyDown}
          >
            Z
          </button>
          <button
            className="drum-pad"
            id="X"
            onClick={drumPadX}
            onKeyDown={handleKeyDown}
          >
            X
          </button>
          <button
            className="drum-pad"
            id="C"
            onClick={drumPadC}
            onKeyDown={handleKeyDown}
          >
            C
          </button>
        </div>
      </div>
      <div>
        <h3>{display}</h3>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}
