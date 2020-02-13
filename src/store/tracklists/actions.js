/* eslint-disable camelcase */
import {
  FEATURED_TRACKLIST_ID,
  FEATURED_TRACKLIST_USER_ID,
} from "../constants";

export const tracklistActions = {
  FETCH_TRACKS_FAILED: "FETCH_TRACKS_FAILED",
  FETCH_TRACKS_FULFILLED: "FETCH_TRACKS_FULFILLED",
  FETCH_TRACKS_PENDING: "FETCH_TRACKS_PENDING",

  LOAD_FEATURED_TRACKS: "LOAD_FEATURED_TRACKS",
  LOAD_NEXT_TRACKS: "LOAD_NEXT_TRACKS",
  UPDATE_PAGINATION: "UPDATE_PAGINATION",

  fetchTracksFailed: error => ({
    type: tracklistActions.FETCH_TRACKS_FAILED,
    error,
  }),

  fetchTracksFulfilled: (tracklistId, { collection, next_href, ...data }) => {
    return {
      type: tracklistActions.FETCH_TRACKS_FULFILLED,
      ...data,
      collection,
      next_href,
      tracklistId,
    };
  },

  fetchTracksPending: tracklistId => ({
    type: tracklistActions.FETCH_TRACKS_PENDING,
    tracklistId,
  }),

  loadFeaturedTracks: () => ({
    type: tracklistActions.LOAD_FEATURED_TRACKS,
    tracklistId: FEATURED_TRACKLIST_ID,
    userId: FEATURED_TRACKLIST_USER_ID,
  }),

  loadNextTracks: () => ({
    type: tracklistActions.LOAD_NEXT_TRACKS,
  }),

  updatePagination: page => ({
    type: tracklistActions.UPDATE_PAGINATION,
    page,
  }),
};

export const tracklistRequestActions = {
  failed: tracklistActions.fetchTracksFailed,
  fulfilled: tracklistActions.fetchTracksFulfilled,
  pending: tracklistActions.fetchTracksPending,
};
