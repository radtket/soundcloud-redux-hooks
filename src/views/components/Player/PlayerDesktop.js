import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Components
import AudioCurrentTime from "../AudioCurrentTime";
import AudioTimeline from "../AudioTimeline";
import FormattedTime from "../Formatters/FormattedTime";
import IconButton from "../IconButton";
import StyledPlayer from "../../styles/Player";
import { IconEllipsisVerital } from "../Icons";
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
import TogglePlaylistDrawerButton from "../PlayerControls/TogglePlaylistDrawerButton";

const PlayerDesktop = ({
  isPlaying,
  liked,
  media,
  nextTrackId,
  oauthToken,
  previousTrackId,
  track,
  tracklistId,
}) => {
  return (
    <StyledPlayer className="player">
      <div className="now-playing-bar">
        <div className="now-playing-bar__left">
          <figure className="song-image">
            <img alt={track.title} src={track.artworkUrl} />
          </figure>
          <dl className="ellipsis-one-line">
            <dt className="ellipsis-one-line">
              <Link
                className="ellipsis-one-line"
                to={`/users/${track.userId}/tracks/${track.id}`}
              >
                <FormattedTrackTitle title={track.title} />
              </Link>
            </dt>
            <dd>
              <Link
                className="ellipsis-one-line"
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
            {media.large && <RepeatButton className="button-state" />}
            <PreviousTrackButton
              className="button-solid"
              {...{
                trackId: previousTrackId,
                tracklistId,
              }}
            />
            <PlayTrackButton className="button-solid" {...{ isPlaying }} />
            <NextTrackButton
              className="button-solid"
              {...{
                trackId: nextTrackId,
                tracklistId,
              }}
            />

            {media.large && <ShuffleButton className="button-state" />}
          </nav>
          {/* <div className="player-timeline">
            <AudioCurrentTime />
            <AudioTimeline />
            <FormattedTime unit="ms" value={track.duration} />
          </div> */}
        </div>

        <div className="now-playing-bar__right">
          <TogglePlaylistDrawerButton />

          {!media.large && (
            <>
              <FavoriteButton {...{ liked, id: track.id, oauthToken }} />
              <IconButton className="button-solid">
                <IconEllipsisVerital />
              </IconButton>
            </>
          )}

          {media.large && <VolumeControl />}
        </div>
      </div>
    </StyledPlayer>
  );
};

PlayerDesktop.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  media: PropTypes.shape({
    mobile: PropTypes.bool,
    large: PropTypes.bool,
  }).isRequired,
  nextTrackId: PropTypes.number,
  oauthToken: PropTypes.string,
  previousTrackId: PropTypes.number,
  track: PropTypes.instanceOf(Track).isRequired,
  tracklistId: PropTypes.string.isRequired,
};

PlayerDesktop.defaultProps = {
  oauthToken: null,
  previousTrackId: null,
  nextTrackId: null,
};

export default PlayerDesktop;
