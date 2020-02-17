import { createSelector } from "reselect";
import {
  getCurrentTrackIds,
  getCurrentTracklist,
} from "../tracklists/selectors";
import { getPlayerTrackId, getPlayerIsPlaying } from "../player/selectors";
import { audio } from "../player/audio-service";

export const getUsers = state => state.users;

export const getUserById = (state, userId) => getUsers(state).get(userId);

//= ====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getCurrentUser = createSelector(getUsers, users =>
  users.get(users.get("currentUserId"))
);

export const getCurrentUserHeroPlay = createSelector(
  getCurrentTrackIds,
  getPlayerTrackId,
  getCurrentTracklist,
  getPlayerIsPlaying,
  (currentTrackIds, activeTrackID, tracklist, isPlaying) => {
    return {
      play: audio.play,
      pause: audio.pause,
      activeTrackID,
      playingSongIsOwnedByArtist: currentTrackIds.includes(activeTrackID),
      firstTrack: currentTrackIds.first(),
      tracklistId: tracklist.id,
      isPlaying,
      // isPlaying: selected && player.isPlaying,
    };
  }
);
