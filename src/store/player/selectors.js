import { getTracklistById, getTracklistCursor } from "../tracklists/selectors";
import { getTrackById } from "../tracks/selectors";

export const getPlayer = state => state.player;

export const getPlayerIsPlaying = state => state.player.isPlaying;

export const getPlayerTimes = state => state.playerTimes;

export const getPlayerTrackId = state => state.player.trackId;

export const getPlayerTracklistId = state => state.player.tracklistId;

export const getPlayerTrack = state => {
  const trackId = getPlayerTrackId(state);
  return getTrackById({ state, trackId });
};

export const getPlayerTracklist = state => {
  const tracklistId = getPlayerTracklistId(state);
  return getTracklistById(state, tracklistId);
};

export const getPlayerTracklistCursor = state => {
  const trackId = getPlayerTrackId(state);
  const { trackIds } = getPlayerTracklist(state);
  return getTracklistCursor(trackId, trackIds);
};
