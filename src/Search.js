import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    onSearch(inputValue);
  }

  return (
    <form onSubmit={handleSearch}>
      <label>Name:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
