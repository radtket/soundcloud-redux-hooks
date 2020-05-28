export const FETCH_SINGLE_TRACK_FAILED = "FETCH_SINGLE_TRACK_FAILED";
export const FETCH_SINGLE_TRACK_FULFILLED = "FETCH_SINGLE_TRACK_FULFILLED";
export const FETCH_SINGLE_TRACK_PENDING = "FETCH_SINGLE_TRACK_PENDING";

export const LOAD_SINGLE_TRACK = "LOAD_SINGLE_TRACK";

export const loadSingleTrack = trackId => ({
  type: LOAD_SINGLE_TRACK,
  trackId: parseInt(trackId, 10),
});

export const FETCH_SINGLE_TRACK_ACTIONS = {
  failed: error => ({
    type: FETCH_SINGLE_TRACK_FAILED,
    error,
  }),
  fulfilled: ({ id, data }) => {
    return {
      type: FETCH_SINGLE_TRACK_FULFILLED,
      collection: data,
      id,
    };
  },
  pending: ({ id }) => {
    return {
      type: FETCH_SINGLE_TRACK_PENDING,
      trackId: id,
    };
  },
};
