import { Record } from "immutable";
import { PLAYER_INITIAL_VOLUME, SESSION_TRACKLIST_ID } from "../constants";

// Actions
import playerActions from "./actions";

const {
  AUDIO_ENDED,
  AUDIO_PAUSED,
  AUDIO_PLAYING,
  AUDIO_REPEAT_CHANGED,
  AUDIO_VOLUME_CHANGED,
  PLAY_SELECTED_TRACK,
} = playerActions;

const PlayerState = new Record({
  isPlaying: false,
  isRepeat: false,
  trackId: null,
  tracklistId: SESSION_TRACKLIST_ID,
  volume: PLAYER_INITIAL_VOLUME,
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

    default:
      return state;
  }
};
