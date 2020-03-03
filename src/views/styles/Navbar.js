import styled from "styled-components";

export const StyledNavbar = styled.header`
  background: #161a1a;
  color: #99999f;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .nav-container {
    align-items: center;
    display: flex;
    height: 84px;
    padding: 0 40px;
    justify-content: space-between;
  }

  .nav-primary {
    display: flex;
    font-size: 20px;
    letter-spacing: 0.12px;

    .nav-logo {
      height: 40px;
      margin-right: 20px;
      margin: 0 40px 0 0;
      padding: 0;

      svg {
        fill: #fff;
        display: block;
        height: 40px;
      }
    }

    .nav-item {
      display: inline-block;
      height: 36px;
      line-height: 36px;
      margin: 0 6px;
      padding: 0 24px;
      position: relative;
      transition: all 0.2s;

      &.active {
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
      }
    }
  }

  .nav-secondary {
    margin-left: 42px;
    font-size: 18px;
    letter-spacing: 0.11px;

    a {
      margin-right: 40px;
      position: relative;

      &.active {
        color: #ffffff;

        &::before {
          content: "";
          width: 50%;
          height: 3px;
          background: transparent
            linear-gradient(182deg, #9b2def 0%, #2dceef 100%) 0% 0% no-repeat
            padding-box;
          position: absolute;
          left: 0;
          top: 52px;
          left: 50%;
          margin-left: -25%;
        }
      }
    }
  }

  .nav-search {
    align-items: center;
    display: flex;
  }
`;

export const StyledMobileAppBar = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 98;
  /* width: 100%; */
  color: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #303033;

  @media only screen and (min-width: 650px) {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    a {
      display: inline-block;
      font-size: 14px;
      letter-spacing: 0.28px;
      margin: 0 0.25rem;
      padding: 14px;
      text-align: center;
      text-decoration: none;
      transition: all 170ms ease-out;
      will-change: color;

      &.active {
        color: #2dceef;

        svg {
          fill: #2dceef;
        }
      }

      &:hover {
        color: #fff;

        svg {
          fill: #fff;
        }
      }

      svg {
        fill: rgba(255, 255, 255, 0.5);
        display: block;
        height: 24px;
        margin: 0 auto 2px;
      }
    }
  }
`;
