import styled from "styled-components";

const StyledDropdownMenu = styled.ul`
  .dropdown-item {
    display: table;
    width: 100%;
    padding: 0.5rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #222629;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    font-size: 14px;

    button {
      display: flex;
      align-items: center;
      color: rgb(73, 80, 87);
      text-decoration: none;
      transition: all 0.4s ease-in 0s;
    }

    span {
      padding-left: 8px;
    }

    svg {
      fill: rgb(73, 80, 87);
      height: 20px;
      width: 20px;
    }
  }
`;

export default StyledDropdownMenu;
