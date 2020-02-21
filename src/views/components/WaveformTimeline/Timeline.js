import React from "react";
import { useSelector } from "react-redux";

// Player
import { getPlayerTimes } from "../../../store/player/selectors";
import { audio } from "../../../store/player/audio-service";
import { StyledTimeline } from "../../styles/Waveform";

const Timeline = () => {
  const {
    bufferedTime,
    percentBuffered,
    percentCompleted,
    duration,
  } = useSelector(getPlayerTimes);

  const onClick = ({ currentTarget, pageX }) => {
    audio.seek(
      ((pageX - currentTarget.getBoundingClientRect().left) /
        currentTarget.offsetWidth) *
        duration
    );
  };

  return (
    <StyledTimeline {...{ onClick, isBuffering: bufferedTime > 0 }}>
      <div className="bar bar--buffered" style={{ width: percentBuffered }} />
      <div className="bar bar--completed" style={{ width: percentCompleted }} />
    </StyledTimeline>
  );
};

export default Timeline;
