import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Browser
import infiniteScroll from "../../store/browser/infinite-scroll";

// Components
import StyledTrackGrid from "../styles/TrackGrid";
import LoadingIndicator from "./LoadingIndicator";
import { getFollowingListState } from "../../store/followings/selectors";
import { loadNextFollowings } from "../../store/followings/actions";

const FollowingsGrid = () => {
  const dispatch = useDispatch();
  const { displayLoadingIndicator, pauseInfiniteScroll, tracks } = useSelector(
    getFollowingListState
  );

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
        {tracks.map((track, key) => {
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
