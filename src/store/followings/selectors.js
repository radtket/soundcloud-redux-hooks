import { createSelector } from "reselect";
import { getFollowings } from "../following/selectors";
import getBrowserMedia from "../browser/selectors";
import { FOLLOWINGS_PER_PAGE } from "../constants";

export const getFollowingslist = state => state.followings;

export const gettFollowingslistById = (state, tracklistId) =>
  getFollowingslist(state).get(tracklistId);

export const getCurrenttFollowingslist = state => {
  const followings = getFollowingslist(state);
  return followings.get(followings.get("currentFollowingsListId"));
};

//= ====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentPage = createSelector(
  getCurrenttFollowingslist,
  tracklist => tracklist.currentPage
);

export const getCurrentTrackIds = createSelector(
  getCurrenttFollowingslist,
  tracklist => tracklist.followingsIds
);

export const getTracksForCurrentTracklist = createSelector(
  getCurrentPage,
  getCurrentTrackIds,
  getFollowings,
  (currentPage, followingsIds, tracks) => {
    console.log({ currentPage, followingsIds, tracks });
    return followingsIds
      .slice(0, currentPage * FOLLOWINGS_PER_PAGE)
      .map(id => tracks.get(id));
  }
);

export const getFollowingListState = createSelector(
  getBrowserMedia,
  getCurrenttFollowingslist,
  getTracksForCurrentTracklist,
  (media, { isPending, hasNextPage, id }, tracks) => {
    console.log({ tracks });
    return {
      displayLoadingIndicator: isPending || hasNextPage,
      isMediaLarge: !!media.large,
      pauseInfiniteScroll: isPending || !hasNextPage,
      followingsListId: id,
      tracks,
    };
  }
);
