import "./styles.css";

const BreakController = ({
  breakTime,
  increaseBreakTime,
  decreaseBreakTime,
  timeRunning,
  setCurrentTime,
  setMin,
  setBreakTime,
  timerType,
  min,
  sec
}) => {
  const handleBreakIncrease = () => {
    if (timeRunning === false) {
      if (breakTime <= 59) {
        setBreakTime(breakTime + 1);
      } else return;
    }
  };
  const handleBreakDecrease = () => {
    if (timeRunning === false) {
      if (breakTime >= 1) {
        setBreakTime(breakTime - 1);
      } else return;
    }
  };

  return (
    <div className="timeAdj">
      <h3>Break</h3>
      <button onClick={handleBreakIncrease}>+</button>
      <span>{breakTime}</span>
      <button onClick={handleBreakDecrease}>-</button>
    </div>
  );
};
export default BreakController;
