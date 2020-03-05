import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { cover, size } from "polished";
import IconButton from "./IconButton";
import { IconClose } from "./Icons";

const StyledSearchMobile = styled.header`
  ${cover()};
  ${size("100%")};
  z-index: 100;
  transform: translateY(100%);
  opacity: 0;
  overflow: hidden;
  background: #262728;
  transition: all 0.3s;

  .container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    transition: height 0.16s ease-in-out;
  }

  .search-form__input {
    outline: none;
    border: 0;
    padding: 0;
    width: 100%;
    height: 65px;
    color: #f0f0f0;
    font-family: inherit;
    font-size: 1.875rem;
    font-weight: 300;
    background: transparent;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  button {
    svg {
      fill: #f0f0f0;
    }
  }
`;

const SearchMobile = ({ isMobileSearchOpen, setMobileSearchOpen }) => {
  const { push } = useHistory();
  const [query, setQuery] = useState("");
  return (
    <StyledSearchMobile
      style={{
        opacity: isMobileSearchOpen ? 1 : 0,
        transform: isMobileSearchOpen ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="container">
        <form
          className="search-form"
          noValidate
          onSubmit={e => {
            e.preventDefault();
            push({
              pathname: `/search`,
              search: `?q=${query && query.trim()}`,
            });
            setQuery("");
            setMobileSearchOpen(false);
          }}
          role="search"
        >
          <input
            autoComplete="off"
            className="search-form__input"
            maxLength="60"
            onChange={({ target }) => {
              setQuery(target.value);
            }}
            placeholder="Search"
            type="text"
            value={query}
          />
        </form>
        <IconButton onClick={() => setMobileSearchOpen(false)}>
          <IconClose />
        </IconButton>
      </div>
    </StyledSearchMobile>
  );
};

export default SearchMobile;
