import styled from "styled-components";
import { padding } from "polished";

const StyledPageTitle = styled.header`
  text-align: center;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .page-heading__inner {
    position: relative;
    ${padding("40px", null)};

    @media (min-width: 576px) {
      ${padding("60px", null)};
    }

    @media (min-width: 768px) {
      ${padding("100px", null)};
    }

    @media (min-width: 992px) {
      ${padding("134px", null)};
    }
  }

  .page-heading__title {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.2em;
    margin: 0;
    text-transform: lowercase;

    &:after {
      content: ".";
      color: #f60b0e;
    }

    @media (min-width: 576px) {
      font-size: calc(4.16667vw + 0px);
    }

    @media (min-width: 768px) {
      font-size: calc(6.25vw - 16px);
    }

    @media (min-width: 992px) {
      font-size: 72px;
    }
  }

  .breadcrumb {
    padding: 0 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: transparent;
  }

  .breadcrumb-item {
    float: none;
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;

    @media (max-width: 767.98px) {
      font-size: 0.62475rem;
    }

    &.active {
      color: #717171;
    }

    + .breadcrumb-item {
      padding-left: 0.5rem;

      &::before {
        padding-right: 0.5rem;
        color: rgba(255, 255, 255, 0.2);
        content: "—";

        @media (max-width: 767.98px) {
          padding-right: 0.4165rem;
          padding-left: 0.4165rem;
        }
      }
    }
  }

  .page-heading__breadcrumb {
    margin-bottom: 0;
    justify-content: center;
  }

  .page-heading__title + .page-heading__breadcrumb {
    margin-top: 0.5em;

    @media (min-width: 576px) {
      margin-top: 1.2em;
    }
  }
`;

export default StyledPageTitle;
