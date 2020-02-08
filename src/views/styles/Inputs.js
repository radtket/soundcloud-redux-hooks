import styled from "styled-components";
import { size } from "polished";

export const StyledRangeSlider = styled.input`
  ${size("24px", "100%")}
  -webkit-appearance: none;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    ${size("24px")}
    -webkit-appearance: none;
    appearance: none;
    background: #4caf50;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    ${size("24px")}
    background: #4caf50;
    cursor: pointer;
  }
`;

export const StyledVolumeControl = styled.label`
  outline: 0;

  &:hover {
    cursor: pointer;
  }
`;
