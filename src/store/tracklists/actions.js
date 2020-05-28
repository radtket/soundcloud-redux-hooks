export const FETCH_TRACKS_FAILED = "FETCH_TRACKS_FAILED";
export const FETCH_TRACKS_FULFILLED = "FETCH_TRACKS_FULFILLED";
export const FETCH_TRACKS_PENDING = "FETCH_TRACKS_PENDING";

export const LOAD_NEXT_TRACKS = "LOAD_NEXT_TRACKS";
export const UPDATE_TRACKS_PAGINATION = "UPDATE_TRACKS_PAGINATION";

export const loadNextTracks = () => ({
  type: LOAD_NEXT_TRACKS,
});

export const updateTracksPagination = page => ({
  type: UPDATE_TRACKS_PAGINATION,
  page,
});

export const tracklistRequestActions = {
  failed: error => ({
    type: FETCH_TRACKS_FAILED,
    error,
  }),
  fulfilled: ({ id, data: { collection, nextHref } }) => {
    return {
      type: FETCH_TRACKS_FULFILLED,
      collection,
      nextHref,
      tracklistId: id,
    };
  },
  pending: ({ id }) => {
    return {
      type: FETCH_TRACKS_PENDING,
      tracklistId: id,
    };
  },
};
