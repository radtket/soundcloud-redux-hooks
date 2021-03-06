import { createSelector } from "reselect";
import {
  TRACKS_PER_PAGE,
  SESSION_HISTORY_TRACKLIST_ID,
  SESSION_LIKES_TRACKLIST_ID,
} from "../constants";
import { getTracks } from "../tracks/selectors";
import getBrowserMedia from "../browser/selectors";
import { audio } from "../player/audio-service";
import {
  getPlayerIsPlaying,
  getPlayerTrackId,
  getIsHistoryDrawerOpen,
} from "../player/selectors";

export const getTracklists = state => state.tracklists;

export const getTracklistById = (state, tracklistId) =>
  getTracklists(state).get(tracklistId);

export const getCurrentTracklist = state => {
  const tracklists = getTracklists(state);
  return tracklists.get(tracklists.get("currentTracklistId"));
};

export const getIsTrackLiked = (state, trackId) => {
  const likes = getTracklistById(state, SESSION_LIKES_TRACKLIST_ID);
  return likes && likes.trackIds.contains(trackId);
  // return likes && likes.trackIds.indexOf(trackId) !== -1;
};

//= ====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentPage = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.currentPage
);

export const getCurrentTrackIds = createSelector(
  getCurrentTracklist,
  tracklist => tracklist.trackIds
);

export const getTracksForCurrentTracklist = createSelector(
  getCurrentPage,
  getCurrentTrackIds,
  getTracks,
  (currentPage, trackIds, tracks) => {
    return trackIds
      .slice(0, currentPage * TRACKS_PER_PAGE)
      .map(id => tracks.get(id));
  }
);

export const getTracklistState = createSelector(
  getBrowserMedia,
  getPlayerIsPlaying,
  getPlayerTrackId,
  getCurrentTracklist,
  getTracksForCurrentTracklist,
  (
    media,
    isPlaying,
    playerTrackId,
    { isPending, hasNextPage, id },
    tracks
  ) => ({
    displayLoadingIndicator: isPending || hasNextPage,
    isMediaLarge: !!media.large,
    isPlaying,
    pause: audio.pause,
    pauseInfiniteScroll: isPending || !hasNextPage,
    play: audio.play,
    selectedTrackId: playerTrackId,
    tracklistId: id,
    tracks,
  })
);

export const getTracksForHistoryTracklist = createSelector(
  state => getTracklists(state).get(SESSION_HISTORY_TRACKLIST_ID).trackIds,
  getTracks,
  (trackIds, tracks) => trackIds.map(id => tracks.get(id))
);

export const getHistorySidebarState = createSelector(
  getPlayerIsPlaying,
  getPlayerTrackId,
  getTracksForHistoryTracklist,
  getIsHistoryDrawerOpen,
  (isPlaying, selectedTrackId, tracks, isOpen) => ({
    isPlaying,
    pause: audio.pause,
    play: audio.play,
    selectedTrackId,
    tracks,
    isOpen,
  })
);
