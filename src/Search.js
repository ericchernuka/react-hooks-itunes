import React from "react";
import useFormInput from "./hooks/useFormInput";

const Search = ({ onSearch, searchTerm }) => {
  const searchInput = useFormInput(searchTerm);

  function handleSearch(e) {
    e.preventDefault();
    onSearch(searchInput.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <label>Artist</label>
      <input type="text" {...searchInput} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
