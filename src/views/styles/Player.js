import styled from "styled-components";
import { size, padding, margin, hideVisually } from "polished";
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
  height: 86px;
  left: 0;
  position: fixed;
  transition: all 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);
  width: 100%;
  z-index: 100;

  animation-name: show-player;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 300ms;

  &.is-hidden {
    transform: translate3d(0, 115%, 0);
    transition: all 0.3s ease-in-out;
  }

  &.is-expanded {
    transform: translateY(0%);
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    animation-name: slideDown;
    animation-duration: 1s;
    animation-timing-function: ease;

    .now-playing-bar {
      flex-direction: column-reverse;
    }

    .song {
      flex-direction: column;

      .song-image {
        ${size("300px")};
        margin-right: 0;
      }

      .song-info {
        max-width: 100%;
        text-align: center;

        dt {
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
      }
    }
  }

  .now-playing-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

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
      margin-right: 24px;

      @media only screen and (min-width: 768px) {
        margin-right: 32px;
      }

      @media only screen and (min-width: 992px) {
        margin-right: 48px;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .player-timeline {
    align-items: center;
    display: flex;

    @media only screen and (max-width: 768px) {
      margin-right: 32px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      justify-content: space-between;

      > div {
        position: absolute;
        top: -8px;
      }
    }

    > span {
      font-size: 14px;
      margin: 0 14px;

      @media only screen and (max-width: 768px) {
        ${hideVisually()};
      }
    }
  }
`;

export default StyledPlayer;
