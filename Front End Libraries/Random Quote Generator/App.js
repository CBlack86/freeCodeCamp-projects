import "./styles.css";
import useGenerateRandomColor from "./RandomBG";
import RandomQuote from "./RandomQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const quotes = [
    {
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "-Mother Teresa"
    },
    {
      quote:
        "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "-Franklin D. Roosevelt"
    },
    {
      quote:
        "Always remember that you are absolutely unique. Just like everyone else.",
      author: "-Margaret Mead"
    },
    {
      quote:
        "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      author: "-Robert Louis Stevenson"
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "-Eleanor Roosevelt"
    },
    {
      quote:
        "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "-Benjamin Franklin"
    },
    {
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
      author: "-Helen Keller"
    },
    {
      quote:
        "It is during our darkest moments that we must focus to see the light.",
      author: "-Aristotle"
    },
    {
      quote: "Whoever is happy will make others happy too.",
      author: "-Anne Frank"
    },
    {
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "-Ralph Waldo Emerson"
    }
  ];
  const { color, generateColor } = useGenerateRandomColor();
  const { randomNumber, generateRandomNumber } = RandomQuote();

  return (
    <div
      id="ui-container"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#" + color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        id="quote-box"
        style={{
          backgroundColor: "white",

          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="quote-text">
          <p id="text" style={{ color: "#" + color }}>
            {quotes[randomNumber].quote}
          </p>
          <p id="author" style={{ color: "#" + color }}>
            {quotes[randomNumber].author}
          </p>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
          >
            <i>
              <FontAwesomeIcon icon={faTwitter} />
            </i>
          </a>
          <button
            className="button"
            id="new-quote"
            style={{
              fontSize: "larger"
            }}
            onClick={() => {
              generateColor();
              generateRandomNumber();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
