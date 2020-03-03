import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import AudioCurrentTime from "../AudioCurrentTime";
import AudioTimeline from "../AudioTimeline";
import FormattedTime from "../Formatters/FormattedTime";
import IconButton from "../IconButton";
import StyledPlayer from "../../styles/Player";
import { IconPlaylist } from "../Icons";
import { Track } from "../../../store/tracks/track";
import FormattedTrackTitle from "../Formatters/FormattedTrackTitle";

// Controlls
import FavoriteButton from "../PlayerControls/FavoriteButton";
import NextTrackButton from "../PlayerControls/NextTrackButton";
import PlayTrackButton from "../PlayerControls/PlayTrackButton";
import PreviousTrackButton from "../PlayerControls/PreviousTrackButton";
import RepeatButton from "../PlayerControls/RepeatButton";
import ShuffleButton from "../PlayerControls/ShuffleButton";
import VolumeControl from "../PlayerControls/VolumeControl";

const PlayerDesktop = ({
  isHistoryDrawerOpen,
  isPlaying,
  liked,
  media,
  nextTrackId,
  oauthToken,
  previousTrackId,
  toggleHistoryDrawerOpen,
  track,
  tracklistId,
}) => {
  return (
    <StyledPlayer className="player">
      <div className="now-playing-bar">
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
            onClick={toggleHistoryDrawerOpen}
          >
            <IconPlaylist />
          </IconButton>
          {media.large && <VolumeControl />}
        </div>
      </div>
    </StyledPlayer>
  );
};

PlayerDesktop.propTypes = {
  isHistoryDrawerOpen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  media: PropTypes.shape({
    mobile: PropTypes.bool,
    large: PropTypes.bool,
  }).isRequired,
  nextTrackId: PropTypes.number,
  oauthToken: PropTypes.string,
  previousTrackId: PropTypes.number,
  toggleHistoryDrawerOpen: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
  tracklistId: PropTypes.string.isRequired,
};

PlayerDesktop.defaultProps = {
  oauthToken: null,
  previousTrackId: null,
  nextTrackId: null,
};

export default PlayerDesktop;
