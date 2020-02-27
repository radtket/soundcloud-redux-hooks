import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { IconPause, IconPlay } from "./Icons";
import { Track } from "../../store/tracks/track";
import { StyledArtworkPlayRecordSpin } from "../styles/ArtworkPlay";
import IconButton from "./IconButton";

const ArtworkPlayRecordSpin = ({
  isSelected,
  onClick,
  track,
  isPlaying,
  ...props
}) => {
  return (
    <StyledArtworkPlayRecordSpin
      className={classNames({
        "is-playing": isPlaying,
        "is-selected": isSelected,
      })}
      {...{ onClick, ...props }}
    >
      <div className="cover">
        <img alt={track.title} src={track.artworkUrl} />
      </div>
      <div className="waves">
        <div className="wave baseline" />
        <div className="wave piano" />
        <div className="wave riffs" />
        <div className="wave kicks" />
      </div>
      <IconButton className="play-button" {...{ onClick }}>
        {isPlaying ? <IconPause /> : <IconPlay />}
      </IconButton>
    </StyledArtworkPlayRecordSpin>
  );
};

ArtworkPlayRecordSpin.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default ArtworkPlayRecordSpin;
