import { createSelector } from "reselect";
import { TRACKS_PER_PAGE } from "../constants";
import { getTracks } from "../tracks/selectors";

export const getTracklists = state => state.tracklists;

export const getTracklistById = (state, tracklistId) =>
  getTracklists(state).get(tracklistId);

export const getCurrentTracklist = state => {
  const tracklists = getTracklists(state);
  return tracklists.get(tracklists.get("currentTracklistId"));
};

export const getTracklistCursor = (selectedTrackId, trackIds) => {
  const index = trackIds.indexOf(selectedTrackId);
  let nextTrackId = null;
  let previousTrackId = null;

  if (index !== -1) {
    if (index < trackIds.size - 1) {
      nextTrackId = trackIds.get(index + 1);
    }
    if (index > 0) {
      previousTrackId = trackIds.get(index - 1);
    }
  }

  return {
    nextTrackId,
    previousTrackId,
    selectedTrackId,
  };
};

//= ====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentPage = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.currentPage
);

export const getCurrentTrackIds = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.trackIds
);

export const getTracksForCurrentTracklist = createSelector(
  getCurrentPage,
  getCurrentTrackIds,
  getTracks,
  (currentPage, trackIds, tracks) => {
    return trackIds
      .slice(0, currentPage * TRACKS_PER_PAGE)
      .map(id => tracks.get(id));
  }
);
