import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import playerActions from "../../store/player/actions";
import {
  getPlayer,
  getPlayerTrack,
  getPlayerTracklistCursor,
} from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";

// Components
import AudioCurrentTime from "./AudioCurrentTime";
import AudioTimeline from "./AudioTimeline";
import FormattedTime from "./FormattedTime";
import IconButton from "./IconButton";

import StyledPlayer from "../styles/Player";
import { IconPlay, IconPause, IconNext, IconPrev, IconHeart } from "./Icons";
import VolumeControl from "./VolumeControl";
import FormattedTrackTitle from "./FormattedTrackTitle";
import { StyledFavoriteButton } from "../styles/Buttons";

const Player = () => {
  const dispatch = useDispatch();
  const [isFavorite, setFavorite] = useState(false);
  const {
    isPlaying,
    nextTrack,
    pause,
    play,
    previousTrack,
    track,
  } = useSelector(
    createSelector(
      getPlayer,
      getPlayerTrack,
      getPlayerTracklistCursor,
      (player, track_, { nextTrackId, previousTrackId }) => {
        const getNextTrack = () =>
          dispatch(
            playerActions.playSelectedTrack(nextTrackId, player.tracklistId)
          );

        const getPreviousTrack = () =>
          dispatch(
            playerActions.playSelectedTrack(previousTrackId, player.tracklistId)
          );

        return {
          ...audio,
          isPlaying: player.isPlaying,
          nextTrack: nextTrackId && getNextTrack,
          previousTrack: previousTrackId && getPreviousTrack,
          track: track_,
        };
      }
    ),
    shallowEqual
  );

  if (!track) {
    return null;
  }

  return (
    <StyledPlayer className="player">
      <div className="song now-playing-bar__left">
        <figure className="song-image">
          <img alt={track.title} src={track.artworkUrl} />
        </figure>
        <dl className="song-info ellipsis-one-line">
          <dt className="ellipsis-one-line">
            <FormattedTrackTitle title={track.title} />
          </dt>
          <dd className="ellipsis-one-line">{track.username}</dd>
        </dl>

        <StyledFavoriteButton
          className={isFavorite ? "active" : ""}
          onClick={() => {
            setFavorite(prev => !prev);
          }}
        >
          <IconHeart />
        </StyledFavoriteButton>
      </div>

      <div className="now-playing-bar__center">
        <nav className="player-controls">
          <IconButton
            aria-label="Skip to previous track"
            disabled={!nextTrack}
            onClick={previousTrack}
          >
            <IconPrev />
          </IconButton>

          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={isPlaying ? pause : play}
            size="lg"
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </IconButton>

          <IconButton
            aria-label="Skip to next track"
            disabled={!nextTrack}
            onClick={nextTrack}
          >
            <IconNext />
          </IconButton>
        </nav>
        <div className="player-timeline">
          <AudioCurrentTime />
          <AudioTimeline />
          <FormattedTime unit="ms" value={track.duration} />
        </div>
      </div>

      <div className="now-playing-bar__right">
        <VolumeControl />
      </div>
    </StyledPlayer>
  );
};

export default Player;
