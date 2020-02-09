import React from "react";
import { useSelector } from "react-redux";

// Player
import { getPlayerTimes } from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";
import StyledAudioTimeline from "../styles/AudioTimeline";

const AudioTimeline = () => {
  const {
    seek,
    times: {
      bufferedTime,
      currentTime,
      duration,
      percentBuffered,
      percentCompleted,
    },
  } = useSelector(state => {
    return {
      ...audio,
      times: getPlayerTimes(state),
    };
  });

  return (
    <StyledAudioTimeline
      {...{
        currentTime,
        duration,
        percentBuffered,
        percentCompleted,
      }}
    >
      <input
        max={duration * 100}
        min={0}
        onChange={({ target }) => {
          seek(target.value / 100);
        }}
        type="range"
        value={currentTime * 100}
      />
    </StyledAudioTimeline>
  );
};

export default AudioTimeline;
