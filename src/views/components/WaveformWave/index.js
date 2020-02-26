/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import WaveCanvas from "./WaveCanvas";

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
  pixelRatio,
}) => {
  const ref = useRef();
  const wrapper = ref && ref.current;
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
  return (
    <div
      {...{ ref }}
      // onClick={e => {
      //   const percentageOffsetX = e.nativeEvent.offsetX / width;
      //   onClick(Math.round(percentageOffsetX * duration));
      // }}
      {...{ onClick }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
    >
      <WaveCanvas
        {...{
          barWidth,
          color,
          gradientColors,
          height: waveHeight,
          peaks,
          width: waveWidth,
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 2,
          left: 0,
          top: 0,
          bottom: 0,
          overflow: "hidden",
          height: `${height}px`,
          width: `${width * (pos / duration)}px`,
          display: "block",
          transition: `width ${transitionDuration}ms ease-in-out`,
          boxSizing: "border-box",
        }}
      >
        <WaveCanvas
          {...{
            barWidth,
            className: "progress",
            color: progressColor,
            gradientColors: progressGradientColors,
            height: waveHeight,
            peaks,
            width: waveWidth,
          }}
        />
      </div>
    </div>
  );
};

WaveformWave.propTypes = {
  barWidth: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
  gradientColors: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ),
  height: PropTypes.number,
  onClick: PropTypes.func,
  peaks: PropTypes.arrayOf(PropTypes.number),
  pixelRatio: PropTypes.number,
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
  gradientColors: [
    [0, "#888"],
    [1, "#aaa"],
  ],
  peaks: [],
  duration: 0,
  height: 30,
  pos: 0,
  onClick: () => {},
  progressGradientColors: [
    [0, "#888"],
    [1, "#aaa"],
  ],
  // eslint-disable-next-line no-restricted-globals
  pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
  progressColor: "#555555",
  transitionDuration: 200,
};

export default WaveformWave;
