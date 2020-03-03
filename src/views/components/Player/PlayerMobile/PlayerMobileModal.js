import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Vibrant from "node-vibrant";

// Components
import AudioCurrentTime from "../../AudioCurrentTime";
import AudioTimeline from "../../AudioTimeline";
import FormattedTime from "../../Formatters/FormattedTime";
import IconButton from "../../IconButton";

import { IconChevronDown, IconEllipsis } from "../../Icons";

import FormattedTrackTitle from "../../Formatters/FormattedTrackTitle";

// Controlls
import FavoriteButton from "../../PlayerControls/FavoriteButton";
import NextTrackButton from "../../PlayerControls/NextTrackButton";
import PlayTrackButton from "../../PlayerControls/PlayTrackButton";
import PreviousTrackButton from "../../PlayerControls/PreviousTrackButton";
import RepeatButton from "../../PlayerControls/RepeatButton";
import ShuffleButton from "../../PlayerControls/ShuffleButton";
import {
  StyledPlayerMobile,
  StyledPlayerMobileBackground,
} from "../../../styles/PlayerMobile";
import PlayerOptionsMenu from "../../PlayerOptionsMenu";
import { Track } from "../../../../store/tracks/track";

const PlayerMobileModal = ({
  isHistoryDrawerOpen,
  isMobilePlayerOpen,
  isPlaying,
  liked,
  nextTrackId,
  oauthToken,
  previousTrackId,
  setisMobilePlayerOpen,
  track,
  tracklistId,
}) => {
  const [isOptionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isMobilePlayerOpen ? "hidden" : "unset";
  }, [isMobilePlayerOpen]);

  useEffect(() => {
    const init = ({ artworkUrl }) => {
      Vibrant.from(artworkUrl)
        .getPalette()
        .then(palette => {
          const { hex } = palette.Vibrant;
          setBackgroundColor(hex);
        });
    };

    if (track && track.artworkUrl) {
      init(track);
    }
  }, [track]);

  return (
    <StyledPlayerMobile className={isMobilePlayerOpen ? "is-active" : ""}>
      <StyledPlayerMobileBackground
        style={{
          backgroundColor,
          // backgroundImage: `url("${track.artworkUrl}")`,
        }}
      />

      <div className="now-playing-bar">
        {/* ONLY MOBILE */}
        <header className="player_header">
          <IconButton onClick={() => setisMobilePlayerOpen(false)}>
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
            <AudioTimeline />
            <div className="player-timeline-meta">
              <AudioCurrentTime />
              <FormattedTime unit="ms" value={track.duration} />
            </div>
          </div>
        </div>

        <div className="now-playing-bar__right">
          <RepeatButton />
          <ShuffleButton />
          <FavoriteButton {...{ liked, id: track.id, oauthToken }} />
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

PlayerMobileModal.propTypes = {
  isHistoryDrawerOpen: PropTypes.bool.isRequired,
  isMobilePlayerOpen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  nextTrackId: PropTypes.number,
  oauthToken: PropTypes.string,
  previousTrackId: PropTypes.number,
  setisMobilePlayerOpen: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
  tracklistId: PropTypes.string.isRequired,
};

PlayerMobileModal.defaultProps = {
  oauthToken: null,
  previousTrackId: null,
  nextTrackId: null,
};

export default PlayerMobileModal;
