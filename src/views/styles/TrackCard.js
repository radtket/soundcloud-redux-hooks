import styled from "styled-components";
import { StyledArtworkPlayRecordSpin } from "./ArtworkPlay";

const StyledTrackCard = styled.figure`
  @media screen and (max-width: 599px) {
    display: flex;
    align-items: center;

    ${StyledArtworkPlayRecordSpin} {
      height: 42px;
      width: 42px;
      margin-right: 12px;
    }
  }

  figcaption {
    padding: 10px 0;

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
