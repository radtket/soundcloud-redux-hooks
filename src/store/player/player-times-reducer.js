import { Record } from "immutable";

// Actions
import {
  AUDIO_TIME_UPDATED,
  AUDIO_ENDED,
  PLAY_SELECTED_TRACK,
} from "./actions";

const PlayerTimesState = new Record({
  bufferedTime: 0,
  currentTime: 0,
  duration: 0,
  percentBuffered: "0%",
  percentCompleted: "0%",
});

export default (state = new PlayerTimesState(), { times, type }) => {
  switch (type) {
    case AUDIO_ENDED:
    case PLAY_SELECTED_TRACK:
      return new PlayerTimesState();

    case AUDIO_TIME_UPDATED:
      return state.merge(times);

    default:
      return state;
  }
};
