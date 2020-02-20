import { Map, List } from "immutable";
import Cookies from "js-cookie";
import {
  FEATURED_TRACKLIST_ID,
  COOKIE_PATH,
  HISTORY_TRACKLIST_ID,
} from "../constants";
import Tracklist from "./tracklist";
import tracklistReducer from "./tracklist-reducer";

// Actions
import { LOAD_SEARCH_RESULTS } from "../search/actions";
import { LOAD_USER_TRACKS } from "../users/actions";
import {
  FETCH_TRACKS_FULFILLED,
  FETCH_TRACKS_PENDING,
  UPDATE_TRACKS_PAGINATION,
} from "./actions";
import { PLAY_SELECTED_TRACK } from "../player/actions";

const initialState = new Map({
  currentTracklistId: FEATURED_TRACKLIST_ID,
  [FEATURED_TRACKLIST_ID]: new Tracklist({
    id: FEATURED_TRACKLIST_ID,
    isNew: true,
    oauthToken: Cookies.get(COOKIE_PATH),
  }),
  [HISTORY_TRACKLIST_ID]: new Tracklist({
    id: HISTORY_TRACKLIST_ID,
    isNew: true,
  }),
});

export default (
  state = initialState,
  { page, type, tracklistId, collection, nextHref, trackId }
) => {
  switch (type) {
    case PLAY_SELECTED_TRACK:
      return state.withMutations(tracklist => {
        const history = tracklist.get(HISTORY_TRACKLIST_ID);
        const ids = history.trackIds.toJS();

        tracklist.set(
          HISTORY_TRACKLIST_ID,
          history.merge({
            trackIds: ids.includes(trackId)
              ? history.trackIds
              : new List(ids.concat(trackId)),
          })
        );
      });

    case FETCH_TRACKS_FULFILLED:
    case FETCH_TRACKS_PENDING:
      return state.set(
        tracklistId,
        tracklistReducer(state.get(tracklistId), {
          collection,
          nextHref,
          tracklistId,
          type,
        })
      );

    case LOAD_SEARCH_RESULTS:
    case LOAD_USER_TRACKS:
      return state.merge({
        currentTracklistId: tracklistId,
        [tracklistId]: tracklistReducer(state.get(tracklistId), {
          tracklistId,
          type,
        }),
      });

    case UPDATE_TRACKS_PAGINATION:
      return state.set(
        state.get("currentTracklistId"),
        tracklistReducer(state.get(state.get("currentTracklistId")), {
          page,
          type,
        })
      );

    default:
      return state;
  }
};
