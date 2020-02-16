import { Record } from "immutable";
import {
  FETCH_SESSION_FOLLOWINGS_SUCCESS,
  FETCH_SESSION_LIKES_SUCCESS,
  FETCH_SESSION_USER_SUCCESS,
  LOGIN_SUCCESS,
  TOGGLE_LIKE,
} from "./actions";

const SessionState = new Record({
  avatarUrl: null,
  followings: {},
  id: null,
  likes: {},
  newStreamSongs: [],
  oauthToken: null,
  username: null,
});

export default (
  state = new SessionState(),
  { followings, oauthToken, type, id, likes, avatarUrl, username, liked }
) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return state.set("oauthToken", oauthToken);

    case FETCH_SESSION_USER_SUCCESS:
      return state.merge({
        avatarUrl,
        id,
        username,
      });

    case FETCH_SESSION_FOLLOWINGS_SUCCESS:
      return state.set("followings", followings);

    case FETCH_SESSION_LIKES_SUCCESS:
      return state.set("likes", likes);

    case TOGGLE_LIKE:
      return state.set("likes", {
        ...state.likes,
        [id]: !liked,
      });

    default:
      return state;
  }
};
