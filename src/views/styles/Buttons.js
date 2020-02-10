import styled from "styled-components";

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
