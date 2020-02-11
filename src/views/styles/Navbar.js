import styled from "styled-components";

const StyledNavbar = styled.header`
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
  }

  svg {
    fill: #fff;
    display: block;
    height: 40px;
  }

  .nav-primary {
    margin-left: 20px;
    font-size: 20px;
    /* letter-spacing: 0.06em; */
    letter-spacing: 0.12px;

    a {
      display: inline-block;
      height: 36px;
      line-height: 36px;
      margin: 0 6px;
      padding: 0 24px;
      position: relative;
      transition: all 0.2s;
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
`;

export default StyledNavbar;
