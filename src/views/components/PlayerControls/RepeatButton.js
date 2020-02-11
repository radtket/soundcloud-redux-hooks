import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../IconButton";
import { audio } from "../../../store/player/audio-service";
import playerActions from "../../../store/player/actions";
import { IconRepeat } from "../Icons";

const RepeatButton = () => {
  const dispatch = useDispatch();
  const { isRepeat, onClick } = useSelector(({ player }) => {
    return {
      onClick() {
        dispatch(playerActions.audioRepeatChanged(!player.isRepeat));
        audio.toggleRepeat();
      },
      isRepeat: player.isRepeat,
    };
  });

  const style = isRepeat
    ? {
        fill: "red",
      }
    : {};

  return (
    <IconButton {...{ onClick }}>
      <IconRepeat {...{ style }} />
    </IconButton>
  );
};

export default RepeatButton;
