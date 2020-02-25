import React from "react";
import { Link } from "react-router-dom";
import StyledTrackCardLarge from "../styles/TrackCardLarge";
import WaveformTimeline from "./WaveformTimeline";
import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";
import IconButton from "./IconButton";
import { IconPlay } from "./Icons";
import { StyledPlayHoverButton } from "../styles/Buttons";

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
        <img src={track.artworkUrl} />
      </figure>

      <div className="content">
        <div className="flex-row">
          <StyledPlayHoverButton onClick={isPlaying ? pause : play}>
            <IconPlay />
          </StyledPlayHoverButton>
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

        <WaveformTimeline
          background="#5C3E54"
          displayProgress={isSelected}
          url={track.waveformUrl}
        />
      </div>
    </StyledTrackCardLarge>
  );
};

export default TrackCardLarge;
