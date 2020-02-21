import { Record } from "immutable";
import { PLAYER_INITIAL_VOLUME, FEATURED_TRACKLIST_ID } from "../constants";

// Actions
import {
  AUDIO_ENDED,
  AUDIO_PAUSED,
  AUDIO_PLAYING,
  AUDIO_REPEAT_CHANGED,
  AUDIO_VOLUME_CHANGED,
  PLAY_SELECTED_TRACK,
  TOGGLE_HISTORY_DRAWER_OPEN,
} from "./actions";

const PlayerState = new Record({
  isPlaying: false,
  isRepeat: false,
  trackId: null,
  tracklistId: FEATURED_TRACKLIST_ID,
  volume: PLAYER_INITIAL_VOLUME,
  isHistoryDrawerOpen: false,
});

export default (
  state = new PlayerState(),
  { isRepeat, volume, trackId, tracklistId, type }
) => {
  switch (type) {
    case AUDIO_ENDED:
    case AUDIO_PAUSED:
      return state.set("isPlaying", false);

    case AUDIO_PLAYING:
      return state.set("isPlaying", true);

    case AUDIO_VOLUME_CHANGED:
      return state.set("volume", volume);

    case AUDIO_REPEAT_CHANGED:
      return state.set("isRepeat", isRepeat);

    case PLAY_SELECTED_TRACK:
      return state.merge({
        trackId,
        tracklistId: tracklistId || state.get("tracklistId"),
      });

    case TOGGLE_HISTORY_DRAWER_OPEN:
      return state.set("isHistoryDrawerOpen", !state.isHistoryDrawerOpen);

    default:
      return state;
  }
};
