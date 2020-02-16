/* eslint-disable camelcase */
import {
  FEATURED_TRACKLIST_ID,
  FEATURED_TRACKLIST_USER_ID,
} from "../constants";

export const FETCH_TRACKS_FAILED = "FETCH_TRACKS_FAILED";
export const FETCH_TRACKS_FULFILLED = "FETCH_TRACKS_FULFILLED";
export const FETCH_TRACKS_PENDING = "FETCH_TRACKS_PENDING";

export const LOAD_FEATURED_TRACKS = "LOAD_FEATURED_TRACKS";
export const LOAD_NEXT_TRACKS = "LOAD_NEXT_TRACKS";
export const UPDATE_PAGINATION = "UPDATE_PAGINATION";

export const fetchTracksFailed = error => ({
  type: FETCH_TRACKS_FAILED,
  error,
});

export const fetchTracksFulfilled = (
  tracklistId,
  { collection, next_href, ...data }
) => {
  return {
    type: FETCH_TRACKS_FULFILLED,
    ...data,
    collection,
    next_href,
    tracklistId,
  };
};

export const fetchTracksPending = tracklistId => ({
  type: FETCH_TRACKS_PENDING,
  tracklistId,
});

export const loadFeaturedTracks = () => ({
  type: LOAD_FEATURED_TRACKS,
  tracklistId: FEATURED_TRACKLIST_ID,
  userId: FEATURED_TRACKLIST_USER_ID,
});

export const loadNextTracks = () => ({
  type: LOAD_NEXT_TRACKS,
});

export const updatePagination = page => ({
  type: UPDATE_PAGINATION,
  page,
});

export const tracklistRequestActions = {
  failed: fetchTracksFailed,
  fulfilled: fetchTracksFulfilled,
  pending: fetchTracksPending,
};
