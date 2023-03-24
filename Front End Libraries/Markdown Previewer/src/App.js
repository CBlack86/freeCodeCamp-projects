import "./styles.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function App() {
  const placeHolder =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
  const [mdInput, setInput] = useState(placeHolder);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const clearInput = () => {
    setInput("");
  };
  const resetInput = () => {
    setInput(placeHolder);
  };

  return (
    <div className="ui-container">
      <div className="row mt-4">
        <div className="col text-center">
          <h1>
            <div className="text-align-center">Markdown Previewer</div>
          </h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>
            <div className="text-align-center">Markdown Editor</div>
          </h2>
          <textarea
            className="input"
            id="editor"
            value={mdInput}
            onChange={handleChange}
          ></textarea>
          <button id="clear" onClick={clearInput} className="btn btn-primary">
            Clear
          </button>
          <button id="reset" onClick={resetInput} className="btn btn-primary">
            Reset
          </button>
        </div>

        <div className="col-md-6">
          <h2>
            <div className="text-align-center">Previewer</div>
          </h2>

          <div className="preview" id="preview">
            <div id="output">
              <ReactMarkdown children={mdInput} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
