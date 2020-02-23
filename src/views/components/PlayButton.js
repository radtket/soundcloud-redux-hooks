import React from "react";
import styled from "styled-components";
import { size } from "polished";
import { IconPlay } from "./Icons";

const StyledPlayHoverButton = styled.button`
  ${size("60px")};
  background-color: transparent;
  border-radius: 100%;
  border: none;
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  margin: 0;
  opacity: 1;
  outline: none;
  overflow: visible;
  position: relative;
  text-align: center;
  transform: translateY(0) scale(1);
  transition: transform 0.9s ease 0.35s, opacity 0.9s ease 0.35s;
  visibility: visible;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
  }

  &:before {
    ${size("100%")};
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(17, 21, 23, 0.3);
    border-color: #ef0d33;
    border-radius: 100%;
    border-style: solid;
    border-width: 2px;
    transition: background-color 0.3s ease, transform 0.3s ease,
      border-color 0.3s ease;

    @media screen and (min-width: 64em) {
      border-width: 4px;
    }
  }

  @media screen and (min-width: 48em) {
    ${size("80px")};
  }

  @media screen and (min-width: 64em) {
    ${size("120px")};
  }

  &:hover {
    &:before {
      transform: scale(1.2);
      background-color: rgba(17, 21, 23, 0.8);
      border-color: #fff;
    }

    svg {
      fill: #fff;
    }
  }

  svg {
    ${size("16px")};
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate3d(-40%, -50%, 0);
    transition: color 0.3s ease;
    fill: #ef0d33;

    @media screen and (min-width: 48em) {
      ${size("24px")};
      font-size: 24px;
    }

    @media screen and (min-width: 64em) {
      ${size("32px")};
      font-size: 32px;
    }
  }

  .sr-only {
    ${size("1px")};
    position: absolute;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const PlayHoverButton = () => {
  return (
    <StyledPlayHoverButton type="button">
      <IconPlay />
      <span className="sr-only">Play</span>
    </StyledPlayHoverButton>
  );
};

export default PlayHoverButton;
