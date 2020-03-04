import React from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { IconPause, IconPlay } from "../Icons";
import { audio } from "../../../store/player/audio-service";

const PlayTrackButton = ({ isPlaying, ...props }) => {
  return (
    <IconButton
      {...props}
      aria-label={isPlaying ? "Pause" : "Play"}
      onClick={isPlaying ? audio.pause : audio.play}
      size="lg"
    >
      {isPlaying ? <IconPause /> : <IconPlay />}
    </IconButton>
  );
};

PlayTrackButton.propTypes = {
  isPlaying: PropTypes.bool,
};

PlayTrackButton.defaultProps = {
  isPlaying: null,
};

export default PlayTrackButton;
