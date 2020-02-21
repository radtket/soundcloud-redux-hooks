import React from "react";
import PropTypes from "prop-types";
import { Track } from "../../store/tracks/track";
import FormattedTrackTitle from "./FormattedTrackTitle";
import ArtworkPlay from "./ArtworkPlay";
import { StyledHistorySong } from "../styles/HistorySidebar";
import { IconEllipsis, IconHeart } from "./Icons";
import Popup from "./Popup";
import StyledDropdownMenu from "../styles/DropdownMenu";

const HistorySong = ({
  isCompact,
  isPlaying,
  isSelected,
  pause,
  play,
  track,
}) => {
  return (
    <StyledHistorySong
      className={`tracklist-row ${isSelected ? "is-active" : ""}`}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <ArtworkPlay
          className={
            isSelected
              ? "custom-card--inline-img is-active"
              : "custom-card--inline-img"
          }
          onClick={isPlaying ? pause : play}
          {...{ isSelected, track, isPlaying }}
        />

        <dl className="song-info ellipsis-one-line">
          <dt className="ellipsis-one-line">
            <FormattedTrackTitle title={track.title} />
          </dt>
          <dd className="ellipsis-one-line">{track.username}</dd>
        </dl>
      </div>
      <Popup
        position="left top"
        trigger={
          <button type="button">
            <IconEllipsis
              style={{
                fill: "#fff",
                height: 20,
              }}
            />
          </button>
        }
      >
        <StyledDropdownMenu>
          <li className="dropdown-item">
            <button type="button">
              <IconHeart /> <span>Favorite</span>
            </button>
          </li>
          <li className="dropdown-item">
            <button type="button">
              <IconHeart /> <span>Add to Playlist</span>
            </button>
          </li>
          <li className="dropdown-item">
            <button type="button">
              <IconHeart /> <span>Download</span>
            </button>
          </li>
          <li className="dropdown-item">
            <button type="button">
              <IconHeart /> <span>Share</span>
            </button>
          </li>
        </StyledDropdownMenu>
      </Popup>
    </StyledHistorySong>
  );
};

HistorySong.propTypes = {
  isCompact: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  pause: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  track: PropTypes.instanceOf(Track).isRequired,
};

export default HistorySong;
