import { React, useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Emoji Finder</h1>
      <div className="search">
        <input
          onChange={inputHandler}
          placeholder="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;