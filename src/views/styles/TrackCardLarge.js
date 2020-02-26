import styled from "styled-components";
import { margin } from "polished";
import { StyledWaveformTimeline, StyledTimeline } from "./Waveform";

const StyledTrackCardLarge = styled.div`
  background: #3a1d38;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  display: flex;
  margin-bottom: 16px;

  .cover {
    ${margin("24px", null, "24px", "24px")};
    width: 225px;

    img {
      border-radius: 10px;
      box-shadow: 0 10px 16px -6px rgba(22, 22, 22, 0.5);
      margin-bottom: -48px;
      position: relative;
      width: 100%;
      z-index: 2;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    overflow: hidden;
    padding-left: 24px;
    position: relative;
    width: 75%;

    > .flex-row {
      display: flex;
      align-items: center;
    }

    figcaption {
      margin: 0 16px;

      h6 {
        font-size: 24px;
      }

      cite {
        font-style: normal;
      }
    }
  }

  ${StyledWaveformTimeline} {
    margin-bottom: 0;
  }

  ${StyledTimeline} {
    .bar {
      background: rgb(197, 150, 181);
      background: linear-gradient(
        0deg,
        rgba(197, 150, 181, 1) 0%,
        rgba(170, 53, 122, 1) 100%
      );
    }
  }
`;

export const StyledTrackCardStatsLists = styled.ul`
  color: #777777;
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  line-height: 1;
  margin-bottom: 16px;

  li {
    align-items: center;
    display: flex;
    margin-right: 24px;

    &:last-of-type {
      margin-right: 0;
    }

    svg {
      fill: #cccccc;
      height: 14px;
      margin-top: 1px;
      vertical-align: middle;
    }

    span {
      margin-left: 6px;
    }
  }
`;

export default StyledTrackCardLarge;
