export const getTracks = state => state.tracks;

export const getTrackById = ({ state, trackId }) =>
  getTracks(state).get(trackId);
