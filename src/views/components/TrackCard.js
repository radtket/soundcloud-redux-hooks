import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StyledTrackCard from "../styles/TrackCard";
import { Track } from "../../store/tracks/track";
import FormattedTrackTitle from "./FormattedTrackTitle";
import { IconPlay, IconPause } from "./Icons";
import WaveformTimeline from "./WaveformTimeline";

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
      <button
        className={isSelected ? "is-active" : ""}
        onClick={isPlaying ? pause : play}
        type="button"
      >
        <img alt={track.title} src={track.artworkUrl} />
        <div className="trackcard--overlay">
          <div className="trackcard--overlay__bg" />
          <div className="trackcard--overlay__icon">
            {isPlaying ? <IconPause /> : <IconPlay />}
          </div>
        </div>
      </button>
      <figcaption className="ellipsis-one-line">
        <h6 className="ellipsis-one-line">
          <FormattedTrackTitle title={track.title} />
        </h6>
        <cite
          album-cover={track.id}
          avatar={track.id}
          className="author ellipsis-one-line"
        >
          <Link to={`/users/${track.userId}/tracks`}>{track.username}</Link>
        </cite>
      </figcaption>
      {!isCompact && (
        <WaveformTimeline
          displayProgress={isSelected}
          url={track.waveformUrl}
        />
      )}
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
