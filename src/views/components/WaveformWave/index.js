/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { size, position } from "polished";
import WaveCanvas from "./WaveCanvas";
import { getPixelRatio } from "../../../utils/helpers";
import FormattedTime from "../Formatters/FormattedTime";

const StyledTimesList = styled.ul`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-right: 24px;
  position: absolute;
  width: 100%;
`;

const StyledWaveformWave = styled.div`
  ${size("100%")};
  position: absolute;
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
  track,
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
    <>
      <StyledTimesList
        style={{
          bottom: height / 2,
        }}
      >
        <li>
          <FormattedTime value={displayProgress ? pos : 0} />
        </li>
        <li>
          <FormattedTime unit="ms" value={track.duration} />
        </li>
      </StyledTimesList>
      <StyledWaveformWave
        {...{ ref }}
        // onClick={e => {
        //   const percentageOffsetX = e.nativeEvent.offsetX / width;
        //   onClick(Math.round(percentageOffsetX * duration));
        // }}
        {...{ onClick }}
        style={{
          // maxHeight: height,
          height,
          bottom: `${-height / 2}px`,
        }}
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
    </>
  );
};

WaveformWave.propTypes = {
  displayProgress: PropTypes.bool,
  barWidth: PropTypes.number,
  duration: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
  peaks: PropTypes.arrayOf(PropTypes.number),
  pos: PropTypes.number, // num of seconds
  transitionDuration: PropTypes.number,

  color: PropTypes.string,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
  progressColor: PropTypes.string,
  progressGradientColors: PropTypes.arrayOf(PropTypes.string),
};

WaveformWave.defaultProps = {
  barWidth: null,
  displayProgress: false,
  duration: 0,
  height: 30,
  onClick: () => {},
  peaks: [],
  pos: 0,
  transitionDuration: 200,

  color: "#bada55",
  gradientColors: null,
  progressColor: null,
  progressGradientColors: null,
};

export default WaveformWave;
