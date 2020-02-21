import { createSelector } from "reselect";
import { getTrackById } from "../tracks/selectors";
import { getLikes, getOauthToken } from "../session/selectors";

const getTracklistCursor = ({ selectedTrackId, trackIds }) => {
  const index = trackIds.indexOf(selectedTrackId);
  let nextTrackId = null;
  let previousTrackId = null;

  if (index !== -1) {
    if (index < trackIds.size - 1) {
      nextTrackId = trackIds.get(index + 1);
    }
    if (index > 0) {
      previousTrackId = trackIds.get(index - 1);
    }
  }

  return {
    nextTrackId,
    previousTrackId,
    selectedTrackId,
  };
};

export const getPlayer = state => state.player;

export const getPlayerIsPlaying = state => state.player.isPlaying;

export const getPlayerTimes = state => state.playerTimes;

export const getPlayerTrackId = state => state.player.trackId;

export const getPlayerTracklistId = state => state.player.tracklistId;

export const getIsHistoryDrawerOpen = state => state.player.isHistoryDrawerOpen;

export const getPlayerTrack = state => {
  const trackId = getPlayerTrackId(state);
  return getTrackById(state, trackId);
};

export const getPlayerTracklist = state => {
  const tracklistId = getPlayerTracklistId(state);
  return state.tracklists.get(tracklistId);
};

export const getPlayerTracklistCursor = state => {
  const selectedTrackId = getPlayerTrackId(state);
  const { trackIds } = getPlayerTracklist(state);
  return getTracklistCursor({ selectedTrackId, trackIds });
};

export const getPlayerState = createSelector(
  getPlayer,
  getPlayerTrack,
  getPlayerTracklistCursor,
  getLikes,
  getOauthToken,
  (player, track_, { nextTrackId, previousTrackId }, likes, token) => {
    return {
      tracklistId: player.tracklistId,
      isPlaying: player.isPlaying,
      nextTrack: getPlayerTracklistCursor.nextTrackId,
      previousTrack: getPlayerTracklistCursor.previousTrackId,
      track: track_,
      liked: Boolean(track_ && likes[track_.id]),
      oauthToken: token,
      nextTrackId,
      previousTrackId,
      isHistoryDrawerOpen: player.isHistoryDrawerOpen,
    };
  }
);
