import { Map } from "immutable";
import { createTrack } from "./track";

// Actions
import { tracklistActions } from "../tracklists/actions";

const { FETCH_TRACKS_FULFILLED } = tracklistActions;

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
