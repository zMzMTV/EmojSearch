import React, { useState } from "react";

const Line = ({ emoji }) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(emoji.symbol);
      }}
      className="line"
    >
      <span>
        {emoji.symbol} {emoji.title}
      </span>
      {hoverLine && <p className="copy-span">Click to copy !</p>}
    </div>
  );
};

export default Line;
