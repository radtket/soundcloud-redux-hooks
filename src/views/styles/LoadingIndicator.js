import styled from "styled-components";

const StyledLoadingIndicator = styled.div`
  width: 200px;
  margin: 100px auto;

  @keyframes bloop {
    0% {
      transform: scale(1);
      background-color: rgb(59, 200, 231);
    }
    50% {
      transform: scale(2);
      background-color: rgb(237, 63, 179);
    }
    100% {
      background-color: rgb(59, 200, 231);
    }
  }

  > div {
    height: 5px;
    width: 75px;
    border-radius: 25px;
    margin: 10px auto 10px;
    animation: bloop 1.25s ease-in-out infinite;

    &:nth-of-type(1) {
      animation-delay: 0.25s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.5s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.75s;
    }

    &:nth-of-type(4) {
      animation-delay: 1s;
    }

    &:nth-of-type(5) {
      animation-delay: 1.25s;
    }
  }
`;

export default StyledLoadingIndicator;
