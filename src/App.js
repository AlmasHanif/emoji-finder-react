import { React, useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    console.log(e)
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    // console.log(lowerCase , "lower")
  };

  return (
    <div className="">
      <div className="container mx-auto w-50 mt-5">
      <h1 className="text-center mb-3">Emoji Finder</h1>
      
        <input type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={inputHandler}
          value={inputText}
          placeholder="Search" />

      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;