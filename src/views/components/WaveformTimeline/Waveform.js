import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { StyledWaveform } from "../../styles/Waveform";

const Waveform = ({ width, height, samples }) => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext("2d");

    context.fillStyle = "#1d1e1f";

    let i = 0;
    let x = 0;
    let v;

    for (; i < samples.length; i += 2, x += 1) {
      v = samples[i] / 4;
      context.fillRect(x, 0, 1, 35 - v);
      context.fillRect(x, 35 + v, 1, 70);
    }
  }, [height, samples, width]);

  return (
    <StyledWaveform>
      <canvas
        {...{ ref }}
        style={{
          width,
          height,
        }}
      />
    </StyledWaveform>
  );
};

Waveform.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  samples: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Waveform;
