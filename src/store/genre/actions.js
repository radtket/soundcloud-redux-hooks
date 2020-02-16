export const LOAD_GENRE_TRACKS = "LOAD_GENRE_TRACKS";

export const loadGenreTracks = tracklistId => {
  return {
    type: LOAD_GENRE_TRACKS,
    tracklistId,
  };
};
