import styled from "styled-components";
import { size, padding } from "polished";
import { StyledArtworkPlay } from "./ArtworkPlay";

export const StyledHistorySong = styled.li`
  display: flex;
  justify-content: space-between;
  transition: background-color linear 0.2s;
  padding: 6px 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
  border-top: 1px solid rgba(255, 255, 255, 0.125);
  margin-bottom: -1px;

  &.is-active {
    dt {
      color: #2dceef;
    }

    dd {
      color: #ffffff;
    }
  }

  &:focus,
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${StyledArtworkPlay} {
    ${size("50px")};
  }

  dl {
    margin: 0 0 0 14px;
  }

  dt {
    font-size: 16px;
    letter-spacing: 0.1px;
  }

  dd {
    color: #99999f;
    font-size: 14px;
    letter-spacing: 0.08px;
  }
`;

export const StyledHistorySidebar = styled.aside`
  ${padding("16px", null)};
  position: fixed;
  top: 6rem;
  /* right: -22rem; */
  /* width: 22rem; */
  width: 400px;
  right: ${({ isOpen }) => (isOpen ? 0 : "-400px")};
  bottom: 96px;
  background-color: #303033;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
  z-index: 1004;
  box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.15);
  transition: 0.4s all ease-in;

  header {
    ${padding(null, "20px")};
    align-items: center;
    display: flex;
    font-size: 18px;
    font-weight: 600;
    justify-content: space-between;
    letter-spacing: 0.11px;
    margin-bottom: 4px;

    svg {
      fill: #fff;
    }
  }

  .right-sidebar-body {
    border-bottom-left-radius: 1rem;
    height: calc(100% - 3.25rem);
    position: relative;
    overflow-y: scroll;
    overflow-anchor: none;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
  }

  .list-group {
    display: flex;
    flex-direction: column;

    &:first-child {
      ${StyledHistorySong} {
        &:first-child {
          border-top: 0;
        }
      }
    }
  }

  .text-truncate {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
