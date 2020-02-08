import styled from "styled-components";

const StyledTrackCard = styled.figure`
  button {
    padding: 0;
    margin: 0;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 16px 32px 0 rgba(255, 255, 255, 0.08);

    /* &:after {
      box-shadow: inset -5px -50px 100px -15px #000000;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      content: "";
    } */

    img {
      display: block;
      position: relative;
    }
  }

  figcaption {
    margin: 12px 0;

    h6 {
      font-size: 16px;
    }

    cite {
      font-size: 14px;
      font-style: normal;
      margin: 0px;
    }
  }
`;

export default StyledTrackCard;
