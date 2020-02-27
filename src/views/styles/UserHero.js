import styled from "styled-components";
import { position, size, padding } from "polished";
import { BODY_COLOR } from "./GlobalStyles";

const StyledUserHero = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: background-image 1s ease-in-out;

  &:before {
    ${position("absolute", null, 0, 0, 0)};
    content: "";
    display: block;
    z-index: 1;
    height: 90%;
    background: linear-gradient(0deg, ${BODY_COLOR} 5%, transparent 100%);
  }

  .entry-header {
    ${padding("2rem", null)};
    align-items: start;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    min-height: 30rem;
    position: relative;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    z-index: 2;

    .entry-header__inner {
      display: flex;
    }

    img {
      ${size("225px")}
      border-radius: 50%;
    }

    figcaption {
      margin-left: 40px;
    }
  }

  .entry-title {
    ${padding("1rem", null)};
    font-size: 50px;
    letter-spacing: 0.3px;
    line-height: 1.2;
  }

  .entry-description {
    color: rgba(255, 255, 255, 0.87);
    letter-spacing: 0.11px;
    margin-bottom: 1rem;
  }

  .entry-meta {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;
    margin: 1rem 0;

    button + * {
      margin: 0 1rem;
    }
  }

  .user-links {
    display: flex;
    align-items: center;

    > a {
      margin: 0 12px;

      &:hover {
        svg {
          fill: #03c1ae;
        }
      }

      svg {
        fill: rgba(255, 255, 255, 0.87);
        height: 18px;
        vertical-align: middle;
      }
    }
  }
`;

export default StyledUserHero;
