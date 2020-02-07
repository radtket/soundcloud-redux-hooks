import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StyledTrackCard from "../styles/TrackCard";
import { formatSongTitle } from "../utils/helpers";
import { Track } from "../../store/tracks/track";

const TrackCard = ({
  isCompact,
  isPlaying,
  isSelected,
  pause,
  play,
  track,
}) => {
  return (
    <StyledTrackCard>
      <button onClick={isPlaying ? pause : play} type="button">
        <img alt="" src={track.artworkUrl} />
      </button>
      <figcaption>
        <h6>{formatSongTitle(track)}</h6>
        <cite album-cover="9sz5" avatar="9sz2" className="author">
          <Link to={`/users/${track.userId}/tracks`}>{track.username}</Link>
        </cite>
      </figcaption>
    </StyledTrackCard>
  );
};

TrackCard.propTypes = {
  isCompact: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default TrackCard;
