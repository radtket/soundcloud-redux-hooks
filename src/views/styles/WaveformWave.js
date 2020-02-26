import styled from "styled-components";
import { size, position } from "polished";

export const StyledTimesList = styled.ul`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-right: 24px;
  position: absolute;
  width: 100%;
`;

export const StyledWaveformWave = styled.button`
  ${size("100%")};
  position: absolute;
  cursor: pointer;
  display: block;
  padding: 0;
  outline: none;
`;

export const StyledWaveformWaveProgressWrap = styled.div`
  ${position("absolute", 0, null, 0, 0)};
  z-index: 2;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
`;
