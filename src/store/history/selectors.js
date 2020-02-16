import { createSelector } from "reselect";
import { getTracks } from "../tracks/selectors";

export const getHistorySongIds = state => state.history.songs;

export const getHistorySongs = createSelector(
  getTracks,
  getHistorySongIds,
  (tracks, songs) => songs.toJS().map(trackId => tracks.get(trackId).toJS())
);
