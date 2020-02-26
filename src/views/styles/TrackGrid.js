import styled from "styled-components";

const StyledTrackGrid = styled.div`
  display: flex;
  width: 100%;
  margin: 32px 0;
  ${({ compactLayout }) =>
    compactLayout ? `flex-wrap: wrap;` : `flex-direction: column;`}

  > div {
    padding: 0 12px;
    margin-bottom: 30px;
    width: ${({ compactLayout }) => (compactLayout ? "20%" : "100%")};
  }
`;

export default StyledTrackGrid;
