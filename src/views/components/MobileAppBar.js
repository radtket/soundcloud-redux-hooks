import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconComment } from "./Icons";

const StyledMobileAppBar = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* width: 100%; */
  color: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #303033;

  @media only screen and (min-width: 650px) {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;

    a {
      will-change: color;
      -webkit-transition: color 170ms ease-out;
      transition: color 170ms ease-out;
      display: inline-block;
      margin: 0 0.25rem;
      padding: 14px;
      text-decoration: none;

      svg {
        fill: rgba(255, 255, 255, 0.5);
        display: block;
        height: 24px;
      }
    }
  }
`;

const MobileAppBar = () => {
  return (
    <StyledMobileAppBar>
      <div>
        <Link to="/">
          <IconComment />
        </Link>
        <Link to="/">
          <IconComment />
        </Link>
        <Link to="/">
          <IconComment />
        </Link>
        <Link to="/">
          <IconComment />
        </Link>
      </div>
    </StyledMobileAppBar>
  );
};

export default MobileAppBar;
