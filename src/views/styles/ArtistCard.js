import styled from "styled-components";
import { size } from "polished";

const StyledArtistCard = styled.div`
  text-align: center;

  figure {
    img {
      max-height: 150px;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3),
        0 1px 2px 0 rgba(0, 0, 0, 0.2);
      position: relative;
    }
  }

  figcaption {
    padding: 12px 0;

    > a {
      font-size: 16px;
      display: block;
      letter-spacing: 0.1px;
    }

    button {
      font-size: 14px;
      margin: 0;
      padding: 0;
      color: #99999f;

      display: flex;
      align-items: center;
      vertical-align: middle;
      line-height: 1;
      height: 20px;
      margin: auto;

      svg {
        ${size("13px")};
        fill: currentColor;
        vertical-align: middle;
        display: inline-block;
      }

      span {
        margin-left: 6px;
        vertical-align: middle;
        letter-spacing: 0.08px;
      }
    }
  }
`;

export default StyledArtistCard;
