import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { audio } from "../../store/player/audio-service";
import {
  getCurrentTrackIds,
  getCurrentTracklist,
} from "../../store/tracklists/selectors";
import {
  getPlayerTrackId,
  getPlayerIsPlaying,
} from "../../store/player/selectors";
import { playSelectedTrack } from "../../store/player/actions";
import { IconPlay, IconPause } from "./Icons";
import { StyledUserHeroPlayButton } from "../styles/Buttons";

const UserHeroPlayButton = () => {
  const dispatch = useDispatch();
  const {
    activeTrackID,
    playingSongIsOwnedByArtist,
    firstTrack,
    tracklistId,
    play,
    pause,
    isPlaying,
  } = useSelector(
    createSelector(
      getCurrentTrackIds,
      getPlayerTrackId,
      getCurrentTracklist,
      getPlayerIsPlaying,
      (currentTrackIds, currentPlayingTrackID, tracklist, isPlayerPlaying) => {
        return {
          ...audio,
          activeTrackID: currentPlayingTrackID,
          playingSongIsOwnedByArtist: currentTrackIds.includes(
            currentPlayingTrackID
          ),
          firstTrack: currentTrackIds.first(),
          tracklistId: tracklist.id,
          isPlaying: isPlayerPlaying,
          // isPlaying: selected && player.isPlaying,
        };
      }
    )
  );

  if (!firstTrack) {
    return null;
  }

  const onClick = () => {
    if (!playingSongIsOwnedByArtist || (!isPlaying && !activeTrackID)) {
      dispatch(
        playSelectedTrack({
          trackId: firstTrack,
          tracklistId,
        })
      );
    }

    if (playingSongIsOwnedByArtist) {
      isPlaying ? pause() : play();
    }
  };

  const isPlay = (isPlaying && !playingSongIsOwnedByArtist) || !isPlaying;
  const isPause = isPlaying && playingSongIsOwnedByArtist;

  return (
    <StyledUserHeroPlayButton {...{ onClick }} type="button">
      {isPlay && <IconPlay />}
      {isPause && <IconPause />}
      <span className="visuallyhidden">
        {isPlay && "Play"}
        {isPause && "Pause"}
      </span>
    </StyledUserHeroPlayButton>
  );
};

export default UserHeroPlayButton;
