import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  playSelectedTrack,
  toggleHistoryDrawerOpen,
} from "../../store/player/actions";
import { getPlayerState } from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";

// Components
import AudioCurrentTime from "./AudioCurrentTime";
import AudioTimeline from "./AudioTimeline";
import FormattedTime from "./Formatters/FormattedTime";
import IconButton from "./IconButton";

import StyledPlayer from "../styles/Player";
import { IconPlay, IconPause, IconNext, IconPrev, IconPlaylist } from "./Icons";

import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";

import RepeatButton from "./PlayerControls/RepeatButton";
import VolumeControl from "./PlayerControls/VolumeControl";
import ShuffleButton from "./PlayerControls/ShuffleButton";
import FavoriteButton from "./PlayerControls/FavoriteButton";

const Player = () => {
  const dispatch = useDispatch();

  const {
    isPlaying,
    liked,
    nextTrackId,
    oauthToken,
    previousTrackId,
    track,
    tracklistId,
    isHistoryDrawerOpen,
  } = useSelector(getPlayerState, shallowEqual);

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
            <Link
              className="ellipsis-one-line username"
              to={`/users/${track.userId}/tracks/${track.id}`}
            >
              <FormattedTrackTitle title={track.title} />
            </Link>
          </dt>
          <dd>
            <Link
              className="ellipsis-one-line username"
              to={`/users/${track.userId}/tracks`}
            >
              {track.username}
            </Link>
          </dd>
        </dl>

        <FavoriteButton {...{ liked, id: track.id, oauthToken }} />
      </div>

      <div className="now-playing-bar__center">
        <nav className="player-controls">
          <RepeatButton />
          <IconButton
            aria-label="Skip to previous track"
            disabled={!previousTrackId}
            onClick={() => {
              if (previousTrackId) {
                dispatch(
                  playSelectedTrack({
                    trackId: previousTrackId,
                    tracklistId,
                  })
                );
              }
            }}
          >
            <IconPrev />
          </IconButton>

          <IconButton
            aria-label={isPlaying ? "Pause" : "Play"}
            onClick={isPlaying ? audio.pause : audio.play}
            size="lg"
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </IconButton>

          <IconButton
            aria-label="Skip to next track"
            disabled={!nextTrackId}
            onClick={() => {
              if (nextTrackId) {
                dispatch(
                  playSelectedTrack({
                    trackId: nextTrackId,
                    tracklistId,
                  })
                );
              }
            }}
          >
            <IconNext />
          </IconButton>
          <ShuffleButton />
        </nav>
        <div className="player-timeline">
          <AudioCurrentTime />
          <AudioTimeline />
          <FormattedTime unit="ms" value={track.duration} />
        </div>
      </div>

      <div className="now-playing-bar__right">
        <IconButton
          aria-label={
            isHistoryDrawerOpen ? "Close History Drawer" : "Open History Drawer"
          }
          onClick={() => {
            dispatch(toggleHistoryDrawerOpen());
          }}
        >
          <IconPlaylist />
        </IconButton>
        <VolumeControl />
      </div>
    </StyledPlayer>
  );
};

export default Player;
