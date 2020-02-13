import styled from "styled-components";
import { size, position } from "polished";

const StyledSearchBar = styled.form`
  position: relative;
  ${size("40px", "200px")};
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #898b91;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }

  .search-input {
    ${position("absolute", "10px", "18px", null, "46px")};
    ${size("20px", "140px")};
    appearance: none;
    background: none;
    border: none;
    color: #fff;
    letter-spacing: 0.11px;
    line-height: 1;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.87);
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.87);
    }

    &::-ms-input-placeholder {
      color: rgba(255, 255, 255, 0.87);
    }
  }

  .search-button {
    ${size("20px")};
    ${position("absolute", "10px", null, null, "15px")};
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none !important;
    cursor: pointer;

    svg {
      ${size("20px")};
      fill: #fff;
    }
  }
`;

export default StyledSearchBar;
