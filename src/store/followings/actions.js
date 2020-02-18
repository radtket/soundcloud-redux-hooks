export const FETCH_FOLLOWINGS_FAILED = "FETCH_FOLLOWINGS_FAILED";
export const FETCH_FOLLOWINGS_FULFILLED = "FETCH_FOLLOWINGS_FULFILLED";
export const FETCH_FOLLOWINGS_PENDING = "FETCH_FOLLOWINGS_PENDING";

export const LOAD_USER_FOLLOWINGS = "LOAD_USER_FOLLOWINGS";

export const LOAD_NEXT_FOLLOWINGS = "LOAD_NEXT_FOLLOWINGS";
export const UPDATE_FOLLOWINGS_PAGINATION = "UPDATE_FOLLOWINGS_PAGINATION";

export const fetchFollowingsPending = ({ id }) => {
  return {
    type: FETCH_FOLLOWINGS_PENDING,
    followingsListId: id,
  };
};

export const fetchFollowingsFulfilled = ({
  id,
  data: { collection, nextHref },
}) => {
  return {
    type: FETCH_FOLLOWINGS_FULFILLED,
    collection,
    nextHref,
    followingsListId: id,
  };
};

export const fetchFollowingsFailed = error => ({
  type: FETCH_FOLLOWINGS_FAILED,
  error,
});

export const loadUserFollowings = ({ id, url, oauthToken }) => {
  console.log({ id });
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

export const followingListRequestActions = {
  failed: fetchFollowingsFailed,
  fulfilled: fetchFollowingsFulfilled,
  pending: fetchFollowingsPending,
};
