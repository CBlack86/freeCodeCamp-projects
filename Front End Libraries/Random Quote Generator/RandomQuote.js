import { useState } from "react";

const RandomQuote = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
  };
  return { randomNumber, generateRandomNumber };
  /* return (
    <div className="ui-container">
      <div id="text">{quotes[randomNumber].quote}</div>
      <div id="author">{quotes[randomNumber].author}</div>
      <button onClick={generateRandomNumber}>New Quote</button>
    </div>
  );*/
};
export default RandomQuote;
