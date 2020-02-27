import styled from "styled-components";
import { size, cover } from "polished";

export const StyledArtworkPlay = styled.button`
  padding: 0;
  margin: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 16px 32px 0 rgba(255, 255, 255, 0.08);

  /* &:after {
      box-shadow: inset -5px -50px 100px -15px #000000;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      content: "";
    } */

  img {
    display: block;
    position: relative;
  }

  &:hover,
  &.is-active {
    .trackcard--overlay {
      opacity: 1;
      &__bg {
        top: 0;
      }
      &__icon {
        visibility: visible;
        opacity: 1;
        svg {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }

  .trackcard--overlay {
    opacity: 0;
    transition: all 0.4s ease-in-out;
    &__bg {
      position: absolute;
      border-radius: 10px;
      background-image: -webkit-linear-gradient(
        90deg,
        rgb(22, 26, 46) 0%,
        rgb(237, 63, 179) 0%,
        rgb(59, 200, 231) 0%,
        rgba(32, 167, 196, 0) 100%
      );
      height: 101%;
      width: 101%;
      left: 0;
      top: 100%;
      transition: all 0.2s;
    }
    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, -50%);

      /* &:hover {
          svg {
            &::after {
              opacity: 1;
            }
          }
        } */

      svg {
        ${size("33%")};
        fill: rgba(50, 50, 50, 0.9);
        opacity: 0;
        position: relative;
        transition: transform 0.3s, opacity 0.3s;
        display: inline-block;
        transform: scale(5);
      }
    }
  }
`;

export const StyledArtworkPlayRecordSpin = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 16px 32px 0 rgba(255, 255, 255, 0.08);

  &:before {
    ${cover()};
    content: "";
    background: #2dceef;
    z-index: -1;
  }

  @keyframes around-the-world {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }

    20% {
      opacity: 0.33;
    }

    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }

  @keyframes color-rhythm {
    0% {
      border-color: rgb(59, 200, 231);
    }

    25% {
      border-color: rgb(237, 63, 179);
    }

    50% {
      border-color: yellow;
    }

    100% {
      border-color: lime;
    }
  }

  &:hover,
  &.is-selected {
    .cover {
      max-height: 80%;
      max-width: 80%;
      padding: 10% 0;

      > img {
        border-radius: 50%;
        box-shadow: 2px 8px 10px 0 rgba(0, 0, 0, 0.15);
      }
    }

    .play-button {
      opacity: 1;
    }
  }

  &.is-playing {
    .cover {
      opacity: 1;
      animation: around-the-world 8275.8620689655ms linear 128;
    }

    .baseline {
      animation: bounce 8275.8620689655ms linear 32;
    }

    .riffs {
      animation: bounce 1034.4827586207ms linear 32 17068.9655172414ms,
        bounce 1034.4827586207ms linear 16 74482.7586206897ms,
        bounce 1034.4827586207ms linear 16 107586.2068965517ms,
        bounce 1034.4827586207ms linear 60 157241.3793103449ms;
    }

    .kicks {
      animation: bounce 517.2413793103ms linear 64 33103.4482758621ms,
        bounce 517.2413793103ms linear 64 91034.4827586207ms,
        bounce 517.2413793103ms linear 64 190344.8275862069ms;
    }

    .piano {
      animation: bounce 2068.9655172414ms linear 128,
        color-rhythm 8275.8620689655ms linear infinite;
    }
  }

  .cover {
    max-height: 100%;
    max-width: 100%;
    padding: 0;
    margin: auto;
    transition: all 0.5s ease-in-out;

    > img {
      display: block;
      position: relative;
      transition: border-radius 0.5s ease-in-out;
      overflow: hidden;
    }
  }

  .play-button {
    ${size("64px")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(22, 26, 46);
    border-radius: 50%;
    opacity: 0;
    outline: 0;
    transition: all 0.5s ease-in-out;

    svg {
      fill: #fff;
    }
  }

  .waves {
    .wave {
      ${cover()};
      ${size("100%")};
      border-radius: 50%;
      opacity: 0;
    }
  }

  .baseline {
    background: rgb(237, 63, 179);
  }

  .riffs {
    background: rgb(59, 200, 231);
  }

  .kicks {
    background: yellow;
  }

  .piano {
    background: transparent;
    border: 2px solid #fff;
  }
`;
