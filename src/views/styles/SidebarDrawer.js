import styled from "styled-components";
import { size } from "polished";

const StyledSidebarDrawer = styled.aside`
  height: 100%;
  position: fixed;
  left: 0;
  width: 250px;
  margin-top: 84px;
  transform: translateX(-250px);
  /* transform: translateX(0); */
  z-index: 9;
  transition: transform 250ms ease-in-out;
  background: linear-gradient(180deg, #fc466b 0%, #3f5efb 100%);

  .sidebarMenuInner {
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      a {
        align-items: center;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-weight: bold;
        padding: 0.75rem 1.25rem;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;

        @media (max-width: 500px) {
          margin: 0.5rem 0;
        }

        svg {
          ${size("28px")};
          pointer-events: none;
          transition: margin 0.2s ease-out;
        }

        span {
          font-size: 0.9rem;
          margin-left: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          display: block;
        }
      }
    }
  }
`;

export default StyledSidebarDrawer;
