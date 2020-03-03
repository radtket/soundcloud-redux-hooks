import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getPlayerTimes } from "../../../../store/player/selectors";
import FormattedTrackTitle from "../../Formatters/FormattedTrackTitle";

// Controls
import NextTrackButton from "../../PlayerControls/NextTrackButton";
import PlayTrackButton from "../../PlayerControls/PlayTrackButton";

// Styles
import { StyledPlayerMini } from "../../../styles/PlayerMobile";
import { Track } from "../../../../store/tracks/track";

const PlayerMini = ({
  isPlaying,
  nextTrackId,
  track,
  tracklistId,
  isMobilePlayerOpen,
  setisMobilePlayerOpen,
  navbarHeight,
}) => {
  const { percentCompleted } = useSelector(getPlayerTimes);

  return (
    <StyledPlayerMini
      className={`${isMobilePlayerOpen ? "is-hidden" : ""}`}
      style={{
        bottom: `${6 + navbarHeight}px` || "56px",
      }}
    >
      <div className="inner">
        <button
          className="song-meta"
          onClick={() => setisMobilePlayerOpen(prev => !prev)}
          type="button"
        >
          <figure className="song-image">
            <img alt={track.title} src={track.artworkUrl} />
          </figure>
          <dl className="song-info ellipsis-one-line">
            <dt className="ellipsis-one-line">
              <FormattedTrackTitle title={track.title} />
            </dt>
            <dd>{track.username}</dd>
          </dl>
        </button>
        <nav className="player-controls">
          <PlayTrackButton {...{ isPlaying }} />
          <NextTrackButton
            {...{
              trackId: nextTrackId,
              tracklistId,
            }}
          />
        </nav>
      </div>
      <div className="timeline">
        <div
          className="active"
          style={{
            width: percentCompleted,
          }}
        />
      </div>
    </StyledPlayerMini>
  );
};

PlayerMini.propTypes = {
  isMobilePlayerOpen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  navbarHeight: PropTypes.number.isRequired,
  nextTrackId: PropTypes.number.isRequired,
  setisMobilePlayerOpen: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
  tracklistId: PropTypes.string.isRequired,
};

export default PlayerMini;
