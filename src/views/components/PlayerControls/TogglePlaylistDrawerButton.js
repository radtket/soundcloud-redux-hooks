import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton";
import { IconPlaylist } from "../Icons";
import { getIsHistoryDrawerOpen } from "../../../store/player/selectors";
import { toggleHistoryDrawerOpen } from "../../../store/player/actions";

const TogglePlaylistDrawerButton = () => {
  const dispatch = useDispatch();
  const isHistoryDrawerOpen = useSelector(getIsHistoryDrawerOpen);

  return (
    <IconButton
      aria-label={
        isHistoryDrawerOpen ? "Close History Drawer" : "Open History Drawer"
      }
      className="button-solid"
      onClick={() => {
        dispatch(toggleHistoryDrawerOpen());
      }}
    >
      <IconPlaylist />
    </IconButton>
  );
};

export default TogglePlaylistDrawerButton;
