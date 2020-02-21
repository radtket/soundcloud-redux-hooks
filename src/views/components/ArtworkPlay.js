import React from "react";
import PropTypes from "prop-types";
import { IconPause, IconPlay } from "./Icons";
import { Track } from "../../store/tracks/track";
import StyledArtworkPlay from "../styles/ArtworkPlay";

const ArtworkPlay = ({ isSelected, onClick, track, isPlaying, ...props }) => {
  return (
    <StyledArtworkPlay
      className={isSelected ? "is-active" : ""}
      {...{ onClick, ...props }}
      type="button"
    >
      <img alt={track.title} src={track.artworkUrl} />
      <div className="trackcard--overlay">
        <div className="trackcard--overlay__bg" />
        <div className="trackcard--overlay__icon">
          {isPlaying ? <IconPause /> : <IconPlay />}
        </div>
      </div>
    </StyledArtworkPlay>
  );
};

ArtworkPlay.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default ArtworkPlay;
