import { createSelector } from "reselect";
import getBrowserMedia from "../browser/selectors";
import { FOLLOWINGS_PER_PAGE } from "../constants";
import { getUsers } from "../users/selectors";

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
  getUsers,
  (currentPage, followingsIds, users) => {
    return followingsIds
      .slice(0, currentPage * FOLLOWINGS_PER_PAGE)
      .map(id => users.get(id));
  }
);

export const getFollowingListState = createSelector(
  getBrowserMedia,
  getCurrenttFollowingslist,
  getTracksForCurrentTracklist,
  (media, { isPending, hasNextPage, id }, tracks) => {
    return {
      displayLoadingIndicator: isPending || hasNextPage,
      isMediaLarge: !!media.large,
      pauseInfiniteScroll: isPending || !hasNextPage,
      followingsListId: id,
      tracks,
    };
  }
);
