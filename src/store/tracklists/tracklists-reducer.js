import { Map } from "immutable";
import { SESSION_TRACKLIST_ID } from "../constants";
import searchActions from "../search/actions";
import { userActions } from "../users/actions";
import { tracklistActions } from "./actions";
import Tracklist from "./tracklist";
import tracklistReducer from "./tracklist-reducer";

const initialState = new Map({
  currentTracklistId: SESSION_TRACKLIST_ID,
  [SESSION_TRACKLIST_ID]: new Tracklist({
    id: SESSION_TRACKLIST_ID,
    isNew: false,
  }),
});

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case tracklistActions.FETCH_TRACKS_FULFILLED:
    case tracklistActions.FETCH_TRACKS_PENDING:
      return state.set(
        payload.tracklistId,
        tracklistReducer(state.get(payload.tracklistId), action)
      );

    case tracklistActions.LOAD_FEATURED_TRACKS:
    case searchActions.LOAD_SEARCH_RESULTS:
    case userActions.LOAD_USER_LIKES:
    case userActions.LOAD_USER_TRACKS:
      return state.merge({
        currentTracklistId: payload.tracklistId,
        [payload.tracklistId]: tracklistReducer(
          state.get(payload.tracklistId),
          action
        ),
      });

    case tracklistActions.MOUNT_TRACKLIST:
      return state.set("currentTracklistId", payload.tracklistId);

    case tracklistActions.UPDATE_PAGINATION:
      return state.set(
        state.get("currentTracklistId"),
        tracklistReducer(state.get(state.get("currentTracklistId")), action)
      );

    default:
      return state;
  }
};
