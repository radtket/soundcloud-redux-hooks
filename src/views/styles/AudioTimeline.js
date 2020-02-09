import styled from "styled-components";

// excess height to improve interactive area / accessibility
const height = "36px";
const thumbHeight = 36;
const trackHeight = "16px";
const inputWidth = "100%";

// colours
const upperColor = "#edf5f9";
const lowerColor = "#d2c0f4";
const thumbColor = "#ddd";
const thumbHoverColor = "#ccc";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
  let i = 18;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 706; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

const StyledAudioTimeline = styled.div`
  /* width: 100%; */
  width: ${inputWidth};
  position: relative;

  input {
    appearance: none;
    background: transparent;
    cursor: pointer;
    display: block;
    height: ${height};
    margin: 0;
    max-width: ${inputWidth};
    overflow: hidden;
    position: relative;
    width: 100%;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 16px;
      width: ${({ percentCompleted }) => percentCompleted};
  background: #753fdc;
      margin-top: -8px;
      z-index: 98;
    }


    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 16px;
      width: ${({ percentBuffered }) => percentBuffered};
      background-color: rgba(117, 63, 220, 0.4);
      margin-top: -8px;
      z-index: 97;
      transition: width 150ms;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: ${height};
      background: ${lowerBackground};
    }

    &::-webkit-slider-thumb {
      position: relative;
      appearance: none;
      height: ${thumbHeight}px;
      width: ${thumbHeight}px;
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      top: 50%;
      transform: translateY(-50%);
      /* box-shadow: ${makeLongShadow(upperColor, "-10px")}; */
      transition: background-color 150ms;
      z-index: 100;
    }

    &::-moz-range-track,
    &::-moz-range-progress {
      width: 100%;
      height: ${height};
      background: ${upperBackground};
    }

    &::-moz-range-progress {
      background: ${lowerBackground};
    }

    &::-moz-range-thumb {
      appearance: none;
      margin: 0;
      height: ${thumbHeight};
      width: ${thumbHeight};
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      transition: background-color 150ms;
    }

    &::-ms-track {
      width: 100%;
      height: ${height};
      border: 0;
      /* color needed to hide track marks */
      color: transparent;
      background: transparent;
    }

    &::-ms-fill-lower {
      background: ${lowerBackground};
    }

    &::-ms-fill-upper {
      background: ${upperBackground};
    }

    &::-ms-thumb {
      appearance: none;
      height: ${thumbHeight};
      width: ${thumbHeight};
      background: ${thumbColor};
      border-radius: 100%;
      border: 0;
      transition: background-color 150ms;
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
