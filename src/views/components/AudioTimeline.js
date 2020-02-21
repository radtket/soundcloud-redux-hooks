import React from "react";
import { useSelector } from "react-redux";

// Player
import { getPlayerTimes } from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";
import StyledAudioTimeline from "../styles/AudioTimeline";

const AudioTimeline = () => {
  const {
    currentTime,
    duration,
    percentBuffered,
    percentCompleted,
  } = useSelector(getPlayerTimes);

  return (
    <StyledAudioTimeline
      {...{
        percentBuffered,
        percentCompleted,
      }}
    >
      <input
        max={(duration || 0) * 100}
        min={0}
        onChange={({ target }) => {
          audio.seek(target.value / 100);
        }}
        type="range"
        value={currentTime * 100}
      />
    </StyledAudioTimeline>
  );
};

export default AudioTimeline;
