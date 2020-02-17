import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playSelectedTrack } from "../../store/player/actions";
import { IconPlay, IconPause } from "./Icons";
import { StyledUserHeroPlayButton } from "../styles/Buttons";
import { getCurrentUserHeroPlay } from "../../store/users/selectors";

const UserHeroPlayButton = () => {
  const dispatch = useDispatch();
  const {
    activeTrackID,
    firstTrack,
    isPlaying,
    pause,
    play,
    playingSongIsOwnedByArtist,
    tracklistId,
  } = useSelector(getCurrentUserHeroPlay);

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
