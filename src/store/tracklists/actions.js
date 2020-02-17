/* eslint-disable camelcase */
export const FETCH_TRACKS_FAILED = "FETCH_TRACKS_FAILED";
export const FETCH_TRACKS_FULFILLED = "FETCH_TRACKS_FULFILLED";
export const FETCH_TRACKS_PENDING = "FETCH_TRACKS_PENDING";

export const LOAD_NEXT_TRACKS = "LOAD_NEXT_TRACKS";
export const UPDATE_TRACKS_PAGINATION = "UPDATE_TRACKS_PAGINATION";

export const fetchTracksPending = ({ id }) => {
  return {
    type: FETCH_TRACKS_PENDING,
    tracklistId: id,
  };
};

export const fetchTracksFulfilled = ({
  id,
  data: { collection, next_href, ...rest },
}) => {
  return {
    type: FETCH_TRACKS_FULFILLED,
    ...rest,
    collection,
    next_href,
    tracklistId: id,
  };
};

export const fetchTracksFailed = error => ({
  type: FETCH_TRACKS_FAILED,
  error,
});

export const loadNextTracks = () => ({
  type: LOAD_NEXT_TRACKS,
});

export const updateTracksPagination = page => ({
  type: UPDATE_TRACKS_PAGINATION,
  page,
});

export const tracklistRequestActions = {
  failed: fetchTracksFailed,
  fulfilled: fetchTracksFulfilled,
  pending: fetchTracksPending,
};
