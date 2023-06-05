import "./styles.css";
import React, { useEffect } from "react";

const Timer = ({
  timerType,
  time,
  timeRunning,
  timerId,
  setTime,
  setTimeRunning,
  workTime,
  breakTime,
  setTimerId,
  setTimerType,
  sec,
  setSec,
  min,
  setMin,
  setWorkTime,
  setBreakTime
}) => {
  /*const handleStartStop = () => {
    setTimeRunning(!timeRunning);
  };*/

  useEffect(() => {
    let interval = null;
    let initialTime = `${String(workTime).padStart(2, "0")}:00`;

    if (timeRunning) {
      interval = setInterval(() => {
        const minutes = parseInt(time.split(":")[0], 10);
        const seconds = parseInt(time.split(":")[1], 10);

        if (minutes === 0 && seconds === 0) {
          clearInterval(interval);
          if (timerType === "work") {
            setTimerType("break");
            initialTime = `${String(breakTime).padStart(2, "0")}:00`;
          } else {
            setTimerType("work");
            initialTime = `${String(workTime).padStart(2, "0")}:00`;
          }
          setTime(initialTime);
          setTimeRunning(false);
        } else {
          let newMinutes = minutes;
          let newSeconds = seconds;

          if (seconds === 0) {
            newMinutes = minutes - 1;
            newSeconds = 59;
          } else {
            newSeconds = seconds - 1;
          }

          setTime(
            `${newMinutes < 10 ? "0" + newMinutes : newMinutes}:${
              newSeconds < 10 ? "0" + newSeconds : newSeconds
            }`
          );
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRunning, time, timerType, workTime, breakTime]);

  const handleStartStop = () => {
    setTimeRunning((prevState) => !prevState);
  };
  const incrementWorkDuration = () => {
    if (!timeRunning) {
      setWorkTime((prevDuration) => {
        const updatedDuration = prevDuration + 1;
        if (timerType === "work") {
          setTime(`${String(updatedDuration).padStart(2, "0")}:00`);
        }
        return updatedDuration;
      });
    }
  };

  const decrementWorkDuration = () => {
    if (!timeRunning) {
      setWorkTime((prevDuration) => {
        const updatedDuration =
          prevDuration > 1 ? prevDuration - 1 : prevDuration;
        if (timerType === "work") {
          setTime(`${String(updatedDuration).padStart(2, "0")}:00`);
        }
        return updatedDuration;
      });
    }
  };
  const incrementBreakDuration = () => {
    if (!timeRunning) {
      setBreakTime((prevDuration) => {
        const updatedDuration = prevDuration + 1;
        if (timerType === "break") {
          setTime(`${String(updatedDuration).padStart(2, "0")}:00`);
        }
        return updatedDuration;
      });
    }
  };

  const decrementBreakDuration = () => {
    if (!timeRunning) {
      setBreakTime((prevDuration) => {
        const updatedDuration =
          prevDuration > 1 ? prevDuration - 1 : prevDuration;
        if (timerType === "break") {
          setTime(`${String(updatedDuration).padStart(2, "0")}:00`);
        }
        return updatedDuration;
      });
    }
  };
  /*if (timeRunning === true) {
      const interval = setInterval(() => {
        clearInterval(interval);
        if (sec === 0) {
          if (min !== 0) {
            setSec(59);
            setMin(min - 1);
          } else {
            if (timerType === "Work") {
              setTimerType("Break");
              setMin(breakTime);
              setSec(0);
            } else {
              setTimerType("Work");
              setMin(workTime);
              setSec(0);
            }
          }
        } else {
          if (timerType === "Work") {
            setMin(workTime);
            setSec(sec - 1);
          } else {
            setMin(breakTime);
            setSec(sec - 1);
          }
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [sec, timeRunning]); */
  /*const handleClick = () => {
    if (timeRunning === false) {
      setTimeRunning(true);
    } else {
      setTimeRunning(false);
    }
  };*/

  /* const timerMinutes = min < 10 ? `0${min}` : min;
  const timerSeconds = sec < 10 ? `0${sec}` : sec;*/

  return (
    <>
      <div className="timer">
        <span className="countDown">
          {timerType === "work" ? "Work Timer" : "Break Timer"}
        </span>
        <span className="countDown">{time}</span>
        <button onClick={handleStartStop}>
          {timeRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div>
        <button onClick={incrementWorkDuration}>+</button>
        <div>Work Duration: {workTime}:00</div>
        <button onClick={decrementWorkDuration}>-</button>
      </div>
      <div>
        <button onClick={incrementBreakDuration}>+</button>
        <div>Break Duration: {breakTime}:00</div>
        <button onClick={decrementBreakDuration}>-</button>
      </div>
    </>
  );
};
export default Timer;
