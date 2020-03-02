import styled from "styled-components";
import { position } from "polished";
import { BODY_COLOR } from "./GlobalStyles";

const StyledGenreNav = styled.nav`
  ${position("sticky", "84px", 0, null, 0)};
  background: ${BODY_COLOR};
  border-bottom: 1px solid rgba(100, 110, 120, 0.15);
  color: #fff;
  overflow-x: scroll;
  position: sticky;
  top: 84px;
  z-index: 2;

  .container {
    max-width: 100%;

    @media only screen and (min-width: 992px) {
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  .nav {
    height: 60px;
    font-weight: 500;
    margin: 0 -1rem;
    flex-wrap: nowrap;
    display: flex;

    li {
      position: relative;
      float: none;
      display: flex;
      align-items: center;

      /* &::after {
        content: "";
        position: absolute;
        left: 1rem;
        right: 1rem;
        bottom: 0;
        height: 2px;
      }

      &.active {
        &:after {
          background-color: currentColor;
          opacity: 0.5;
        }
      } */

      a {
        white-space: nowrap;
        display: block;
        padding: 0.5rem 1rem;

        &::after {
          content: "";
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 0;
          height: 2px;
        }

        &.active {
          color: #fff;

          &:after {
            background: transparent
              linear-gradient(183deg, #9b2def 0%, #2dceef 100%) 0% 0% no-repeat
              padding-box;
            /* opacity: 0.5; */
          }
        }
      }
    }
  }
`;

export default StyledGenreNav;
