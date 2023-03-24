import React, { useState } from "react";
import "./styles.css";
import Switch from "./switch";
import Slider from "./slider.js";

export default function Display() {
  return (
    <div className="drum-machine">
      <div className="controls">
        <div className="display">
          <div className="volume">
            <div>
              <Slider />
            </div>
          </div>
          <div className="powerSwitch">
            <Switch label="Power" />
          </div>
        </div>
      </div>
    </div>
  );
}
