import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleHistoryDrawerOpen } from "../../store/player/actions";
import { getPlayerState } from "../../store/player/selectors";

// Components
import AudioCurrentTime from "./AudioCurrentTime";
import AudioTimeline from "./AudioTimeline";
import FormattedTime from "./Formatters/FormattedTime";
import IconButton from "./IconButton";
import PlayerMobile from "./PlayerMobile";
import StyledPlayer from "../styles/Player";
import { IconPlaylist } from "./Icons";

import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";

// Controlls
import FavoriteButton from "./PlayerControls/FavoriteButton";
import NextTrackButton from "./PlayerControls/NextTrackButton";
import PlayTrackButton from "./PlayerControls/PlayTrackButton";
import PreviousTrackButton from "./PlayerControls/PreviousTrackButton";
import RepeatButton from "./PlayerControls/RepeatButton";
import ShuffleButton from "./PlayerControls/ShuffleButton";
import VolumeControl from "./PlayerControls/VolumeControl";

const Player = () => {
  const dispatch = useDispatch();
  const [isMobilePlayerOpen, setisMobilePlayerOpen] = useState(false);
  const {
    isPlaying,
    liked,
    nextTrackId,
    oauthToken,
    previousTrackId,
    track,
    tracklistId,
    isHistoryDrawerOpen,
    media,
  } = useSelector(getPlayerState, shallowEqual);

  if (!track) {
    return null;
  }

  console.log({ media });

  return (
    <>
      <PlayerMobile {...{ isMobilePlayerOpen, setisMobilePlayerOpen }} />
      <StyledPlayer
        className={`player ${isMobilePlayerOpen ? "is-hidden" : ""}`}
      >
        <div className="now-playing-bar">
          <div className="song now-playing-bar__left">
            <figure
              className="song-image"
              onClick={() => setisMobilePlayerOpen(prev => !prev)}
            >
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

            {media.large && (
              <FavoriteButton {...{ liked, id: track.id, oauthToken }} />
            )}
          </div>

          <div className="now-playing-bar__center">
            <nav className="player-controls">
              {media.large && <RepeatButton />}
              <PreviousTrackButton
                {...{
                  trackId: previousTrackId,
                  tracklistId,
                }}
              />
              <PlayTrackButton {...{ isPlaying }} />
              <NextTrackButton
                {...{
                  trackId: nextTrackId,
                  tracklistId,
                }}
              />

              {media.large && <ShuffleButton />}
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
                isHistoryDrawerOpen
                  ? "Close History Drawer"
                  : "Open History Drawer"
              }
              onClick={() => {
                dispatch(toggleHistoryDrawerOpen());
              }}
            >
              <IconPlaylist />
            </IconButton>
            {media.large && <VolumeControl />}
          </div>
        </div>
      </StyledPlayer>
    </>
  );
};

export default Player;
