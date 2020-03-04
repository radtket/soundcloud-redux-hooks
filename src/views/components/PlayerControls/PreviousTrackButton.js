import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { IconPrev } from "../Icons";
import { playSelectedTrack } from "../../../store/player/actions";

const PreviousTrackButton = ({ trackId, tracklistId, ...props }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      {...props}
      aria-label="Skip to previous track"
      disabled={!trackId}
      onClick={() => {
        if (trackId) {
          dispatch(
            playSelectedTrack({
              trackId,
              tracklistId,
            })
          );
        }
      }}
    >
      <IconPrev />
    </IconButton>
  );
};

PreviousTrackButton.propTypes = {
  trackId: PropTypes.number,
  tracklistId: PropTypes.string,
};

PreviousTrackButton.defaultProps = {
  trackId: null,
  tracklistId: null,
};

export default PreviousTrackButton;
