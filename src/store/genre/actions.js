export const LOAD_GENRE_TRACKS = "LOAD_GENRE_TRACKS";

export const loadGenreTracks = query => {
  return {
    type: LOAD_GENRE_TRACKS,
    query,
    tracklistId: `genre/${query
      .trim()
      .split(/\s+/)
      .join(" ")}`.toLowerCase(),
  };
};
