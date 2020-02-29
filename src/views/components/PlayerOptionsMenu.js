import React from "react";
import { Link } from "react-router-dom";
import {
  IconPlaylist,
  IconClose,
  IconShare,
  IconAlbum,
  IconMic,
} from "./Icons";
import FormattedTrackTitle from "./Formatters/FormattedTrackTitle";
import { StyledIconButton } from "../styles/Buttons";
import StyledPlayerOptionsMenu from "../styles/PlayerOptionsMenu";

const PlayerOptionsMenu = ({
  isOptionsMenuOpen,
  setOptionsMenuOpen,
  track,
}) => {
  return (
    <StyledPlayerOptionsMenu
      className={`menu ${isOptionsMenuOpen ? "active" : ""}`}
      id="song-options"
    >
      <StyledIconButton
        className="close-btn"
        onClick={() => setOptionsMenuOpen(prev => !prev)}
      >
        <IconClose />
        <span>Close</span>
      </StyledIconButton>

      <div className="song-info__wrap">
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

      <nav>
        <button>
          <figure>
            <IconPlaylist />
          </figure>
          <span>Add to playlist</span>
        </button>

        <Link to={`/users/${track.userId}/tracks/${track.id}`}>
          <figure>
            <IconMic />
          </figure>
          <span>View Artist</span>
        </Link>

        <Link to={`/users/${track.userId}/tracks`}>
          <figure>
            <IconAlbum />
          </figure>
          <span>View Album</span>
        </Link>

        <button>
          <figure>
            <IconShare />
          </figure>
          <span>Share</span>
        </button>
      </nav>
    </StyledPlayerOptionsMenu>
  );
};

export default PlayerOptionsMenu;
