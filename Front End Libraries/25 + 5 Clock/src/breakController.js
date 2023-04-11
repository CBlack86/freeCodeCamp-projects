import "./styles.css";

const BreakController = ({
  breakTime,
  increaseBreakTime,
  decreaseBreakTime,
  timeRunning,
  setCurrentTime
}) => {
  const handleBreakIncrease = () => {
    increaseBreakTime();
    if (timeRunning === false) {
      setCurrentTime({ breakTime });
    }
  };
  const handleBreakDecrease = () => {
    decreaseBreakTime();
    if (timeRunning === false) {
      setCurrentTime({ breakTime });
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
