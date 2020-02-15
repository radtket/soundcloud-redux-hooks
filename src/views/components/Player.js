import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { playSelectedTrack } from "../../store/player/actions";
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

import FormattedTrackTitle from "./FormattedTrackTitle";
import { StyledFavoriteButton } from "../styles/Buttons";

import RepeatButton from "./PlayerControls/RepeatButton";
import VolumeControl from "./PlayerControls/VolumeControl";
import { getLikes } from "../../store/session/selectors";

const Player = () => {
  const dispatch = useDispatch();

  const {
    isPlaying,
    liked,
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
      getLikes,
      (player, track_, { nextTrackId, previousTrackId }, likes) => {
        const getNextTrack = () =>
          dispatch(playSelectedTrack(nextTrackId, player.tracklistId));

        const getPreviousTrack = () =>
          dispatch(playSelectedTrack(previousTrackId, player.tracklistId));

        return {
          ...audio,
          isPlaying: player.isPlaying,
          nextTrack: nextTrackId && getNextTrack,
          previousTrack: previousTrackId && getPreviousTrack,
          track: track_,
          liked: Boolean(track_ && likes[track_.id]),
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
          className={liked ? "active" : ""}
          onClick={() => {
            console.log({ liked });
          }}
        >
          <IconHeart />
        </StyledFavoriteButton>
      </div>

      <div className="now-playing-bar__center">
        <nav className="player-controls">
          <RepeatButton />
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
