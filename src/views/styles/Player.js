import styled from "styled-components";

const StyledPlayer = styled.div`
  @keyframes show-player {
    0% {
      bottom: -80px;
    }
    100% {
      bottom: -10px;
    }
  }

  background: #2d2e2f;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  bottom: -10px;
  box-shadow: 0 -3px 0 0 rgba(0, 0, 0, 0.1);
  display: block;
  height: 71px;
  left: 0;
  position: fixed;
  transform: translateZ(0);
  width: 100%;
  z-index: 100;

  animation-name: show-player;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 300ms;

  svg {
    height: 12px;
    fill: #5d5e5f;

    &:active {
      background: rgba(0, 0, 0, 0.15);
    }

    &:hover {
      fill: #78797a;
    }
  }

  .player-timeline {
    height: 4px;
    background: #3a3b3c;
    cursor: pointer;
  }

  .player-controls {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding-top: 8px;
    max-width: 970px;
    font-size: 13px;
  }

  .player-controls__time {
    padding: 0 10px;
  }

  .player-controls__title {
    flex: 1;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
`;

export default StyledPlayer;
