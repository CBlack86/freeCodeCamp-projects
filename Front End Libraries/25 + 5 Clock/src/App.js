import "./styles.css";
import React, { useState } from "react";
import Timer from "./timer.js";
import WorkController from "./workController.js";
import BreakController from "./breakController.js";
import incrementWorkDuration from "./workIncrementButton.js";
import workDecrementButton from "./workDecrementButton.js";
import Reset from "./resetButton.js";

export default function App() {
  const [timerType, setTimerType] = useState("work");
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeRunning, setTimeRunning] = useState(false);
  const [time, setTime] = useState("25:00");
  const [timerId, setTimerId] = useState(0);
  const [min, setMin] = useState(workTime);
  const [sec, setSec] = useState(0);

  /* const increaseWorkTime = () => {
    if (timerType === "Work") {
      setWorkTime(workTime + 1);
    }
  };
  const decreaseWorkTime = () => {
    if (timerType === "Work") {
      setWorkTime(workTime - 1);
    }
  };
  const increaseBreakTime = () => {
    setBreakTime(breakTime + 1);
  };
  const decreaseBreakTime = () => {
    setBreakTime(breakTime - 1);
  };*/

  return (
    <div className="App">
      <h1>POMODORO CLOCK</h1>
      <Timer
        timerType={timerType}
        time={time}
        timeRunning={timeRunning}
        timerId={timerId}
        setTime={setTime}
        setTimeRunning={setTimeRunning}
        workTime={workTime}
        breakTime={breakTime}
        setTimerId={setTimerId}
        setTimerType={setTimerType}
        min={min}
        setMin={setMin}
        sec={sec}
        setSec={setSec}
        setWorkTime={setWorkTime}
        setBreakTime={setBreakTime}
      />
      <div>
        <Reset
          setWorkTime={setWorkTime}
          setBreakTime={setBreakTime}
          setTimerType={setTimerType}
          setTime={setTime}
        />
      </div>
    </div>
  );
}
