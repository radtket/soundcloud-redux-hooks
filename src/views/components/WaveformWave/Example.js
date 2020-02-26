import React from "react";
import { useSelector } from "react-redux";
import WaveformWave from ".";

// Player
import { getPlayerTimes } from "../../../store/player/selectors";
import { audio } from "../../../store/player/audio-service";

const ExampleWaveform = ({ samples, height, displayProgress }) => {
  const { duration, currentTime } = useSelector(getPlayerTimes);

  const onClick = ({ currentTarget, pageX }) => {
    if (displayProgress) {
      audio.seek(
        ((pageX - currentTarget.getBoundingClientRect().left) /
          currentTarget.offsetWidth) *
          duration
      );
    }
  };
  console.log({ displayProgress });
  return (
    <WaveformWave
      barWidth={4}
      color="#676767"
      {...{
        pos: currentTime,
        peaks: samples,
        height,
        duration,
        onClick,
        displayProgress,
      }}
      progressGradientColors={[
        [0, "#888"],
        [1, "#aaa"],
      ]}
    />
  );
};

export default ExampleWaveform;
