import "./styles.css";
import React, { useState } from "react";
import Timer from "./timer.js";
import WorkController from "./workController.js";
import BreakController from "./breakController.js";

export default function App() {
  const [timerType, setTimerType] = useState("Work");
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeRunning, setTimeRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState("25 : 00");
  const [timerId, setTimerId] = useState(0);

  const increaseWorkTime = () => {
    setWorkTime(workTime + 1);
  };
  const decreaseWorkTime = () => {
    setWorkTime(workTime - 1);
  };
  const increaseBreakTime = () => {
    setBreakTime(breakTime + 1);
  };
  const decreaseBreakTime = () => {
    setBreakTime(breakTime - 1);
  };

  return (
    <div className="App">
      <h1>POMODORO CLOCK</h1>
      <Timer
        timerType={timerType}
        currentTime={currentTime}
        timeRunning={timeRunning}
        timerId={timerId}
        setCurrentTime={setCurrentTime}
        setTimeRunning={setTimeRunning}
        workTime={workTime}
        breakTime={breakTime}
        setTimerId={setTimerId}
        setTimerType={setTimerType}
      />
      <div>
        <WorkController
          workTime={workTime}
          increaseWorkTime={increaseWorkTime}
          decreaseWorkTime={decreaseWorkTime}
          timeRunning={timeRunning}
          setCurrentTime={setCurrentTime}
        />
        <button onClick={Timer()}>Start/Stop</button>
        <BreakController
          breakTime={breakTime}
          increaseBreakTime={increaseBreakTime}
          decreaseBreakTime={decreaseBreakTime}
          timeRunning={timeRunning}
          setCurrentTime={setCurrentTime}
        />
      </div>
    </div>
  );
}
