import styled from "styled-components";

export const StyledIconButton = styled.button`
  svg {
    height: ${({ size }) => {
      return size === "lg" ? "24px" : "20px";
    }};
  }
`;

export const StyledButton = styled.button``;
