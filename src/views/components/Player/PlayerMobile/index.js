import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerMini from "./PlayerMini";
import PlayerMobileModal from "./PlayerMobileModal";
import { Track } from "../../../../store/tracks/track";

const PlayerMobile = ({
  isHistoryDrawerOpen,
  isPlaying,
  liked,
  navbarHeight,
  nextTrackId,
  oauthToken,
  previousTrackId,
  track,
  tracklistId,
}) => {
  const [isMobilePlayerOpen, setisMobilePlayerOpen] = useState(false);

  return (
    <>
      <PlayerMini
        {...{
          isPlaying,
          nextTrackId,
          track,
          tracklistId,
          isMobilePlayerOpen,
          setisMobilePlayerOpen,
          navbarHeight,
        }}
      />
      <PlayerMobileModal
        {...{
          isPlaying,
          nextTrackId,
          previousTrackId,
          track,
          tracklistId,
          isMobilePlayerOpen,
          setisMobilePlayerOpen,
          liked,
          oauthToken,
          isHistoryDrawerOpen,
        }}
      />
    </>
  );
};

PlayerMobile.propTypes = {
  isHistoryDrawerOpen: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  navbarHeight: PropTypes.number.isRequired,
  nextTrackId: PropTypes.number,
  oauthToken: PropTypes.string,
  previousTrackId: PropTypes.number,
  track: PropTypes.instanceOf(Track).isRequired,
  tracklistId: PropTypes.string.isRequired,
};

PlayerMobile.defaultProps = {
  oauthToken: null,
  previousTrackId: null,
  nextTrackId: null,
};

export default PlayerMobile;
