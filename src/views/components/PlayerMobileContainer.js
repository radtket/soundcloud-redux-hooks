import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getPlayerState } from "../../store/player/selectors";

// Components
import PlayerMobile from "./PlayerMobile";
import PlayerMini from "./PlayerMini";
import { toggleHistoryDrawerOpen } from "../../store/player/actions";

const PlayerMobileContainer = () => {
  const [isMobilePlayerOpen, setisMobilePlayerOpen] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(getPlayerState, shallowEqual);

  if (!state.track) {
    return null;
  }

  return (
    <>
      <PlayerMini
        {...{ ...state, isMobilePlayerOpen, setisMobilePlayerOpen }}
      />
      <PlayerMobile
        {...{
          ...state,
          isMobilePlayerOpen,
          setisMobilePlayerOpen,
          toggleHistoryDrawerOpen: () => {
            dispatch(toggleHistoryDrawerOpen());
          },
        }}
      />
    </>
  );
};

export default PlayerMobileContainer;
