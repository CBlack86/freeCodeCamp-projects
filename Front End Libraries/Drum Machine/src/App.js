import "./styles.css";
import DrumPad from "./drumPad.js";
import Display from "./display.js";

export default function App() {
  return (
    <div className="drum-machine">
      <div className="header">
        <h1>Drum Machine</h1>
        <div className="controls">
          <div className="hit-pad">
            <DrumPad />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
