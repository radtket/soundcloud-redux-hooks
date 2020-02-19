import React from "react";
import { useSelector } from "react-redux";
import { getPlayerTimes } from "../../store/player/selectors";
import FormattedTime from "./FormattedTime";

const AudioCurrentTime = () => {
  const { currentTime } = useSelector(getPlayerTimes);
  return <FormattedTime value={currentTime} />;
};

export default AudioCurrentTime;
