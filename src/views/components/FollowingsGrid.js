import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

// Browser
import infiniteScroll from "../../store/browser/infinite-scroll";

// Tracklist
import { getTracklistState } from "../../store/tracklists/selectors";
import { loadNextTracks } from "../../store/tracklists/actions";

// Components
import StyledTrackGrid from "../styles/TrackGrid";
import LoadingIndicator from "./LoadingIndicator";
import { getFollowingListState } from "../../store/followings/selectors";
import { loadNextFollowings } from "../../store/followings/actions";

const FollowingsGrid = () => {
  const dispatch = useDispatch();
  const {
    displayLoadingIndicator,
    isMediaLarge,
    pauseInfiniteScroll,
    followingsListId,
    tracks,
  } = useSelector(getFollowingListState);

  useEffect(() => {
    infiniteScroll.start(
      () => dispatch(loadNextFollowings()),
      pauseInfiniteScroll
    );
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
        <h1>Hi</h1>
        {tracks.map((track, key) => {
          console.log({ track });

          return (
            <div {...{ key: track.username }}>
              <h1>{track.username}</h1>
            </div>
          );
        })}
      </StyledTrackGrid>
      {displayLoadingIndicator && <LoadingIndicator />}
    </>
  );
};

export default FollowingsGrid;
