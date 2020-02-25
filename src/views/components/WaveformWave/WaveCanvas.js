import React, { Component } from "react";
import ReactDOM from "react-dom";
import { isEqual } from "lodash";
import PropTypes from "prop-types";

class WaveCanvas extends Component {
  componentDidUpdate = prevProps => {
    const { color, peaks, height, width } = this.props;
    if (
      prevProps.width != width ||
      prevProps.height != height ||
      prevProps.color != color ||
      !isEqual(prevProps.peaks, peaks)
    ) {
      this.updateSize(width, height, peaks);
    }
  };

  shouldComponentUpdate = nextProps => {
    const { color, peaks, height, width } = this.props;
    return (
      nextProps.width != width ||
      nextProps.height != height ||
      nextProps.color != color ||
      !isEqual(nextProps.peaks, peaks)
    );
  };

  drawBars = (ctx, width, peaks_) => {
    const waveCanvasCtx = ctx;
    let peaks = peaks_;
    const { color, barWidth, height, pixelRatio, gradientColors } = this.props;

    const params = {
      fillParent: true,
      height,
      normalize: true,
      pixelRatio,
      barWidth,
      color,
      gradientColors,
    };

    // Bar wave draws the bottom only as a reflection of the top,
    // so we don't need negative values
    const hasMinVals = peaks.some(val => val < 0);
    if (hasMinVals) {
      // If the first value is negative, add 1 to the filtered indices
      let indexOffset = 0;
      if (peaks[0] < 0) {
        indexOffset = 1;
      }
      peaks = peaks.filter((_, index) => (index + indexOffset) % 2 == 0);
    }

    // A half-pixel offset makes lines crisp
    const $ = 0.5 / pixelRatio;
    const offsetY = 0;
    const halfH = height / 2; // Don't use height because this is after canvas height has been set

    const bar = barWidth * pixelRatio;
    const gap = Math.max(pixelRatio, 2);
    const step = bar + gap;

    let absmax = 1;

    if (params.normalize) {
      absmax = this.absMax(peaks);
    }

    const scale = peaks.length / width;

    if (gradientColors) {
      const gradient = waveCanvasCtx.createLinearGradient(0, 0, width, 0);
      gradientColors.forEach(colorItem => {
        // The first position of each array is the stop position between 0 and 1
        // The second position is the color
        gradient.addColorStop(colorItem[0], colorItem[1]);
      });
      waveCanvasCtx.fillStyle = gradient;
    } else {
      waveCanvasCtx.fillStyle = params.color;
    }

    if (!waveCanvasCtx) {
      return;
    }

    for (let i = 0; i < width; i += step) {
      let h = Math.round((peaks[Math.floor(i * scale)] / absmax) * halfH);
      if (h === 0) {
        h = 1;
      }
      waveCanvasCtx.fillRect(i + $, halfH - h + offsetY, bar + $, h * 2);
    }
  };

  drawWaves = (waveCanvasCtx, width, peaks_) => {
    let peaks = peaks_;
    const { color, height, pixelRatio, gradientColors } = this.props;

    const params = {
      fillParent: true,
      height,
      normalize: true,
      pixelRatio,
      color,
      gradientColors,
    };

    // Support arrays without negative peaks
    const hasMinValues = [].some.call(peaks, val => val < 0);
    if (!hasMinValues) {
      const reflectedPeaks = [];
      for (let i = 0, len = peaks.length; i < len; i += 1) {
        reflectedPeaks[2 * i] = peaks[i];
        reflectedPeaks[2 * i + 1] = -peaks[i];
      }
      peaks = reflectedPeaks;
    }

    // A half-pixel offset makes lines crisp
    const $ = 0.5 / params.pixelRatio;
    const offsetY = 0;
    const halfH = params.height / 2;
    const length = ~~(peaks.length / 2);

    let scale = 1;
    if (params.fillParent && width != length) {
      scale = width / length;
    }

    let absmax = 1;
    if (params.normalize) {
      const max = this.max(peaks);
      const min = this.min(peaks);
      absmax = -min > max ? -min : max;
    }

    if (params.gradientColors) {
      const gradient = waveCanvasCtx.createLinearGradient(0, 0, width, 0);
      params.gradientColors.forEach(color => {
        // The first position of each array is the stop position between 0 and 1
        // The second position is the color
        gradient.addColorStop(color[0], color[1]);
      });
      waveCanvasCtx.fillStyle = gradient;
    } else {
      waveCanvasCtx.fillStyle = params.color;
    }

    if (!waveCanvasCtx) {
      return;
    }

    waveCanvasCtx.beginPath();
    waveCanvasCtx.moveTo($, halfH + offsetY);

    for (let i = 0; i < length; i += 1) {
      var h = Math.round((peaks[2 * i] / absmax) * halfH);
      waveCanvasCtx.lineTo(i * scale + $, halfH - h + offsetY);
    }

    // Draw the bottom edge going backwards, to make a single
    // closed hull to fill.
    for (let i = length - 1; i >= 0; i -= 1) {
      var h = Math.round((peaks[2 * i + 1] / absmax) * halfH);
      waveCanvasCtx.lineTo(i * scale + $, halfH - h + offsetY);
    }

    // waveCanvasCtx.closePath()
    waveCanvasCtx.fill();

    // Always draw a median line
    waveCanvasCtx.fillRect(0, halfH + offsetY - $, width, $);
  };

  absMax = values => {
    let max = -Infinity;
    for (const i in values) {
      const num = Math.abs(values[i]);
      if (num > max) {
        max = num;
      }
    }

    return max;
  };

  max = values => {
    let max = -Infinity;
    for (const i in values) {
      if (values[i] > max) {
        max = values[i];
      }
    }

    return max;
  };

  min = values => {
    let min = +Infinity;
    for (const i in values) {
      if (values[i] < min) {
        min = values[i];
      }
    }

    return min;
  };

  updateSize = (width, height, peaks) => {
    const { pixelRatio, barWidth } = this.props;
    if (peaks) {
      const waveCanvasCtx = ReactDOM.findDOMNode(this.wave).getContext("2d");

      const displayWidth = Math.round(width / pixelRatio);
      const displayHeight = Math.round(height / pixelRatio);
      waveCanvasCtx.canvas.width = width;
      waveCanvasCtx.canvas.height = height;
      waveCanvasCtx.canvas.style.width = `${displayWidth}px`;
      waveCanvasCtx.canvas.style.height = `${displayHeight}px`;

      waveCanvasCtx.clearRect(0, 0, width, height);
      if (barWidth) {
        this.drawBars(waveCanvasCtx, width, peaks);
      } else {
        this.drawWaves(waveCanvasCtx, width, peaks);
      }
    }
  };

  render() {
    const { peaks } = this.props;
    if (!peaks) {
      return null;
    }

    return (
      <canvas
        ref={instance => {
          this.wave = instance;
        }}
      />
    );
  }
}

WaveCanvas.propTypes = {
  barWidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
  peaks: PropTypes.arrayOf(PropTypes.number.isRequired),
  pixelRatio: PropTypes.number,
  color: PropTypes.string,
  gradientColors: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    )
  ),
};

WaveCanvas.defaultProps = {
  barWidth: 0,
  color: "ccc",
  gradientColors: null,
  peaks: [],
  width: 0,
  // eslint-disable-next-line no-restricted-globals
  pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
};

export default WaveCanvas;
