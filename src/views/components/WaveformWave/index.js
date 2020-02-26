/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { size, position } from "polished";
import WaveCanvas from "./WaveCanvas";
import { getPixelRatio } from "../../../utils/helpers";

const StyledWaveformWave = styled.div`
  ${size("100%")};
  position: relative;
  cursor: pointer;
`;

const StyledWaveformWaveProgressWrap = styled.div`
  ${position("absolute", 0, null, 0, 0)};
  z-index: 2;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
`;

const WaveformWave = ({
  barWidth,
  color,
  gradientColors,
  peaks,
  progressColor,
  progressGradientColors,
  transitionDuration,
  height,
  duration,
  pos, // num of seconds
  onClick,
  displayProgress,
}) => {
  const ref = useRef();
  const wrapper = ref && ref.current;
  const pixelRatio = getPixelRatio();
  const [state, setState] = useState({
    width: (wrapper && wrapper.clientWidth) || 0,
    waveWidth: (wrapper && wrapper.clientWidth + pixelRatio) || 0,
    waveHeight: height * pixelRatio,
  });

  useLayoutEffect(() => {
    const { clientWidth } = ref.current;
    setState({
      width: clientWidth,
      waveWidth: clientWidth * pixelRatio,
      waveHeight: height * pixelRatio,
    });
  }, [height, pixelRatio]);

  useEffect(() => {
    const resize = () => {
      const { clientWidth } = ref.current;
      setState({
        width: clientWidth,
        waveWidth: clientWidth * pixelRatio,
        waveHeight: height * pixelRatio,
      });
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const { waveHeight, waveWidth, width } = state;

  const sharedProps = {
    barWidth,
    height: waveHeight,
    peaks,
    width: waveWidth,
  };

  return (
    <StyledWaveformWave
      {...{ ref }}
      // onClick={e => {
      //   const percentageOffsetX = e.nativeEvent.offsetX / width;
      //   onClick(Math.round(percentageOffsetX * duration));
      // }}
      {...{ onClick }}
    >
      <WaveCanvas
        {...{
          ...sharedProps,
          color,
          gradientColors,
        }}
      />
      {displayProgress && (
        <StyledWaveformWaveProgressWrap
          style={{
            height: `${height}px`,
            width: `${width * (pos / duration)}px`,
            transition: `width ${transitionDuration}ms ease-in-out`,
          }}
        >
          <WaveCanvas
            {...{
              ...sharedProps,
              color: progressColor,
              gradientColors: progressGradientColors,
              className: "progress",
            }}
          />
        </StyledWaveformWaveProgressWrap>
      )}
    </StyledWaveformWave>
  );
};

WaveformWave.propTypes = {
  displayProgress: PropTypes.bool,
  barWidth: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
  gradientColors: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ),
  height: PropTypes.number,
  onClick: PropTypes.func,
  peaks: PropTypes.arrayOf(PropTypes.number),
  pos: PropTypes.number, // num of seconds
  progressColor: PropTypes.string,
  progressGradientColors: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ),
  transitionDuration: PropTypes.number,
};

WaveformWave.defaultProps = {
  barWidth: null,
  color: "#bada55",
  displayProgress: false,
  duration: 0,
  height: 30,
  onClick: () => {},
  peaks: [],
  pos: 0,
  transitionDuration: 200,
};

export default WaveformWave;
