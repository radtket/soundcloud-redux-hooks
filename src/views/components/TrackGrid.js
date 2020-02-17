import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

// Browser
import infiniteScroll from "../../store/browser/infinite-scroll";

// Player
import { playSelectedTrack } from "../../store/player/actions";

// Tracklist
import { getTracklistState } from "../../store/tracklists/selectors";
import { loadNextTracks } from "../../store/tracklists/actions";

// Components
import StyledTrackGrid from "../styles/TrackGrid";
import TrackCard from "./TrackCard";
import LoadingIndicator from "./LoadingIndicator";

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
  } = useSelector(getTracklistState);

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
        {tracks.map((track, idx) => {
          const { id } = track;
          const isSelected = id === selectedTrackId;

          return (
            <div {...{ key: id + idx }}>
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
                          playSelectedTrack({ trackId: id, tracklistId })
                        );
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
