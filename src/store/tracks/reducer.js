import { Map } from "immutable";
import { createTrack } from "./track";

// Actions
import { FETCH_TRACKS_FULFILLED } from "../tracklists/actions";
import { FETCH_SESSION_LIKES_SUCCESS } from "../session/actions";
import { FETCH_SINGLE_TRACK_FULFILLED } from "./actions";

export default (state = new Map(), { collection, type, id }) => {
  switch (type) {
    case FETCH_SINGLE_TRACK_FULFILLED:
      return state.set(id, createTrack(collection));

    case FETCH_SESSION_LIKES_SUCCESS:
      return state.withMutations(tracks => {
        collection.forEach(track => {
          if (!tracks.has(track.id)) {
            tracks.set(track.id, createTrack(track));
          }
        });
      });

    case FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracks => {
        collection.forEach(track => {
          tracks.set(track.id, createTrack(track));
        });
      });

    default:
      return state;
  }
};
