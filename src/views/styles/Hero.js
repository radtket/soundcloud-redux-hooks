import styled from "styled-components";
import riffa from "../../assets/images/home-hero.jpg";

export const StyledHero = styled.article`
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

export const StyledHeroFeaturedArtist = styled.article`
  display: block;
  background-color: #111517;
  background-image: url(${riffa});
  background-position: 50%;
  background-size: cover;
  height: 600px;
  width: 100vw;
  min-height: 560px;
  position: relative;

  .container {
    position: static;
  }

  .text {
    position: absolute;
    bottom: 0;
    text-align: left;
  }

  h1 {
    display: inline-block;
    font-weight: 800;
    color: transparent;
    font-size: 10vw;
    line-height: 1;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    text-transform: uppercase;
    position: relative;
  }

  span {
    border-color: transparent;
    border-radius: 0;
    border: 2px solid transparent;
    box-shadow: none;
    color: #fff;
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.25em;
    line-height: 1.25;
    padding-left: 0;
    padding-right: 0;
    padding: 0.8rem 2rem;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.15s ease-in-out;
    user-select: none;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      height: 1px;
      width: 40px;
      vertical-align: middle;
      margin-right: 1.5rem;
      background-color: #fff;
      @media (min-width: 768px) {
        width: 80px;
      }
    }
  }
`;
