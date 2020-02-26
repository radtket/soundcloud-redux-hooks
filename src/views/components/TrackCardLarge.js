import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StyledTrackCardLarge from "../styles/TrackCardLarge";
import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";
import {
  IconPlay,
  IconHeadphones,
  IconHeart,
  IconComment,
  IconPause,
} from "./Icons";
import { StyledTrackCardLargePlay } from "../styles/Buttons";
import ExampleWaveform from "./WaveformWave/Example";
import FormattedInteger from "./Formatters/FormattedInteger";
import { Track } from "../../store/tracks/track";

const TrackCardLarge = ({
  isCompact,
  isPlaying,
  isSelected,
  pause,
  play,
  track,
  tracklistId,
}) => {
  return (
    <StyledTrackCardLarge>
      <figure className="cover">
        <img alt={track.title} src={track.artworkUrl} />
      </figure>
      <div className="content">
        <ul className="track-card__stats">
          <li>
            <IconHeadphones />
            <FormattedInteger value={track.playbackCount} />
          </li>
          <li>
            <IconHeart />
            <FormattedInteger value={track.likesCount} />
          </li>
          <li>
            <IconComment />
            <FormattedInteger value={track.commentCount} />
          </li>
        </ul>
        <div className="flex-row">
          <StyledTrackCardLargePlay onClick={isPlaying ? pause : play}>
            {!isPlaying ? <IconPause /> : <IconPlay />}
            <span className="visuallyhidden">
              {!isPlaying ? "Pause" : "Play"}
            </span>
          </StyledTrackCardLargePlay>
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
        </div>
        <ExampleWaveform
          background="#5C3E54"
          displayProgress={isSelected}
          {...{ track }}
          url={track.waveformUrl}
        />
      </div>
    </StyledTrackCardLarge>
  );
};

TrackCardLarge.propTypes = {
  isCompact: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default TrackCardLarge;
