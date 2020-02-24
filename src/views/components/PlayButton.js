import React from "react";
import { IconPlay } from "./Icons";
import { StyledPlayHoverButton } from "../styles/Buttons";

const PlayHoverButton = () => {
  return (
    <StyledPlayHoverButton type="button">
      <IconPlay />
      <span className="sr-only">Play</span>
    </StyledPlayHoverButton>
  );
};

export default PlayHoverButton;
