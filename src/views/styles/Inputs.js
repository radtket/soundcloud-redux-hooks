import styled from "styled-components";
import { size, position, math } from "polished";
import { StyledIconButton } from "./Buttons";

const thumbHeight = 16;
const trackHeight = "9px";
// f23005
const ACTIVE_STATE_COLOR = "#f23005";
const thumbColor = "#ddd";
const thumbHoverColor = "#ccc";
const lowerColor = "#292929";

const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

export const StyledRangeSlider = styled.label`
  input {
    ${size(trackHeight, "100%")}
    appearance: none;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 0;
    position: relative;
    opacity: 0.7;
    transition: opacity 0.2s;

    &::after {
      ${position("absolute", "50%", null, null, 0)};
      background: ${ACTIVE_STATE_COLOR};
      border-radius: 10px;
      content: "";
      height: ${trackHeight};
      margin-top: ${math(`${trackHeight} * -0.5`)};
      overflow: hidden;
      width: ${({ activeVolume }) => `${activeVolume}%`};
      z-index: 98;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      ${size(thumbHeight, "100%")};
      background: ${lowerBackground};
      border-radius: 10px;
      height: 8px;
    }

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      ${size(thumbHeight)};
      -webkit-appearance: none;
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      cursor: pointer;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background 150ms;
      z-index: 100;
    }

    &::-moz-range-thumb {
      ${size(thumbHeight)};
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      cursor: pointer;
      margin: 0;
      transition: background 150ms;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background 150ms;
      z-index: 100;
    }

    &::-ms-thumb {
      ${size(thumbHeight)};
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      cursor: pointer;
      margin: 0;
      transition: background 150ms;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background 150ms;
      z-index: 100;

      /* IE Edge thinks it can support -webkit prefixes */
      box-shadow: none;
    }

    &:hover,
    &:focus {
      &::-webkit-slider-thumb {
        background-color: ${thumbHoverColor};
      }

      &::-moz-range-thumb {
        background-color: ${thumbHoverColor};
      }

      &::-ms-thumb {
        background-color: ${thumbHoverColor};
      }
    }
  }
`;

export const StyledVolumeControl = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;

  ${StyledIconButton} {
    margin-right: 6px;
  }

  label {
    height: ${trackHeight};
  }
`;
