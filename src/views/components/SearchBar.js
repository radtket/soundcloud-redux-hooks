import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StyledSearchBar from "../styles/SearchBar";
import { IconSearch } from "./Icons";

const SearchBar = () => {
  const { push } = useHistory();
  const [query, setQuery] = useState("");

  return (
    <StyledSearchBar
      noValidate
      onSubmit={e => {
        e.preventDefault();
        push({
          pathname: `/search`,
          search: `?q=${query && query.trim()}`,
        });
        setQuery("");
      }}
      role="search"
    >
      <input
        autoComplete="off"
        className="search-input"
        maxLength="60"
        onChange={({ target }) => {
          setQuery(target.value);
        }}
        placeholder="Search"
        type="text"
        value={query}
      />
      <button className="search-button" type="submit">
        <IconSearch />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
