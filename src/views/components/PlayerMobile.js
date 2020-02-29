import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Vibrant from "node-vibrant";
import { getPlayerState } from "../../store/player/selectors";
// Components
import AudioCurrentTime from "./AudioCurrentTime";
import AudioTimeline from "./AudioTimeline";
import FormattedTime from "./Formatters/FormattedTime";
import IconButton from "./IconButton";

import { IconChevronDown, IconEllipsis } from "./Icons";

import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";

// Controlls
import FavoriteButton from "./PlayerControls/FavoriteButton";
import NextTrackButton from "./PlayerControls/NextTrackButton";
import PlayTrackButton from "./PlayerControls/PlayTrackButton";
import PreviousTrackButton from "./PlayerControls/PreviousTrackButton";
import RepeatButton from "./PlayerControls/RepeatButton";
import ShuffleButton from "./PlayerControls/ShuffleButton";
import StyledPlayerMobile from "../styles/PlayerMobile";
import PlayerOptionsMenu from "./PlayerOptionsMenu";

const PlayerMobile = () => {
  const [isOptionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState(null);
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

  useEffect(() => {
    const init = ({ artworkUrl }) => {
      Vibrant.from(artworkUrl)
        .getPalette()
        .then(palette => {
          setBackgroundColor(palette.Vibrant.hex);
        });
    };

    if (track && track.artworkUrl) {
      init(track);
    }
  }, [track]);

  if (!track) {
    return null;
  }

  return (
    <StyledPlayerMobile>
      <div
        id="background"
        style={{
          backgroundColor,
          // backgroundImage: `url("${track.artworkUrl}")`,
        }}
      />
      <div className="now-playing-bar">
        {/* ONLY MOBILE */}
        <header className="player_header">
          <IconButton>
            <IconChevronDown />
          </IconButton>
          <span>Now Playing</span>
          <IconButton onClick={() => setOptionsMenuOpen(prev => !prev)}>
            <IconEllipsis />
          </IconButton>
        </header>
        {/* END  */}

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
        </div>

        <div className="now-playing-bar__center">
          <nav className="player-controls">
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
          </nav>
          <div className="player-timeline">
            <AudioCurrentTime />
            <AudioTimeline />
            <FormattedTime unit="ms" value={track.duration} />
          </div>

          <nav className="sub-controls">
            <RepeatButton />
            <ShuffleButton />
            <FavoriteButton />
          </nav>
        </div>
      </div>

      <PlayerOptionsMenu
        {...{
          isOptionsMenuOpen,
          setOptionsMenuOpen,
          track,
        }}
      />
    </StyledPlayerMobile>
  );
};

export default PlayerMobile;
