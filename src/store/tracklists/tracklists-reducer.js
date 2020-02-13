import { Map } from "immutable";
import { SESSION_TRACKLIST_ID } from "../constants";
import Tracklist from "./tracklist";
import tracklistReducer from "./tracklist-reducer";

// Actions
import searchActions from "../search/actions";
import { userActions } from "../users/actions";
import { tracklistActions } from "./actions";

const { LOAD_SEARCH_RESULTS } = searchActions;
const { LOAD_USER_LIKES, LOAD_USER_TRACKS } = userActions;
const {
  FETCH_TRACKS_FULFILLED,
  FETCH_TRACKS_PENDING,
  LOAD_FEATURED_TRACKS,
  MOUNT_TRACKLIST,
  UPDATE_PAGINATION,
} = tracklistActions;

const initialState = new Map({
  currentTracklistId: SESSION_TRACKLIST_ID,
  [SESSION_TRACKLIST_ID]: new Tracklist({
    id: SESSION_TRACKLIST_ID,
    isNew: false,
  }),
});

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_TRACKS_FULFILLED:
    case FETCH_TRACKS_PENDING:
      return state.set(
        payload.tracklistId,
        tracklistReducer(state.get(payload.tracklistId), {
          collection: payload.collection,
          next_href: payload.next_href,
          tracklistId: payload.tracklistId,
          type,
        })
      );

    case LOAD_FEATURED_TRACKS:
    case LOAD_SEARCH_RESULTS:
    case LOAD_USER_LIKES:
    case LOAD_USER_TRACKS:
      return state.merge({
        currentTracklistId: payload.tracklistId,
        [payload.tracklistId]: tracklistReducer(
          state.get(payload.tracklistId),
          { tracklistId: payload.tracklistId, type }
        ),
      });

    case MOUNT_TRACKLIST:
      return state.set("currentTracklistId", payload.tracklistId);

    case UPDATE_PAGINATION:
      return state.set(
        state.get("currentTracklistId"),
        tracklistReducer(state.get(state.get("currentTracklistId")), {
          page: payload.page,
          type,
        })
      );

    default:
      return state;
  }
};
