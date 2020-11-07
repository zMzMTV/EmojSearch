import React, { useState } from "react";
import "./App.css";
import emojiList from "./assets/emojiList.json";
import Line from "./components/Line";
import Search from "./components/Search";

function App() {
  const [results, setResults] = useState(emojiList.slice(0, 20));

  const handleChange = (event) => {

    const value = event.target.value;
    const newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (emojiList[i].keywords.indexOf(value) !== -1) {
        if (newResults.length >= 20) {
          break;
        } else {
          newResults.push(emojiList[i]);
        }
      }
    }
    setResults(newResults);
  };



  return (
    <div className="container">
      <Search handleChange={handleChange} />
      {results.map((emoji, index) => {
        return <Line key={index} emoji={emoji} />;
      })}
    </div>
  );
}

export default App;
