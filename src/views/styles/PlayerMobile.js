import styled from "styled-components";
import { padding, margin, size } from "polished";

const StyledPlayerMobile = styled.div`
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
  /* transform: translateY(100%); */
  transition: transform 0.55s;

  &.is-active {
    transform: translateY(0);
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

  #background {
    background-size: cover;
    background-position: center;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
    filter: blur(10px);
    transition: background-image 0.25s ease;

    &::before {
      background: #333;
      content: "";
      display: block;
      height: 100%;
      opacity: 0.5;
      position: absolute;
      width: 100%;
    }

    &::after {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      width: 100%;
      background: rgba(0, 0, 0, 0);
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 50%,
        #323232 100%
      );
    }
  }

  .now-playing-bar {
    padding: 24px;
    position: relative;
    z-index: 102;

    overflow-y: scroll;
    overflow-x: hidden;
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

  .sub-controls {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledPlayerMobile;
