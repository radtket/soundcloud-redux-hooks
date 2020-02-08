import styled from "styled-components";
import { size } from "polished";
import { StyledIconButton } from "./Buttons";

const SLIDER_HEIGHT = "24px";

export const StyledRangeSlider = styled.label`
  input {
    ${size(SLIDER_HEIGHT, "100%")}
    -webkit-appearance: none;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      ${size(SLIDER_HEIGHT)}
      -webkit-appearance: none;
      appearance: none;
      background: #4caf50;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      ${size(SLIDER_HEIGHT)}
      background: #4caf50;
      cursor: pointer;
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
    height: ${SLIDER_HEIGHT};
  }
`;
