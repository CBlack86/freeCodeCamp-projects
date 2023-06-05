import "./styles.css";

const WorkController = ({
  time,
  setTime,
  increaseWorkTime,
  decreaseWorkTime,
  timeRunning,
  setCurrentTime,
  setMin,
  workTime,
  setWorkTime,
  timerType
}) => {
  const handleWorkIncrease = () => {
    if (workTime <= 59) {
      if (timerType === "work") {
        setTime(workTime + 1);
        setWorkTime(workTime + 1);
      } else setWorkTime(workTime + 1);
    } else return;
  };
  const handleWorkDecrease = () => {
    if (timeRunning === false) {
      if (workTime >= 1) {
        setWorkTime(workTime - 1);
      } else return;
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
