import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistorySidebarState } from "../../store/tracklists/selectors";

import TrackCard from "./TrackCard";
import { playSelectedTrack } from "../../store/player/actions";

const HistorySidebar = () => {
  const dispatch = useDispatch();
  const { isPlaying, pause, play, selectedTrackId, tracks } = useSelector(
    getHistorySidebarState
  );

  return (
    <div>
      {tracks.map(track => {
        const { id } = track;
        const isSelected = id === selectedTrackId;

        return (
          <TrackCard
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
    </div>
  );
};

export default HistorySidebar;
