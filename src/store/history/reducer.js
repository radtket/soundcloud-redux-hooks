import { Set, List } from "immutable";

import { TOGGLE_SHOW_HISTORY } from "./actions";
import { PLAY_SELECTED_TRACK } from "../player/actions";

const initialState = {
  songs: new List(),
  showHistory: false,
};

const mergeTrackIds = ({ trackIds, id }) => {
  const ids = trackIds.toJS();

  return ids.includes(id) ? trackIds : new List(ids.concat(id));
};

export default (state = initialState, { trackId, tracklistId, type }) => {
  switch (type) {
    case PLAY_SELECTED_TRACK:
      return {
        ...state,
        songs: mergeTrackIds({ trackIds: state.songs, id: trackId }),
      };

    case TOGGLE_SHOW_HISTORY:
      return {
        ...state,
        showHistory: !state.showHistory,
      };

    default:
      return state;
  }
};
