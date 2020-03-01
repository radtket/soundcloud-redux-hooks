import styled from "styled-components";
import { padding, margin, size, cover } from "polished";

export const StyledPlayerMobileBackground = styled.div`
  ${cover()};
  /* ${size("100%")}; */
  background-position: center;
  background-size: cover;
  display: block;
  filter: blur(10px);
  transition: background-image 0.25s ease;
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

  .player_header {
    position: relative;
    display: flex;
    z-index: 100;
    justify-content: space-between;
    align-items: center;

    svg {
      fill: #fff;
    }
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
