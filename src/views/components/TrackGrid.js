import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Browser
import getBrowserMedia from "../../store/browser/selectors";
import infiniteScroll from "../../store/browser/infinite-scroll";

// Player
import { playSelectedTrack } from "../../store/player/actions";
import {
  getPlayerIsPlaying,
  getPlayerTrackId,
} from "../../store/player/selectors";
import { audio } from "../../store/player/audio-service";

// Tracklist
import {
  getCurrentTracklist,
  getTracksForCurrentTracklist,
} from "../../store/tracklists/selectors";
import { loadNextTracks } from "../../store/tracklists/actions";

// Components
import StyledTrackGrid from "../styles/TrackGrid";
import TrackCard from "./TrackCard";
import LoadingIndicator from "./LoadingIndicator";

const getTracklistState = createSelector(
  getBrowserMedia,
  getPlayerIsPlaying,
  getPlayerTrackId,
  getCurrentTracklist,
  getTracksForCurrentTracklist,
  (
    media,
    isPlaying,
    playerTrackId,
    { isPending, hasNextPage, id },
    tracks
  ) => ({
    displayLoadingIndicator: isPending || hasNextPage,
    isMediaLarge: !!media.large,
    isPlaying,
    pause: audio.pause,
    pauseInfiniteScroll: isPending || !hasNextPage,
    play: audio.play,
    selectedTrackId: playerTrackId,
    tracklistId: id,
    tracks,
  })
);

const TrackGrid = ({ compactLayout }) => {
  const dispatch = useDispatch();
  const {
    displayLoadingIndicator,
    isMediaLarge,
    isPlaying,
    pause,
    pauseInfiniteScroll,
    play,
    selectedTrackId,
    tracklistId,
    tracks,
  } = useSelector(state => {
    return {
      ...getTracklistState(state),
    };
  });

  useEffect(() => {
    infiniteScroll.start(() => dispatch(loadNextTracks()), pauseInfiniteScroll);
    if (pauseInfiniteScroll) {
      infiniteScroll.pause();
    } else {
      infiniteScroll.resume();
    }
    return () => {
      infiniteScroll.end();
    };
  }, [dispatch, pauseInfiniteScroll]);

  return (
    <>
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
                      : dispatch(playSelectedTrack(id, tracklistId));
                  },
                  track,
                }}
              />
            </div>
          );
        })}
      </StyledTrackGrid>
      {displayLoadingIndicator && <LoadingIndicator />}
    </>
  );
};

TrackGrid.propTypes = {
  compactLayout: PropTypes.bool,
};

TrackGrid.defaultProps = {
  compactLayout: false,
};

export default TrackGrid;
