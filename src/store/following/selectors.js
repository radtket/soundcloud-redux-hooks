export const getFollowings = state => state.following;

export const getFollowingById = ({ state, trackId }) =>
  getFollowings(state).get(trackId);
