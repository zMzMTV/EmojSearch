import React, { useState } from "react";
import "./App.css";
import emojiList from "./assets/emojiList.json";
import Line from "./components/Line";
import Search from "./components/Search";

function App() {
  const [results, setResults] = useState(emojiList.slice(0, 50));

  // Function to search in json file if the user is typing either a keyword or a description to display him the results
  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const newResults = [];
    for (let i = 0; i < emojiList.length; i++) {
      if (
        emojiList[i].keywords.indexOf(value) !== -1 ||
        emojiList[i].title.indexOf(value) !== -1
      ) {
        newResults.push(emojiList[i]);
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
