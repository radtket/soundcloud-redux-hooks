import { Record } from "immutable";
import {
  FETCH_SESSION_FOLLOWINGS_SUCCESS,
  FETCH_SESSION_LIKES_SUCCESS,
  FETCH_SESSION_USER_SUCCESS,
  LOGIN_SUCCESS,
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
  { followings, oauthToken, type, id, likes, avatarUrl, username }
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

    default:
      return state;
  }
};
