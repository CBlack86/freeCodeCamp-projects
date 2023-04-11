import "./styles.css";

const Timer = ({
  timerType,
  currentTime,
  timeRunning,
  timerId,
  setCurrentTime,
  setTimeRunning,
  workTime,
  breakTime,
  setTimerId,
  setTimerType
}) => {
  const startTimer = (duration) => {
    setTimeRunning = true;
    let time = duration * 60;
    let minutes;
    let seconds;
    let runningTimer = setInterval(() => {
      setTimerId(runningTimer);
      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setCurrentTime("{minutes} : {seconds}");
      if (time === 0) {
        if (timerType === "Work") {
          setTimerType("Break");
          setTimeRunning(false);
        }
        clearInterval(timerId);
        startTimer({ breakTime });
      } else {
        setTimerType("Work");
        setTimeRunning(false);
      }
      clearInterval(timerId);
      startTimer({ workTime });
    }, 1000);
  };
  if (timeRunning === true) {
    clearInterval(timerId);
    setCurrentTime("25 : 00");
    setTimeRunning();
  } else {
    timerType === "Work" ? startTimer({ workTime }) : startTimer({ breakTime });
  }

  return (
    <div className="timer">
      <span className="countDown">{timerType}</span>
      <span className="countDown">{currentTime}</span>
    </div>
  );
};
export default Timer;
