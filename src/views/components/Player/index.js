import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getPlayerState } from "../../../store/player/selectors";

// Components
import { toggleHistoryDrawerOpen } from "../../../store/player/actions";
import PlayerDesktop from "./PlayerDesktop";
import PlayerMobile from "./PlayerMobile";

const Player = ({ navbarHeight }) => {
  const dispatch = useDispatch();
  const state = useSelector(getPlayerState, shallowEqual);

  if (!state.track) {
    return null;
  }

  if (state.media.mobile) {
    return (
      <PlayerMobile
        {...{
          ...state,
          navbarHeight,
          toggleHistoryDrawerOpen: () => {
            dispatch(toggleHistoryDrawerOpen());
          },
        }}
      />
    );
  }

  return (
    <PlayerDesktop
      {...{
        ...state,
        toggleHistoryDrawerOpen: () => {
          dispatch(toggleHistoryDrawerOpen());
        },
      }}
    />
  );
};

export default Player;
