import React from "react";
import { useSelector } from "react-redux";
import { getPlayerTimes } from "../../store/player/selectors";
import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";

// Controls
import NextTrackButton from "./PlayerControls/NextTrackButton";
import PlayTrackButton from "./PlayerControls/PlayTrackButton";

// Styles
import { StyledPlayerMini } from "../styles/PlayerMobile";

const PlayerMini = ({
  isPlaying,
  nextTrackId,
  track,
  tracklistId,
  isMobilePlayerOpen,
  setisMobilePlayerOpen,
}) => {
  const { percentCompleted } = useSelector(getPlayerTimes);

  if (!track) {
    return null;
  }

  return (
    <StyledPlayerMini className={`${isMobilePlayerOpen ? "is-hidden" : ""}`}>
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

export default PlayerMini;
