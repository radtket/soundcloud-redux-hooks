export const FETCH_FOLLOWINGS_FAILED = "FETCH_FOLLOWINGS_FAILED";
export const FETCH_FOLLOWINGS_FULFILLED = "FETCH_FOLLOWINGS_FULFILLED";
export const FETCH_FOLLOWINGS_PENDING = "FETCH_FOLLOWINGS_PENDING";

export const LOAD_USER_FOLLOWINGS = "LOAD_USER_FOLLOWINGS";

export const LOAD_NEXT_FOLLOWINGS = "LOAD_NEXT_FOLLOWINGS";
export const UPDATE_FOLLOWINGS_PAGINATION = "UPDATE_FOLLOWINGS_PAGINATION";

export const loadUserFollowings = ({ id, url, oauthToken }) => {
  return {
    type: LOAD_USER_FOLLOWINGS,
    followingsListId: id,
    url,
    oauthToken,
  };
};

export const loadNextFollowings = () => ({
  type: LOAD_NEXT_FOLLOWINGS,
});

export const updateTracksPagination = page => ({
  type: UPDATE_FOLLOWINGS_PAGINATION,
  page,
});

export const FETCH_FOLLOWINGS_ACTIONS = {
  failed: error => ({
    type: FETCH_FOLLOWINGS_FAILED,
    error,
  }),
  fulfilled: ({ id, data: { collection, nextHref } }) => {
    return {
      type: FETCH_FOLLOWINGS_FULFILLED,
      collection,
      nextHref,
      followingsListId: id,
    };
  },
  pending: ({ id }) => {
    return {
      type: FETCH_FOLLOWINGS_PENDING,
      followingsListId: id,
    };
  },
};
