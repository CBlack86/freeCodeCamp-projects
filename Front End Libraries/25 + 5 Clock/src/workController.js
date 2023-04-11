import "./styles.css";

const WorkController = ({
  workTime,
  increaseWorkTime,
  decreaseWorkTime,
  timeRunning,
  setCurrentTime
}) => {
  const handleWorkIncrease = () => {
    increaseWorkTime();
    if (timeRunning === false) {
      setCurrentTime({ workTime });
    }
  };
  const handleWorkDecrease = () => {
    decreaseWorkTime();
    if (timeRunning === false) {
      setCurrentTime({ workTime });
    }
  };

  return (
    <div className="timeAdj">
      <h3>Work</h3>
      <button onClick={handleWorkIncrease}>+</button>
      <span>{workTime}</span>
      <button onClick={handleWorkDecrease}>-</button>
    </div>
  );
};
export default WorkController;
