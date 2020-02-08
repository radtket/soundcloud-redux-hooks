import React from "react";
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
import { IconPlay, IconPause, IconNext, IconPrev } from "./Icons";
import VolumeControl from "./VolumeControl";

const Player = () => {
  const dispatch = useDispatch();

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
      <div className="player-timeline">
        <AudioTimeline />
      </div>

      <div className="player-controls">
        <div>
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
        </div>

        <div className="player-controls__time">
          <AudioCurrentTime /> /{" "}
          <FormattedTime unit="ms" value={track.duration} />
        </div>

        <div className="player-controls__title">{track.title}</div>

        <VolumeControl />
      </div>
    </StyledPlayer>
  );
};

export default Player;
