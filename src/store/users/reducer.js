import { Map } from "immutable";
import { createUser } from "./user";

// Actions
import { tracklistActions } from "../tracklists/actions";
import { userActions } from "./actions";

const { LOAD_USER } = userActions;

const initialState = new Map({
  currentUserId: null,
});

export default (state = initialState, { payload, type, userId }) => {
  switch (type) {
    case tracklistActions.FETCH_TRACKS_FULFILLED:
      return state.withMutations(users => {
        payload.collection.forEach(trackData => {
          if (!users.has(trackData.user.id)) {
            users.set(trackData.user.id, createUser(trackData.user));
          }
        });
      });

    case userActions.FETCH_USER_FULFILLED:
      return state.withMutations(users => {
        const { user } = payload;
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
