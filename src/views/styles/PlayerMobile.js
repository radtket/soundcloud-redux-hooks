import styled from "styled-components";
import { padding, margin, size, cover } from "polished";

export const StyledPlayerMobileBackground = styled.div`
  ${cover()};
  background-position: center;
  background-size: cover;
  display: block;
  filter: blur(10px);
  /* transition: background-image 0.25s ease; */
  z-index: 99;

  &::before {
    ${size("100%")};
    background: #333;
    content: "";
    display: block;
    opacity: 0.5;
    position: absolute;
  }

  &::after {
    ${size("100%")};
    content: "";
    display: block;
    position: absolute;
    background: transparent;
    background: linear-gradient(to bottom, transparent 50%, #323232 100%);
  }
`;

export const StyledPlayerMobile = styled.div`
  background-position: center;
  background-size: cover;
  background: #333;
  display: block;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transform: translate3d(0, 100%, 0);
  transition: all 0.3s ease-in-out;

  &.is-active {
    transition: all 0.3s ease-in-out;
    transform: translate3d(0, 0, 0);
  }

  button {
    svg {
      fill: rgba(255, 255, 255, 0.87);
    }

    &:hover {
      svg {
        fill: #fff;
      }
    }
  }

  .player_header {
    position: relative;
    display: flex;
    z-index: 100;
    justify-content: space-between;
    align-items: center;
  }

  .now-playing-bar {
    padding: 24px;
    position: relative;
    z-index: 102;

    overflow-y: scroll;
    overflow-x: hidden;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .song {
    .song-image {
      > img {
        box-shadow: 0px 5px 25px rgba(50, 50, 50, 0.5);
        width: 80%;
        margin: 36px auto;
      }
    }

    dl {
      text-align: center;

      dt {
        font-size: 24px;

        a {
          color: #fff;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }

  .player-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    svg {
      height: 20px;
    }

    button {
      margin-right: 24px;

      &:nth-of-type(2) {
        svg {
          height: 32px;
        }
      }

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
    margin-bottom: 24px;

    .player-timeline-meta {
      display: flex;
      justify-content: space-between;
      margin-top: 6px;
    }
  }

  .now-playing-bar__right {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledPlayerMini = styled.nav`
  @keyframes show-player-mobile {
    0% {
      bottom: -80px;
    }
    100% {
      bottom: 56px;
    }
  }

  &.is-hidden {
    transform: translate3d(0, 115%, 0);
    transition: all 0.3s ease-in-out;
  }

  animation-name: show-player-mobile;
  backdrop-filter: blur(20px);
  border-radius: 6px;
  bottom: 56px;
  left: 6px;
  position: fixed;
  right: 6px;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease-in-out;
  z-index: 100;

  .inner {
    ${padding(null, "14px")};
    background: #3a3a3d;
    display: flex;
    justify-content: space-between;
    z-index: 101;
    position: relative;
    margin-bottom: 2px;
    border-radius: 6px;
  }

  .timeline {
    width: 100%;
    height: 6px;
    position: absolute;
    background: #424346;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    overflow: hidden;

    .active {
      content: "";
      width: 50%;
      height: 6px;
      position: absolute;
      background: transparent linear-gradient(183deg, #9b2def 0%, #2dceef 100%)
        0% 0% no-repeat padding-box;
      bottom: 0;
      left: 0;
    }
  }

  .song-meta {
    display: flex;
    padding: 0;
    align-items: center;
    flex-grow: 1;

    img {
      height: 48px;
    }

    .song-info {
      ${padding("16px", null, "16px", "16px")};
      ${margin(0, null)};
      letter-spacing: 0.006em;
      max-width: 200px;
      text-align: left;

      dt {
        font-size: 16px;
        color: #fff;
        margin-bottom: 8px;
        letter-spacing: 0.1px;
        color: #ffffff;
      }

      dd {
        font-size: 14px;
        letter-spacing: 0.08px;
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
  }

  .player-controls {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      svg {
        fill: #fff;
      }

      &:first-of-type {
        margin-right: 20px;
      }
    }
  }
`;
