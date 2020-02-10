import styled from "styled-components";
import { size, math, position } from "polished";

// excess height to improve interactive area / accessibility
const height = "16px";
const thumbHeight = 16;
const trackHeight = "8px";
const inputWidth = "100%";

// colours
const upperColor = "#edf5f9";
const lowerColor = "#d2c0f4";
const thumbColor = "#ddd";
const thumbHoverColor = "#ccc";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const StyledAudioTimeline = styled.div`
  width: ${inputWidth};
  position: relative;

  input {
    ${size(height, "100%")};
    appearance: none;
    background: transparent;
    cursor: pointer;
    display: block;
    margin: 0;
    max-width: ${inputWidth};
    /* overflow: hidden; */
    border-radius: 10px;
    height: 8px;
    position: relative;

    &::before,
    &::after {
      ${position("absolute", "50%", null, null, 0)};
      content: "";
      height: ${trackHeight};
      margin-top: ${math(`${trackHeight} * -0.5`)};
    }

    &::after {
      background: #753fdc;
      width: ${({ percentCompleted }) => percentCompleted};
      z-index: 98;
      overflow: hidden;
      border-radius: 10px;
      height: 8px;
    }

    &::before {
      background: rgba(117, 63, 220, 0.4);
      transition: width 150ms;
      width: ${({ percentBuffered }) => percentBuffered};
      z-index: 97;
      overflow: hidden;
      border-radius: 10px;
      height: 8px;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      ${size(height, "100%")};
      background: ${lowerBackground};
      border-radius: 10px;
      height: 8px;
    }

    &::-webkit-slider-thumb {
      ${size(thumbHeight)};
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background 150ms;
      z-index: 100;
    }

    &::-moz-range-track,
    &::-moz-range-progress {
      ${size(height, "100%")};
      background: ${upperBackground};
    }

    &::-moz-range-progress {
      background: ${lowerBackground};
      border-radius: 10px;
      height: 8px;
    }

    &::-moz-range-thumb {
      ${size(thumbHeight)};
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      margin: 0;
      transition: background 150ms;
    }

    &::-ms-track {
      ${size(height, "100%")};
      border: 0;
      /* color needed to hide track marks */
      color: transparent;
      background: transparent;
    }

    &::-ms-fill-lower {
      background: ${lowerBackground};
      border-radius: 10px;
      height: 8px;
    }

    &::-ms-fill-upper {
      background: ${upperBackground};
    }

    &::-ms-thumb {
      ${size(thumbHeight)};
      appearance: none;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      transition: background 150ms;
      /* IE Edge thinks it can support -webkit prefixes */
      top: 0;
      margin: 0;
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

export default StyledAudioTimeline;
