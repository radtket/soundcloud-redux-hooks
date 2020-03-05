import styled from "styled-components";
import { padding } from "polished";

const StyledTrackGrid = styled.div`
  display: flex;
  width: 100%;
  margin: 32px 0;
  flex-wrap: wrap;

  > div {
    ${padding(null, "12px")};
    flex: 0 0 100%;
    max-width: 100%;

    @media screen and (min-width: 600px) {
      margin-bottom: 30px;
    }

    ${({ compactLayout }) =>
      compactLayout &&
      `
      @media screen and (min-width: 600px) {
        flex: 0 0 50%;
        max-width: 50%;
      }

      @media screen and (min-width: 768px) {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
      }

      @media screen and (min-width: 992px) {
        flex: 0 0 25%;
        max-width: 25%;
      }

      @media screen and (min-width: 1200px) {
        flex: 0 0 20%;
        max-width: 20%;
      }
      `};
  }
`;

export default StyledTrackGrid;
