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

    const waveCanvasCtx = canvas.getContext("2d");
    waveCanvasCtx.canvas.width = width;
    waveCanvasCtx.canvas.height = height;
    waveCanvasCtx.canvas.style.width = `${Math.round(width / pixelRatio)}px`;
    waveCanvasCtx.canvas.style.height = `${Math.round(height / pixelRatio)}px`;

    waveCanvasCtx.clearRect(0, 0, width, height);

    // Bar wave draws the bottom only as a reflection of the top,
    // so we don't need negative values

    if (peaks.some(val => val < 0)) {
      // If the first value is negative, add 1 to the filtered indices
      const indexOffset = peaks[0] < 0 ? 1 : 0;
      peaks = peaks.filter((_, index) => (index + indexOffset) % 2 == 0);
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
      const gradient = waveCanvasCtx.createLinearGradient(0, 0, width, 0);
      gradientColors.forEach(([color1, color2]) => {
        // The first position of each array is the stop position between 0 and 1
        // The second position is the color
        gradient.addColorStop(color1, color2);
      });
      waveCanvasCtx.fillStyle = gradient;
    } else {
      waveCanvasCtx.fillStyle = color;
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
  }, [barWidth, height, peaks, pixelRatio, width]);

  if (!peaks) {
    return null;
  }

  return <canvas {...{ ref }} />;
};

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
