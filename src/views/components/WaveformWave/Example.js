import React from "react";
import { useSelector } from "react-redux";
import WaveformWave from ".";

// Player
import { getPlayerTimes } from "../../../store/player/selectors";
import { audio } from "../../../store/player/audio-service";

const ExampleWaveform = ({ samples, height }) => {
  const { duration, currentTime } = useSelector(getPlayerTimes);

  const onClick = ({ currentTarget, pageX }) => {
    audio.seek(
      ((pageX - currentTarget.getBoundingClientRect().left) /
        currentTarget.offsetWidth) *
        duration
    );
  };

  return (
    <WaveformWave
      barWidth={4}
      color="#676767"
      {...{ pos: currentTime, peaks: samples, height, duration, onClick }}
      progressGradientColors={[
        [0, "#888"],
        [1, "#aaa"],
      ]}
    />
  );
};

export default ExampleWaveform;
