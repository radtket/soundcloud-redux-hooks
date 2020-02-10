import styled from "styled-components";

const StyledHero = styled.article`
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: ${({ BODY_COLOR }) => BODY_COLOR};
  margin-bottom: 48px;

  .inner-header {
    align-items: center;
    display: flex;
    height: 65vh;
    justify-content: center;
  }

  .waves {
    height: 15vh;
    margin-bottom: -7px;
    position: relative;
    width: 100%;

    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;

    @media (max-width: 768px) {
      height: 40px;
      min-height: 40px;
    }
  }

  /* Animation */

  @keyframes wave-roll {
    0% {
      transform: translate3d(-90px, 0, 0);
    }

    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  .parallax {
    > use {
      animation: wave-roll 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

      &:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }

      &:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }

      &:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }

      &:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
    }
  }
`;

export default StyledHero;
