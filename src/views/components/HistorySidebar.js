import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistorySidebarState } from "../../store/tracklists/selectors";

import {
  playSelectedTrack,
  toggleHistoryDrawerOpen,
} from "../../store/player/actions";
import { StyledHistorySidebar } from "../styles/HistorySidebar";
import HistorySong from "./HistorySong";
import { IconClose } from "./Icons";
import IconButton from "./IconButton";

const HistorySidebar = () => {
  const dispatch = useDispatch();
  const {
    isPlaying,
    pause,
    play,
    selectedTrackId,
    tracks,
    isOpen,
  } = useSelector(getHistorySidebarState);

  return (
    <StyledHistorySidebar {...{ isOpen }}>
      <header className="right-sidebar-header">
        <h3>Play History</h3>
        <IconButton
          aria-label="Close Play History"
          onClick={() => {
            dispatch(toggleHistoryDrawerOpen());
          }}
        >
          <IconClose />
        </IconButton>
      </header>
      <div className="right-sidebar-body">
        <ul className="list-group list-group-flush">
          {tracks.map(track => {
            const { id } = track;
            const isSelected = id === selectedTrackId;
            return (
              <HistorySong
                {...{
                  key: `${id}-history-playlist`,
                  isCompact: false,
                  isPlaying: isSelected && isPlaying,
                  isSelected,
                  pause,
                  play: () => {
                    isSelected
                      ? play()
                      : dispatch(playSelectedTrack({ trackId: id }));
                  },
                  track,
                }}
              />
            );
          })}
        </ul>
      </div>
    </StyledHistorySidebar>
  );
};

export default HistorySidebar;
