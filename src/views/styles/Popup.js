import { size } from "polished";
import styled from "styled-components";

export const StyledPopupContent = styled.div`
  background: rgb(255, 255, 255);
  color: #222629;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  padding: 5px;

  ${({ isModal }) =>
    isModal
      ? `
      margin: auto;
      position: relative;
      width: 50%;`
      : `
      box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 12px 2px;
      position: absolute;
      min-width: 160px;
      z-index: 2;
    `}

  a {
    color: #bada55;
  }
`;

export const StyledPopupArrow = styled.div`
  ${size("10px")};
  position: absolute;
  background: rgb(255, 255, 255);
  transform: rotate(45deg);
  margin: -5px;
  z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px;
`;

export const StyledPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${({ isModal }) =>
    isModal &&
    `
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      zIndex: 999;
  `}
`;
