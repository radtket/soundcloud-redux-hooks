import {
  FETCH_SESSION_FOLLOWINGS_SUCCESS,
  FETCH_SESSION_LIKES_SUCCESS,
  FETCH_SESSION_USER_SUCCESS,
  LOGIN_SUCCESS,
} from "./actions";

const initialState = {
  avatarUrl: null,
  followings: {},
  id: null,
  likes: {},
  newStreamSongs: [],
  oauthToken: null,
  username: null,
};

export default (
  state = initialState,
  { followings, oauthToken, type, id, likes, avatarUrl, username }
) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        oauthToken,
      };

    case FETCH_SESSION_USER_SUCCESS:
      return {
        ...state,
        avatarUrl,
        id,
        username,
      };

    case FETCH_SESSION_FOLLOWINGS_SUCCESS:
      return {
        ...state,
        followings,
      };

    case FETCH_SESSION_LIKES_SUCCESS:
      return {
        ...state,
        likes,
      };

    default:
      return state;
  }
};
