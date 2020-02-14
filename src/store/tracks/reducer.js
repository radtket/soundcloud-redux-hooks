import { Map } from "immutable";
import { createTrack } from "./track";

// Actions
import { FETCH_TRACKS_FULFILLED } from "../tracklists/actions";

export default (state = new Map(), { collection, type }) => {
  switch (type) {
    case FETCH_TRACKS_FULFILLED:
      return state.withMutations(tracks => {
        collection.forEach(trackData => {
          tracks.set(trackData.id, createTrack(trackData));
        });
      });

    default:
      return state;
  }
};
