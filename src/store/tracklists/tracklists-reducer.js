/* eslint-disable camelcase */
import { Map } from "immutable";
import { SESSION_TRACKLIST_ID } from "../constants";
import Tracklist from "./tracklist";
import tracklistReducer from "./tracklist-reducer";

// Actions
import { LOAD_SEARCH_RESULTS } from "../search/actions";
import { LOAD_USER_LIKES, LOAD_USER_TRACKS } from "../users/actions";
import {
  FETCH_TRACKS_FULFILLED,
  FETCH_TRACKS_PENDING,
  LOAD_FEATURED_TRACKS,
  UPDATE_PAGINATION,
  LOAD_GENRE_TRACKS,
} from "./actions";

const initialState = new Map({
  currentTracklistId: SESSION_TRACKLIST_ID,
  [SESSION_TRACKLIST_ID]: new Tracklist({
    id: SESSION_TRACKLIST_ID,
    isNew: false,
  }),
});

export default (
  state = initialState,
  { page, type, tracklistId, collection, next_href }
) => {
  switch (type) {
    case FETCH_TRACKS_FULFILLED:
    case FETCH_TRACKS_PENDING:
      return state.set(
        tracklistId,
        tracklistReducer(state.get(tracklistId), {
          collection,
          next_href,
          tracklistId,
          type,
        })
      );

    case LOAD_GENRE_TRACKS:
    case LOAD_FEATURED_TRACKS:
    case LOAD_SEARCH_RESULTS:
    case LOAD_USER_LIKES:
    case LOAD_USER_TRACKS:
      return state.merge({
        currentTracklistId: tracklistId,
        [tracklistId]: tracklistReducer(state.get(tracklistId), {
          tracklistId,
          type,
        }),
      });

    case UPDATE_PAGINATION:
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
