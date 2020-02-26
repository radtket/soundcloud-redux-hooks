/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { isEqual } from "lodash";
import PropTypes from "prop-types";

import WaveCanvas from "./WaveCanvas";

class WaveformWave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      waveWidth: 0,
      waveHeight: props.height,
    };
  }

  componentDidMount = () => {
    this.resize();
    window.addEventListener("resize", this.resize);
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const {
      color,
      duration,
      gradientColors,
      peaks,
      pos, // num of seconds
      progressColor,
      progressGradientColors,
    } = this.props;

    const stateChanged = !isEqual(this.state, nextState);
    const peaksChanged = !isEqual(peaks, nextProps.peaks);
    const posChanged = pos !== nextProps.pos;
    const durationChanged = duration !== nextProps.duration;
    const colorChanged = color !== nextProps.color;
    const gradientChanged = !isEqual(gradientColors, nextProps.gradientColors);
    const progressColorChanged = progressColor !== nextProps.progressColor;
    const progressGradientChanged = !isEqual(
      progressGradientColors,
      nextProps.progressGradientColors
    );
    return (
      stateChanged ||
      peaksChanged ||
      posChanged ||
      durationChanged ||
      colorChanged ||
      gradientChanged ||
      progressColorChanged ||
      progressGradientChanged
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };

  max = values => {
    let max = -Infinity;
    values.forEach(i => {
      if (values[i] > max) {
        max = values[i];
      }
    });

    return max;
  };

  min = values => {
    let min = +Infinity;
    values.forEach(i => {
      if (values[i] < min) {
        min = values[i];
      }
    });

    return min;
  };

  resize = () => {
    const containerWidth = ReactDOM.findDOMNode(this.wrapper).clientWidth;
    const { height, pixelRatio } = this.props;
    this.setState({
      width: containerWidth,
      waveWidth: containerWidth * pixelRatio,
      waveHeight: height * pixelRatio,
    });
  };

  render() {
    const {
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
    } = this.props;

    const { waveHeight, waveWidth, width } = this.state;

    return (
      <div
        ref={instance => {
          this.wrapper = instance;
        }}
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
            // ref={instance => {
            //   this.progress = instance;
            // }}
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
  }
}

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
  height: 30,
  onClick: () => {},
  // eslint-disable-next-line no-restricted-globals
  pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
  progressColor: "#555555",
  transitionDuration: 200,
};

export default WaveformWave;
