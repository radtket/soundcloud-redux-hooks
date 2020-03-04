import styled from "styled-components";
import { size, padding, position, margin } from "polished";

const StyledPlayer = styled.div`
  @keyframes show-player {
    0% {
      bottom: -80px;
    }
    100% {
      bottom: 0;
    }
  }

  ${padding("10px", "14px")}
  ${position("fixed", null, null, 0, 0)};
  ${size(null, "100%")};
  background: #3a3a3d;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  transform: translate3d(0, 0, 0);
  z-index: 100;

  animation-name: show-player;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 300ms;

  .now-playing-bar,
  .now-playing-bar__right,
  .now-playing-bar__left,
  .now-playing-bar__center .player-controls {
    display: flex;
    align-items: center;
  }

  .now-playing-bar {
    justify-content: space-between;

    &__left {
      .song-image {
        ${size("42px")};
      }

      dl {
        ${margin(0, null, 0, "10px")};
      }

      dt {
        a {
          color: #fff;
        }
      }
    }

    &__center {
      .player-controls {
        button {
          ${padding("10px")}
          cursor: pointer;
          display: inline-block;
          margin: 0 10px;
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;

      button {
        ${padding("10px")}
      }
    }
  }

  .button-solid {
    svg {
      fill: #fff;
    }
  }

  .button-state {
    svg {
      fill: rgba(255, 255, 255, 0.5);
    }

    &.is-active,
    &:hover {
      svg {
        fill: #2dceef;
      }
    }
  }
`;

export default StyledPlayer;
