import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "../IconButton";
import { IconNext } from "../Icons";
import { playSelectedTrack } from "../../../store/player/actions";

const NextTrackButton = ({ trackId, tracklistId, ...props }) => {
  const dispatch = useDispatch();

  return (
    <IconButton
      {...props}
      aria-label="Skip to next track"
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
      <IconNext />
    </IconButton>
  );
};

NextTrackButton.propTypes = {
  trackId: PropTypes.number,
  tracklistId: PropTypes.string,
};

NextTrackButton.defaultProps = {
  trackId: null,
  tracklistId: null,
};

export default NextTrackButton;
