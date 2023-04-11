import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [hasDecimal, setHasDecimal] = useState(false);
  const ops = ["/", "*", "-", "+"];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    const button = keyMap[event.key];
    if (button) {
      event.preventDefault();
      handleClick(button);
    }
  };

  const handleClick = (button) => {
    switch (button) {
      case "0":
        if (button === "0" && input === "0") return;
        setInput(input + button);
        break;
      case ".":
        if (hasDecimal) return;
        setHasDecimal(true);
        setInput(input + button);
        break;
      case "AC":
        setInput("");
        setOperator(null);
        setHasDecimal(false);
        break;
      case "+/-":
        setInput(-input);
        setHasDecimal(false);
        break;
      case "+":
        if (input === "") return;
        if (ops.includes(input.slice(-1))) {
          let newInput = input.replace(-1, "+");
          setInput(newInput + button);
          console.log(newInput);
        }

        setOperator(button);
        setInput(input + button);
        setHasDecimal(false);
        break;

      case "-":
        setInput(input + button);
        setOperator(button);
        setHasDecimal(false);
        break;
      case "*":
        if (input === "") return;
        setOperator(button);
        setInput(input + button);
        setHasDecimal(false);
        break;
      case "/":
        if (input === "") return;
        /*if (ops.includes(button) && ops.includes(input.slice(-1))) return;*/
        /* Makes it so that you cannot enter two operators in a row */
        setOperator(button);
        setInput(input + button);
        setHasDecimal(false);
        break;
      case "=":
        if (input === "" || ops.includes(input.slice(-1))) return;
        let answer = eval(input).toFixed(4).toString();
        let finalAnswer = parseFloat(answer);
        setInput(finalAnswer);
        break;
      default:
        setInput(input + button);
    }
  };

  const keyMap = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    "=": "=",
    Enter: "=",
    Backspace: "AC",
    ".": "."
  };

  return (
    <div className="App">
      <div className="container">
        <div className="display" id="display">
          <span className="output">{input || 0} </span>
        </div>
        <div className="buttons">
          <button
            onClick={() => handleClick("AC")}
            className="clear"
            id="clear"
          >
            A/C
          </button>
          <button
            onClick={() => handleClick("/")}
            value="/"
            className="operator"
            id="divide"
            onKeyDown={handleKeyDown}
          >
            /
          </button>
          <button
            onClick={() => handleClick("*")}
            value="*"
            className="operator"
            id="multiply"
          >
            *
          </button>

          <button onClick={() => handleClick("7")} value="7" id="seven">
            7
          </button>
          <button onClick={() => handleClick("8")} value="8" id="eight">
            8
          </button>
          <button onClick={() => handleClick("9")} value="9" id="nine">
            9
          </button>
          <button
            onClick={() => handleClick("-")}
            value="-"
            className="operator"
            id="subtract"
          >
            -
          </button>

          <button onClick={() => handleClick("4")} value="4" id="four">
            4
          </button>
          <button onClick={() => handleClick("5")} value="5" id="five">
            5
          </button>
          <button onClick={() => handleClick("6")} value="6" id="six">
            6
          </button>
          <button
            onClick={() => handleClick("+")}
            value="+"
            className="operator"
            id="add"
          >
            +
          </button>

          <button onClick={() => handleClick("1")} value="1" id="one">
            1
          </button>
          <button onClick={() => handleClick("2")} value="2" id="two">
            2
          </button>
          <button onClick={() => handleClick("3")} value="3" id="three">
            3
          </button>
          <button
            onClick={() => handleClick("=")}
            className="equals"
            id="equals"
          >
            =
          </button>

          <button onClick={() => handleClick("0")} value="0" id="zero">
            0
          </button>
          <button onClick={() => handleClick(".")} value="." id="decimal">
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
