import { createSelector } from "reselect";
import { getTrackById } from "../tracks/selectors";
import { getLikes, getOauthToken } from "../session/selectors";

const getRandomTrack = ({ selectedTrackId, trackIds }) => {
  const randomIndex = Math.floor(Math.random() * (trackIds.size - 1) + 0);
  const randomTrack = trackIds.get(randomIndex);

  if (selectedTrackId === randomTrack) {
    return getRandomTrack({ selectedTrackId, trackIds });
  }

  return {
    randomTrack,
    randomIndex,
  };
};

const getTracklistCursor = ({ selectedTrackId, trackIds, isShuffle }) => {
  let index = trackIds.indexOf(selectedTrackId);
  let nextTrackId = null;
  let previousTrackId = null;

  if (isShuffle) {
    const { randomIndex } = getRandomTrack({
      selectedTrackId,
      trackIds,
    });
    index = randomIndex;
  }

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

export const getIsShuffle = state => state.player.isShuffle;

export const getPlayerTrack = state => {
  const trackId = getPlayerTrackId(state);
  return getTrackById(state, trackId);
};

export const getPlayerTracklist = state => {
  const tracklistId = getPlayerTracklistId(state);
  return state.tracklists.get(tracklistId);
};

export const getPlayerTracklistCursor = state => {
  const { trackIds } = getPlayerTracklist(state);

  return getTracklistCursor({
    selectedTrackId: getPlayerTrackId(state),
    trackIds,
    isShuffle: getIsShuffle(state),
  });
};

export const getPlayerState = createSelector(
  getPlayer,
  getPlayerTrack,
  getPlayerTracklistCursor,
  getLikes,
  getOauthToken,
  (
    { isPlaying, isHistoryDrawerOpen, tracklistId },
    track,
    { nextTrackId, previousTrackId },
    likes,
    oauthToken
  ) => {
    return {
      isHistoryDrawerOpen,
      isPlaying,
      liked: Boolean(track && likes[track.id]),
      nextTrackId,
      oauthToken,
      previousTrackId,
      track,
      tracklistId,
    };
  }
);
