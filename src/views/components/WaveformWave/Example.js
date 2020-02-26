import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import request from "superagent";
import PropTypes from "prop-types";
import WaveformWave from ".";

// Player
import { getPlayerTimes } from "../../../store/player/selectors";
import { Track } from "../../../store/tracks/track";

const ExampleWaveform = ({ track, displayProgress, url }) => {
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
        onClick: e => console.log(e),
        displayProgress,
        track,
      }}
      progressGradientColors={["#A53377", "#C794B3"]}
    />
  );
};

ExampleWaveform.propTypes = {
  displayProgress: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default ExampleWaveform;
