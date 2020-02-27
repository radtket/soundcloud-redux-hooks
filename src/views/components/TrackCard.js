import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StyledTrackCard from "../styles/TrackCard";
import { Track } from "../../store/tracks/track";
import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";
import WaveformTimeline from "./WaveformTimeline";
import ArtworkPlayRecordSpin from "./ArtworkPlayRecordSpin";

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
      <ArtworkPlayRecordSpin
        onClick={isPlaying ? pause : play}
        {...{ isSelected, track, isPlaying }}
      />
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
