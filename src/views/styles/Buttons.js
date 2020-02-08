import styled from "styled-components";

export const StyledIconButton = styled.button`
  svg {
    height: ${({ size }) => {
      console.log({ size });
      return size === "lg" ? "24px" : "20px";
    }};
  }
`;

export const StyledButton = styled.button``;
