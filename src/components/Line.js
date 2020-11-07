import React from "react";

const Line = ({ emoji }) => {
  return (
    <>
      <div className="line container" onClick={() => {
        navigator.clipboard.writeText(emoji.symbol).then(() => {
          alert("Copied !");
        })
      }}>
      <span >
      {emoji.symbol} {emoji.title} <p>Click to copy !</p> 
      </span>
      </div>
    </>
  );
};

export default Line;
