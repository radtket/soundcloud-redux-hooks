import styled from "styled-components";
import { position, padding } from "polished";
import { BODY_COLOR } from "./GlobalStyles";

const NAV_HEIGHT = "60px";
// const BORDER_COLOR = "#646e78";

const StyledUserNav = styled.div`
  background-color: ${BODY_COLOR};
  border-bottom: 1px solid rgba(100, 110, 120, 0.15);
  position: sticky;
  top: ${NAV_HEIGHT};
  z-index: 20;

  .nav {
    display: flex;
    flex-wrap: nowrap;
    height: ${NAV_HEIGHT};
    margin: 0 -1rem;

    li {
      align-items: center;
      display: flex;
      position: relative;

      &::after {
        ${position("absolute", null, "1rem", 0)};
        content: "";
        height: 2px;
      }

      a {
        ${padding("0.5rem", "1rem")};
        color: #fff;
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;

        &:hover,
        &.active {
          color: #03c1ae;
        }

        span {
          color: #888;
          display: inline-block;
          font-size: 85%;
          font-weight: normal;
          margin: 0 0.25rem;
        }
      }
    }
  }
`;

export default StyledUserNav;
