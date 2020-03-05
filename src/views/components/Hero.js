import React from "react";
import { rgba } from "polished";
import { StyledHero } from "../styles/Hero";
import { BODY_COLOR } from "../styles/GlobalStyles";

const Hero = () => {
  const waveX = 48;
  return (
    <StyledHero {...{ BODY_COLOR, waveX }}>
      <div className="inner-header">
        <h1>Audeaux</h1>
      </div>
      <div>
        <svg
          className="waves"
          preserveAspectRatio="none"
          shapeRendering="auto"
          viewBox="0 24 150 28"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              id="rolling-wave"
            />
          </defs>
          <g className="parallax">
            <use
              fill={rgba(BODY_COLOR, 0.7)}
              x={waveX}
              xlinkHref="#rolling-wave"
              y={0}
            />
            <use
              fill={rgba(BODY_COLOR, 0.5)}
              x={waveX}
              xlinkHref="#rolling-wave"
              y={3}
            />
            <use
              fill={rgba(BODY_COLOR, 0.3)}
              x={waveX}
              xlinkHref="#rolling-wave"
              y={5}
            />
            <use fill={BODY_COLOR} x={waveX} xlinkHref="#rolling-wave" y={7} />
          </g>
        </svg>
      </div>
    </StyledHero>
  );
};

export default Hero;
