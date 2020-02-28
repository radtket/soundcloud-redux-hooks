import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../IconButton";
import { audioShuffleChanged } from "../../../store/player/actions";
import { IconShuffle } from "../Icons";

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const { isShuffle, onClick } = useSelector(({ player }) => {
    return {
      onClick() {
        dispatch(dispatch(audioShuffleChanged(!player.isShuffle)));
      },
      isShuffle: player.isShuffle,
    };
  });

  return (
    <IconButton {...{ onClick, isActive: isShuffle }}>
      <IconShuffle />
    </IconButton>
  );
};

export default ShuffleButton;
