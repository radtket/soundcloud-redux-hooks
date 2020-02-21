import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "reflexbox";
import IconButton from "../IconButton";
import { PLAYER_MAX_VOLUME } from "../../../store/constants";
import {
  audio,
  getVolume,
  getIsMuted,
} from "../../../store/player/audio-service";
import { IconSound, IconMute } from "../Icons";
import { StyledRangeSlider, StyledVolumeControl } from "../../styles/Inputs";

const VolumeControl = () => {
  const { volume, isMuted } = useSelector(() => {
    return {
      volume: getVolume(),
      isMuted: getIsMuted(),
    };
  });

  const activeVolume = isMuted ? 0 : volume;

  return (
    <StyledVolumeControl>
      <legend className="visuallyhidden">Volume Control</legend>

      <Flex alignItems="center">
        <IconButton
          aria-label={isMuted ? "unmute volume" : "mute volume"}
          name="toggle-mute-button"
          onClick={audio.toggleMuted}
        >
          {isMuted ? <IconMute /> : <IconSound />}
        </IconButton>
        <StyledRangeSlider {...{ activeVolume }} htmlFor="volume-slider">
          <input
            max={PLAYER_MAX_VOLUME * 100}
            min={0}
            name="volume-slider"
            onChange={({ target }) => {
              audio.changeVolume(target.value / 100);
            }}
            type="range"
            value={activeVolume * 100}
          />
        </StyledRangeSlider>
      </Flex>
    </StyledVolumeControl>
  );
};

export default VolumeControl;
