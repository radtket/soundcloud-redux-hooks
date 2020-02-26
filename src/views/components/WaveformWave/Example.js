import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import request from "superagent";
import WaveformWave from ".";

// Player
import { getPlayerTimes } from "../../../store/player/selectors";
import { audio } from "../../../store/player/audio-service";

const ExampleWaveform = ({ displayProgress, url }) => {
  const [state, setState] = useState({ isReady: false });
  const { duration, currentTime } = useSelector(getPlayerTimes);

  useEffect(() => {
    let req = null;

    const makeRequest = u => {
      if (req) {
        req.abort();
      }

      req = request.get(u).end((error, { body }) => {
        if (!error) {
          setState({ ...body, isReady: true });
        }
      });
    };

    makeRequest(url);
    return () => {
      req.abort();
    };
  }, [setState, url]);

  if (!state.isReady) {
    return null;
  }

  const { height, samples } = state;

  return (
    <WaveformWave
      barWidth={4}
      color="#676767"
      {...{
        pos: currentTime,
        peaks: samples,
        height,
        duration,
        // onClick,
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
