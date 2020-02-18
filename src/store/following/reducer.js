import { Map } from "immutable";
import { createFollowing } from "./following";

// Actions
import { FETCH_FOLLOWINGS_FULFILLED } from "../followings/actions";

export default (state = new Map(), { collection, type }) => {
  console.log({ collection });
  switch (type) {
    case FETCH_FOLLOWINGS_FULFILLED:
      return state.withMutations(tracks => {
        collection.forEach(trackData => {
          tracks.set(trackData.id, createFollowing(trackData));
        });
      });

    default:
      return state;
  }
};
