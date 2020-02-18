export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";
export const FETCH_USER_PENDING = "FETCH_USER_PENDING";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_TRACKS = "LOAD_USER_TRACKS";

export const fetchUserPending = ({ id }) => ({
  type: FETCH_USER_PENDING,
  userId: id,
});

export const fetchUserFulfilled = ({ data }) => {
  return {
    type: FETCH_USER_FULFILLED,
    user: data,
  };
};

export const fetchUserFailed = error => ({
  type: FETCH_USER_FAILED,
  error,
});

export const loadUser = userId => ({
  type: LOAD_USER,
  userId: parseInt(userId, 10),
});

export const loadUserTracks = ({ id, url, oauthToken }) => {
  return {
    type: LOAD_USER_TRACKS,
    tracklistId: id,
    url,
    oauthToken,
  };
};

export const userRequestActions = {
  failed: fetchUserFailed,
  fulfilled: fetchUserFulfilled,
  pending: fetchUserPending,
};
