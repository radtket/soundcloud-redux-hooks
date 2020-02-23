import styled from "styled-components";
import { Link } from "react-router-dom";
import { size } from "polished";

export const StyledIconButton = styled.button`
  svg {
    height: ${({ size }) => {
      return size === "lg" ? "26px" : "18px";
    }};
    vertical-align: middle;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: 10px 32px;
  font-size: 14px;
  letter-spacing: 0.08px;
  font-weight: 700;
  line-height: 1.2;
  border-radius: 1.5rem;
  transition: all 0.15s ease-in-out;
  -webkit-appearance: button;
  overflow: visible;
  text-transform: uppercase;

  /* .btn-primary { */
  color: #fff;
  background-color: #f60b0e;
  border-color: #f60b0e;

  /* .btn-outline-primary { */
  color: #fff;
  background-color: transparent;
  background-image: none;
  border-color: #f60b0e;
  /* } */
`;

export const StyledFavoriteButton = styled(StyledIconButton)`
  svg {
    .stroke,
    .fill {
      transition: fill 0.3s;
    }

    .stroke {
      fill: #ffffff;
    }

    .fill {
      fill: transparent;
    }
  }

  &:hover {
    svg {
      .stroke {
        fill: #d5d5d5;
      }
    }
  }

  &.active {
    svg {
      .stroke,
      .fill {
        fill: #2dceef;
      }
    }
    &:hover {
      svg {
        .stroke,
        .fill {
          fill: #2dceef;
        }
      }
    }
  }
`;

export const GradientBorderButton = styled(Link)`
  border-radius: 99px;
  border: none;
  color: #2dceef;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    border-radius: 99px;
    content: "";
    position: absolute;
  }

  &::before {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
    /* background: #503b9a;
    background: -moz-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, #503b9a),
      color-stop(100%, #269cc1)
    );
    background: -webkit-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -o-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: -ms-linear-gradient(left, #503b9a 0%, #269cc1 100%);
    background: linear-gradient(to right, #503b9a 0%, #269cc1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#503b9a', endColorstr='#269cc1',GradientType=1 ); */

    background: rgb(155, 45, 239);
    background: -moz-linear-gradient(
      273deg,
      rgba(155, 45, 239, 1) 0%,
      rgba(45, 155, 239, 1) 58%,
      rgba(53, 237, 251, 1) 100%
    );
    background: -webkit-linear-gradient(
      273deg,
      rgba(155, 45, 239, 1) 0%,
      rgba(45, 155, 239, 1) 58%,
      rgba(53, 237, 251, 1) 100%
    );
    background: -o-linear-gradient(
      273deg,
      rgba(155, 45, 239, 1) 0%,
      rgba(45, 155, 239, 1) 58%,
      rgba(53, 237, 251, 1) 100%
    );
    background: -ms-linear-gradient(
      273deg,
      rgba(155, 45, 239, 1) 0%,
      rgba(45, 155, 239, 1) 58%,
      rgba(53, 237, 251, 1) 100%
    );
    background: linear-gradient(
      273deg,
      rgba(155, 45, 239, 1) 0%,
      rgba(45, 155, 239, 1) 58%,
      rgba(53, 237, 251, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9b2def",endColorstr="#35edfb",GradientType=1);
  }

  &::after {
    background-color: #161a1a;
    bottom: 3px;
    left: 3px;
    opacity: 1;
    right: 3px;
    top: 3px;
    transition: all 0.6s ease-in-out;
    z-index: -1;
  }

  /* &:hover {
    &::after {
      opacity: 0;
    }
  } */
`;

export const StyledUserAccountButton = styled.button`
  ${size("36px")};
  border-radius: 50%;
  overflow: hidden;
  background: ${({ avatarUrl }) => `url(${avatarUrl ||
    "https://biobutterfly.com/wp-content/themes/musicapp/src/images/artist/1sz2.jpg"})
    0px center / cover no-repeat`};
`;

export const StyledAuthLink = styled.button`
  align-items: center;
  color: #fff;
  display: flex;
  padding: 0.5rem 1rem;

  svg {
    display: inline-block;
    height: 24px;
    margin-right: 12px;
    fill: #fff;
  }

  span {
    text-transform: uppercase;
  }
`;

export const StyledUserHeroPlayButton = styled.button`
  ${size("40px")};
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  display: inline-block;
  outline: 0;
  position: relative;
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  vertical-align: middle;

  svg {
    height: 40px;
    display: inline-block;
    width: 12px;
  }
`;

export const StyledPulsingPlayButtion = styled.button`
  width: 100px;
  height: 100px;
  background: radial-gradient(
    rgba(255, 0, 128, 0.8) 60%,
    rgba(255, 255, 255, 1) 62%
  );
  border-radius: 50%;
  position: relative;
  display: block;
  margin: 100px auto;
  box-shadow: 0px 0px 25px 3px rgba(255, 0, 128, 0.8);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    transform-origin: center center;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid #fff;
    z-index: 100;
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &:before {
    content: "";
    position: absolute;
    width: 150%;
    height: 150%;
    animation-delay: 0s;
    animation: pulsate 2s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.75);
    top: -30%;
    left: -30%;
    background: rgba(198, 16, 0, 0);
  }

  @keyframes pulsate {
    0% {
      -webkit-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 1;
      box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
        0px 0px 25px 10px rgba(255, 255, 255, 0.75);
    }

    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1);
      opacity: 0;
      box-shadow: none;
    }
  }
`;
