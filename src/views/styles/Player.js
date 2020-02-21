import styled from "styled-components";
import { size, padding, margin } from "polished";
import { StyledFavoriteButton } from "./Buttons";

const StyledPlayer = styled.div`
  @keyframes show-player {
    0% {
      bottom: -80px;
    }
    100% {
      bottom: 0;
    }
  }

  ${padding(null, "14px")}
  background: #3a3a3d;
  backdrop-filter: blur(10px);
  bottom: 0;
  display: flex;
  align-items: center;
  height: 86px;
  left: 0;
  position: fixed;
  transform: translateZ(0);
  width: 100%;
  z-index: 100;

  animation-name: show-player;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 300ms;

  .now-playing-bar {
    &__center {
      display: flex;
      flex-direction: column;
      max-width: 722px;
      width: 40%;
    }

    &__left,
    &__right {
      min-width: 180px;
      width: 30%;
    }

    &__right {
      display: flex;
      justify-content: flex-end;
    }
  }

  .song {
    display: flex;
    align-items: center;

    .song-image {
      ${size("58px")};
      margin-right: 14px;

      img {
        display: block;
      }
    }

    .song-info {
      ${padding("16px", null)};
      ${margin(0, null)};
      letter-spacing: 0.006em;
      max-width: 200px;

      dt {
        font-size: 16px;
        color: #fff;
      }

      dd {
        font-size: 14px;
        color: #99999f;
      }

      .username {
        border-bottom: 1px solid transparent;
        position: relative;
        transition: none;

        &:hover,
        &:focus {
          color: #fff;
          border-bottom-color: currentcolor;
        }
      }
    }

    ${StyledFavoriteButton} {
      margin-left: 40px;
    }
  }

  button {
    &:hover {
      svg {
        fill: #99999f;
      }
    }
    svg {
      fill: #fff;
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;

    button {
      margin-right: 50px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .player-timeline {
    align-items: center;
    display: flex;

    > span {
      font-size: 14px;
      margin: 0 14px;
    }
  }
`;

export default StyledPlayer;
