import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Browser
import getBrowserMedia from "../../store/browser/selectors";

// Player
import playerActions from "../../store/player/actions";
import {
  getPlayerIsPlaying,
  getPlayerTrackId,
} from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";

import {
  getCurrentTracklist,
  getTracksForCurrentTracklist,
} from "../../store/tracklists/selectors";
import { tracklistActions } from "../../store/tracklists/actions";
import StyledTrackGrid from "../styles/TrackGrid";
import TrackCard from "./TrackCard";

const getTracklistState = createSelector(
  getBrowserMedia,
  getPlayerIsPlaying,
  getPlayerTrackId,
  getCurrentTracklist,
  getTracksForCurrentTracklist,
  (media, isPlaying, playerTrackId, tracklist, tracks) => ({
    displayLoadingIndicator: tracklist.isPending || tracklist.hasNextPage,
    isMediaLarge: !!media.large,
    isPlaying,
    pause: audio.pause,
    pauseInfiniteScroll: tracklist.isPending || !tracklist.hasNextPage,
    play: audio.play,
    selectedTrackId: playerTrackId,
    tracklistId: tracklist.id,
    tracks,
  })
);

const TrackGrid = ({ compactLayout }) => {
  const dispatch = useDispatch();
  const {
    displayLoadingIndicator,
    isMediaLarge,
    isPlaying,
    loadNextTracks,
    pause,
    pauseInfiniteScroll,
    play,
    selectedTrackId,
    tracklistId,
    tracks,
  } = useSelector(state => {
    return {
      ...getTracklistState(state),
      loadNextTracks: () => dispatch(tracklistActions.loadNextTracks()),
    };
  });

  return (
    <StyledTrackGrid>
      {tracks.map(track => {
        const { id } = track;
        const isSelected = id === selectedTrackId;
        return (
          <div key={id}>
            <TrackCard
              {...{
                isCompact: compactLayout || !isMediaLarge,
                isPlaying: isSelected && isPlaying,
                isSelected,
                pause,
                play: () => {
                  isSelected
                    ? play()
                    : dispatch(
                        playerActions.playSelectedTrack(id, tracklistId)
                      );
                },
                track,
              }}
            />
          </div>
        );
      })}
    </StyledTrackGrid>
  );
};

TrackGrid.propTypes = {
  compactLayout: PropTypes.bool,
};

TrackGrid.defaultProps = {
  compactLayout: false,
};

export default TrackGrid;
