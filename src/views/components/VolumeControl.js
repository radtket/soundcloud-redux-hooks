import React from "react";
import { useSelector } from "react-redux";
import IconButton from "./IconButton";

import { PLAYER_MAX_VOLUME } from "../../store/constants";
import { audio, getVolume, getIsMuted } from "../../store/player/audio-service";
import { IconSound, IconMute } from "./Icons";
import { StyledRangeSlider } from "../styles/Inputs";

const VolumeControl = () => {
  const { changeVolume, toggleMuted, volume, isMuted } = useSelector(() => {
    return {
      ...audio,
      volume: getVolume(),
      isMuted: getIsMuted(),
    };
  });

  return (
    <label>
      <IconButton
        aria-label={isMuted ? "unmute volume" : "mute volume"}
        onClick={toggleMuted}
      >
        {isMuted ? <IconMute /> : <IconSound />}
      </IconButton>
      <StyledRangeSlider
        max={PLAYER_MAX_VOLUME * 100}
        min={0}
        onChange={({ target }) => {
          changeVolume(target.value / 100);
        }}
        type="range"
        value={isMuted ? 0 : volume * 100}
      />
    </label>
  );
};

export default VolumeControl;
