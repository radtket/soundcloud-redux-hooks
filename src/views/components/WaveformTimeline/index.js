import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import request from "superagent";
import Timeline from "./Timeline";
import Waveform from "./Waveform";
import { StyledWaveformTimeline } from "../../styles/Waveform";

const WaveformTimeline = ({ displayProgress, url }) => {
  const [state, setState] = useState({ isReady: false });

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

  const { isReady } = state;

  return (
    <StyledWaveformTimeline {...{ isReady }}>
      {displayProgress && <Timeline />}
      {isReady && <Waveform {...state} />}
    </StyledWaveformTimeline>
  );
};

WaveformTimeline.propTypes = {
  displayProgress: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};

export default WaveformTimeline;
