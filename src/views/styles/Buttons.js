import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledIconButton = styled.button`
  svg {
    height: ${({ size }) => {
      return size === "lg" ? "26px" : "18px";
    }};
  }
`;

export const StyledButton = styled.button``;

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
