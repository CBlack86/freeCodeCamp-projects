import "./styles.css";
import React, { useState } from "react";
import Timer from "./timer.js";
import WorkController from "./workController.js";
import BreakController from "./breakController.js";

export default function App() {
  const [timerType, setTimerType] = useState("work");
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timeRunning, setTimeRunning] = useState(false);
  const [time, setTime] = useState("2:00");
  const [timerId, setTimerId] = useState(0);
  const [min, setMin] = useState(workTime);
  const [sec, setSec] = useState(0);

  const increaseWorkTime = () => {
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
  };

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
        <WorkController
          time={time}
          workTime={workTime}
          increaseWorkTime={increaseWorkTime}
          decreaseWorkTime={decreaseWorkTime}
          timeRunning={timeRunning}
          setTime={setTime}
          min={min}
          setMin={setMin}
          setWorkTime={setWorkTime}
        />

        <BreakController
          breakTime={breakTime}
          increaseBreakTime={increaseBreakTime}
          decreaseBreakTime={decreaseBreakTime}
          timeRunning={timeRunning}
          setTime={setTime}
          setMin={setMin}
          setBreakTime={setBreakTime}
          timerType={timerType}
        />
      </div>
    </div>
  );
}
