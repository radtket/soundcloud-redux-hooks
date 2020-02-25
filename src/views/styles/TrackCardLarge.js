import styled from "styled-components";
import { StyledWaveformTimeline, StyledTimeline } from "./Waveform";

const StyledTrackCardLarge = styled.div`
  background: #3a1d38;
  display: flex;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  margin-bottom: 16px;

  .cover {
    border-radius: 10px;
    position: relative;
    margin: 24px 0 24px 24px;
    width: 200px;

    img {
      width: 100%;
      position: relative;
      z-index: 2;
      margin-bottom: -48px;
      border-radius: 10px;
      box-shadow: 0 10px 16px -6px rgba(22, 22, 22, 0.5);
    }
  }

  .content {
    margin-top: 48px;
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    width: 75%;

    position: relative;
    overflow: hidden;

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
    /* position: absolute;
    bottom: -70px;
    height: 140px; */
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

export default StyledTrackCardLarge;
