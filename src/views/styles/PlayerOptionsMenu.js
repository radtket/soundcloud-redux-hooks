import styled from "styled-components";
import { padding, margin, size } from "polished";
import { StyledButton } from "./Buttons";

const StyledPlayerOptionsMenu = styled.div`
  ${size("100%")};
  background: #444;
  box-sizing: border-box;
  display: block;
  padding: 16px 24px;
  position: absolute;
  top: 100%;
  z-index: 104;
  transition: top 0.25s ease;

  &.active {
    top: 0;
  }

  .close-btn {
    align-items: center;
    color: #b3b3b3;
    display: flex;
    font-size: 14px;
    margin: 0 auto 16px;
    transition: color 0.25s ease;

    &:hover {
      color: #e6e6e6;
    }

    svg {
      fill: #b3b3b3;
      height: 12px;
    }

    span {
      font-size: 16px;
      margin-left: 6px;
      position: relative;
      top: 1px;
    }
  }

  .song-info__wrap {
    ${padding(null, "16px")};
    display: flex;
    align-items: center;

    a {
      color: rgba(255, 255, 255, 0.87);
    }

    img {
      ${size("50px")};
    }

    dl {
      margin-left: 16px;

      dd {
        font-size: 14px;
      }
    }
  }

  nav {
    font-size: 16px;

    a,
    button {
      ${padding("8px", "16px")};
      align-items: center;
      border-radius: 5px;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.87);
      display: flex;
      justify-content: flex-start;
      margin-bottom: 4px;
      position: relative;
      text-align: left;
      text-decoration: none;
      width: 100%;
      transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      > figure {
        display: inline-flex;
        flex-shrink: 0;
        min-width: 56px;

        svg {
          display: inline-block;
          fill: rgba(255, 255, 255, 0.54);
          flex-shrink: 0;
          font-size: 1.5rem;
          height: 1em;
          transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          user-select: none;
        }
      }

      span {
        ${margin("4px", null)};
        flex: 1 1 auto;
        font-weight: normal;
        min-width: 0;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        text-decoration: none;
      }
    }
  }
`;

export default StyledPlayerOptionsMenu;
