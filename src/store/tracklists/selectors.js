import { createSelector } from "reselect";
import { TRACKS_PER_PAGE } from "../constants";
import { getTracks } from "../tracks/selectors";
import getBrowserMedia from "../browser/selectors";
import { audio } from "../player/audio-service";

export const getTracklists = state => state.tracklists;

export const getTracklistById = (state, tracklistId) =>
  getTracklists(state).get(tracklistId);

export const getCurrentTracklist = state => {
  const tracklists = getTracklists(state);
  return tracklists.get(tracklists.get("currentTracklistId"));
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
  state => state.player.isPlaying,
  state => state.player.trackId,
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
