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
        <img alt={track.title} src={track.artworkUrl} />
      </button>
      <figcaption className="ellipsis-one-line">
        <h6 className="ellipsis-one-line">{formatSongTitle(track)}</h6>
        <cite
          album-cover={track.id}
          avatar={track.id}
          className="author ellipsis-one-line"
        >
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
