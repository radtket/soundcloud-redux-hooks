import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import StyledSearchBar from "../styles/SearchBar";
import { IconSearch } from "./Icons";

// Actions
import searchActions from "../../store/search/actions";

const { navigateToSearch } = searchActions;

const SearchBar = () => {
  const input = useRef(null);
  const searchBar = useRef(null);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <StyledSearchBar
      ref={searchBar}
      noValidate
      onSubmit={e => {
        e.preventDefault();
        dispatch(navigateToSearch(value.trim()));
        setValue("");
      }}
      role="search"
    >
      <input
        ref={input}
        autoComplete="off"
        className="search-input"
        maxLength="60"
        onChange={({ target }) => {
          setValue(target.value);
        }}
        placeholder="Search"
        {...{ value }}
        type="text"
      />
      <button className="search-button" type="submit">
        <IconSearch />
      </button>
    </StyledSearchBar>
  );
};

export default SearchBar;
