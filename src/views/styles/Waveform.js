import styled from "styled-components";
import { position, size } from "polished";
import { BODY_COLOR } from "./GlobalStyles";

export const StyledWaveformTimeline = styled.div`
  ${size("70px", "100%")};
  background: #2a2b2c;
  margin-bottom: 25px;
  opacity: ${({ isReady }) => (isReady ? 1 : 0)};
  position: relative;
  ${({ isReady }) => isReady && "transition: opacity 400ms ease-in-out"};
`;

export const StyledWaveform = styled.figure`
  ${position("absolute", 0, null, null, 0)};
  ${size("inherit")};
  display: block;
  overflow: hidden;
  pointer-events: none;

  canvas {
    width: inherit;
    height: inherit;
    image-rendering: pixelated;
    image-rendering: optimizeSpeed;
    pointer-events: none;
  }
`;

export const StyledTimeline = styled.button`
  ${size("inherit")};
  display: block;
  position: relative;
  padding: 0;
  outline: none;

  .bar {
    position: absolute;
    top: 0;
    height: inherit;
    background: #bada55;
  }

  .bar--buffered {
    opacity: 0.3;
    ${({ isBuffering }) => isBuffering && "transition: width 500ms"}
  }
`;
