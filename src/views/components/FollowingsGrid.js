import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Browser
import infiniteScroll from "../../store/browser/infinite-scroll";

// Components
import StyledTrackGrid from "../styles/TrackGrid";
import LoadingIndicator from "./LoadingIndicator";
import { getFollowingListState } from "../../store/followings/selectors";
import { loadNextFollowings } from "../../store/followings/actions";
import ArtistCard from "./ArtistCard";

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
        {tracks.map(user => {
          return (
            <div key={user.id}>
              <ArtistCard
                {...{
                  user,
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

export default FollowingsGrid;
