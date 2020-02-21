import { Record } from "immutable";
import {
  FETCH_SESSION_FOLLOWINGS_SUCCESS,
  FETCH_SESSION_LIKES_SUCCESS,
  FETCH_SESSION_USER_SUCCESS,
  LOGIN_SUCCESS,
  TOGGLE_LIKE,
  TOGGLE_FOLLOW,
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
  { oauthToken, type, id, avatarUrl, username, liked, collection, following }
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
      return state.set(
        "followings",
        collection.reduce((all, one) => {
          return {
            ...all,
            [one.id]: true,
          };
        }, {})
      );

    case FETCH_SESSION_LIKES_SUCCESS:
      return state.set(
        "likes",
        collection.reduce((all, one) => {
          if (one.streamable) {
            return {
              ...all,
              [one.id]: true,
            };
          }

          return all;
        }, {})
      );

    case TOGGLE_LIKE:
      return state.set("likes", {
        ...state.likes,
        [id]: !liked,
      });

    case TOGGLE_FOLLOW:
      return state.set("followings", {
        ...state.followings,
        [id]: !following,
      });

    default:
      return state;
  }
};
