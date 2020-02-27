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
    margin-bottom: 30px;

    ${({ compactLayout }) =>
      compactLayout &&
      `
      @media only screen and (min-width: 480px) {
        flex: 0 0 50%;
        max-width: 50%;
      }

      @media (min-width: 576px) {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%;
      }

      @media (min-width: 768px) {
        flex: 0 0 25%;
        max-width: 25%;
      }

      @media (min-width: 992px) {
        flex: 0 0 20%;
        max-width: 20%;
      }`};
  }
`;

export default StyledTrackGrid;
