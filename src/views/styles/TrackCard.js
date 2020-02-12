import styled from "styled-components";

const StyledTrackCard = styled.figure`
  > button {
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
          fill: rgba(50, 50, 50, 0.9);
          height: 40px;
          opacity: 0;
          position: relative;
          transition: transform 0.3s, opacity 0.3s;
          display: inline-block;
          transform: scale(5);
        }
      }
    }
  }

  figcaption {
    margin: 12px 0;

    h6 {
      font-size: 16px;
    }

    cite {
      font-size: 14px;
      font-style: normal;
      margin: 0px;
    }
  }
`;

export default StyledTrackCard;
