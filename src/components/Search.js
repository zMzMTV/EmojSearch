import React from "react";

const Search = ({ handleChange }) => {
  return (
    <>
      <header>
      <h1>😎 Emoji Search 😎</h1> <br />
      <input type="text" placeholder="What emoji are you looking for ? 😁" onChange={handleChange} /> <br />
      </header>
    </>
  );
};

export default Search;