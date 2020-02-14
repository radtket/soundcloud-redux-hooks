export const userActions = {
  FETCH_USER_FAILED: "FETCH_USER_FAILED",
  FETCH_USER_FULFILLED: "FETCH_USER_FULFILLED",
  FETCH_USER_PENDING: "FETCH_USER_PENDING",

  LOAD_USER: "LOAD_USER",
  LOAD_USER_LIKES: "LOAD_USER_LIKES",
  LOAD_USER_TRACKS: "LOAD_USER_TRACKS",

  fetchUserFailed: error => ({
    type: userActions.FETCH_USER_FAILED,
    error,
  }),

  fetchUserFulfilled: (userId, data) => {
    console.log({ userId, data });
    return {
      type: userActions.FETCH_USER_FULFILLED,
      user: data,
    };
  },

  fetchUserPending: userId => ({
    type: userActions.FETCH_USER_PENDING,
    userId,
  }),

  loadUser: userId => ({
    type: userActions.LOAD_USER,
    userId: parseInt(userId, 10),
  }),

  loadUserLikes: userId => ({
    type: userActions.LOAD_USER_LIKES,
    tracklistId: `users/${userId}/likes`,
    userId: parseInt(userId, 10),
  }),

  loadUserTracks: userId => ({
    type: userActions.LOAD_USER_TRACKS,
    tracklistId: `users/${userId}/tracks`,
    userId: parseInt(userId, 10),
  }),
};

export const userRequestActions = {
  failed: userActions.fetchUserFailed,
  fulfilled: userActions.fetchUserFulfilled,
  pending: userActions.fetchUserPending,
};
