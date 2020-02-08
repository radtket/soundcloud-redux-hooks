import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "reflexbox";
import IconButton from "./IconButton";
import { PLAYER_MAX_VOLUME } from "../../store/constants";
import { audio, getVolume, getIsMuted } from "../../store/player/audio-service";
import { IconSound, IconMute } from "./Icons";
import { StyledRangeSlider, StyledVolumeControl } from "../styles/Inputs";

const VolumeControl = () => {
  const { changeVolume, toggleMuted, volume, isMuted } = useSelector(() => {
    return {
      ...audio,
      volume: getVolume(),
      isMuted: getIsMuted(),
    };
  });

  return (
    <StyledVolumeControl>
      <legend className="visuallyhidden">Volume Control</legend>

      <Flex alignItems="center">
        <IconButton
          aria-label={isMuted ? "unmute volume" : "mute volume"}
          name="toggle-mute-button"
          onClick={toggleMuted}
        >
          {isMuted ? <IconMute /> : <IconSound />}
        </IconButton>
        <StyledRangeSlider htmlFor="volume-slider">
          <input
            max={PLAYER_MAX_VOLUME * 100}
            min={0}
            name="volume-slider"
            onChange={({ target }) => {
              changeVolume(target.value / 100);
            }}
            type="range"
            value={isMuted ? 0 : volume * 100}
          />
        </StyledRangeSlider>
      </Flex>
    </StyledVolumeControl>
  );
};

export default VolumeControl;
