import { Map } from "immutable";
import { createUser } from "./user";

// Actions
import { FETCH_TRACKS_FULFILLED } from "../tracklists/actions";
import { LOAD_USER, FETCH_USER_FULFILLED } from "./actions";
import { FETCH_FOLLOWINGS_FULFILLED } from "../followings/actions";
import {
  FETCH_SESSION_FOLLOWINGS_SUCCESS,
  FETCH_SESSION_LIKES_SUCCESS,
} from "../session/actions";

const initialState = new Map({
  currentUserId: null,
});

export default (state = initialState, { collection, type, userId, user }) => {
  switch (type) {
    case FETCH_SESSION_FOLLOWINGS_SUCCESS:
    case FETCH_SESSION_LIKES_SUCCESS:
    case FETCH_FOLLOWINGS_FULFILLED:
      return state.withMutations(users => {
        collection.forEach(userData => {
          if (!users.has(userData.id)) {
            users.set(userData.id, createUser(userData));
          }
        });
      });

    case FETCH_TRACKS_FULFILLED:
      return state.withMutations(users => {
        collection.forEach(trackData => {
          if (!users.has(trackData.user.id)) {
            users.set(trackData.user.id, createUser(trackData.user));
          }
        });
      });

    case FETCH_USER_FULFILLED:
      return state.withMutations(users => {
        if (!users.has(user.id) || !users.get(user.id).profile) {
          users.set(user.id, createUser(user, true));
        }
      });

    case LOAD_USER:
      return state.set("currentUserId", userId);

    default:
      return state;
  }
};
