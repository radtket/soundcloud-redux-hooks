import React from "react";
import { useSelector } from "react-redux";
import { getPlayerTimes } from "../../store/player/selectors";
import FormattedTime from "./FormattedTime";

const AudioCurrentTime = () => {
  const { currentTime } = useSelector(state => {
    return getPlayerTimes(state);
  });

  return <FormattedTime value={currentTime} />;
};

export default AudioCurrentTime;
