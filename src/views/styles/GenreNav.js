import styled from "styled-components";
import { size, position } from "polished";

const StyledGenreNav = styled.nav`
  .container {
    max-width: 100%;
  }

  a {
    color: #ffffff;
    display: inline-block;
    height: 52px;
    letter-spacing: 0.1px;
    line-height: 52px;
    margin: 0 40px;
    position: relative;
    text-transform: uppercase;

    &.active {
      &::after {
        ${position("absolute", null, null, 0, "50%")};
        ${size("3px", "50%")};
        margin-left: -25%;
        content: "";

        background: transparent
          linear-gradient(183deg, #9b2def 0%, #2dceef 100%) 0% 0% no-repeat
          padding-box;
      }
    }
  }
`;

export default StyledGenreNav;
