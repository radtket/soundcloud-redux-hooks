import React, { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";

const WaveCanvas = ({
  peaks,
  color,
  barWidth,
  height,
  pixelRatio,
  gradientColors,
  width,
  ...props
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const canvas = ref.current;

    const absMax = values => {
      let max = -Infinity;
      Object.values(values).forEach(value => {
        const num = Math.abs(value);

        if (num > max) {
          max = num;
        }
      });

      return max;
    };

    const context = canvas.getContext("2d");
    context.canvas.width = width;
    context.canvas.height = height;
    context.canvas.style.width = `${Math.round(width / pixelRatio)}px`;
    context.canvas.style.height = `${Math.round(height / pixelRatio)}px`;

    context.clearRect(0, 0, width, height);

    // Bar wave draws the bottom only as a reflection of the top,
    // so we don't need negative values
    let samples = peaks;
    if (samples.some(val => val < 0)) {
      // If the first value is negative, add 1 to the filtered indices
      const indexOffset = samples[0] < 0 ? 1 : 0;
      samples = samples.filter((_, index) => (index + indexOffset) % 2 === 0);
    }

    // A half-pixel offset makes lines crisp
    const $ = 0.5 / pixelRatio;
    const offsetY = 0;
    const halfH = height / 2; // Don't use height because this is after canvas height has been set

    const bar = barWidth * pixelRatio;
    const gap = Math.max(pixelRatio, 2);
    const step = bar + gap;

    const absmax = absMax(peaks) || 1;

    const scale = peaks.length / width;

    if (gradientColors) {
      const gradient = context.createLinearGradient(0, 0, 0, height / 2);
      gradientColors.forEach((color_, idx) => {
        // The first position of each array is the stop position between 0 and 1
        // The second position is the color
        const stopPosition = idx % 2 === 0 ? 0 : 1;
        gradient.addColorStop(stopPosition, color_);
      });
      context.fillStyle = gradient;
    } else {
      context.fillStyle = color;
    }

    if (!context) {
      return;
    }

    for (let i = 0; i < width; i += step) {
      let h = Math.round((peaks[Math.floor(i * scale)] / absmax) * halfH);
      if (h === 0) {
        h = 1;
      }
      context.fillRect(i + $, halfH - h + offsetY, bar + $, h * 2);
    }
  }, [barWidth, color, gradientColors, height, peaks, pixelRatio, width]);

  if (!peaks) {
    return null;
  }

  return <canvas {...{ ...props, ref }} />;
};

WaveCanvas.propTypes = {
  barWidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
  peaks: PropTypes.arrayOf(PropTypes.number.isRequired),
  pixelRatio: PropTypes.number,
  color: PropTypes.string,
  gradientColors: PropTypes.arrayOf(PropTypes.string),
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
