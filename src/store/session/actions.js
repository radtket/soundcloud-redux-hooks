import Cookies from "js-cookie";
import { COOKIE_PATH, SESSION_TRACKLIST_ID } from "../constants";

export const FETCH_OAUTH_TOKEN = "FETCH_OAUTH_TOKEN";
export const FETCH_SESSION_FOLLOWINGS_SUCCESS =
  "FETCH_SESSION_FOLLOWINGS_SUCCESS";
export const FETCH_SESSION_LIKES_SUCCESS = "FETCH_SESSION_LIKES_SUCCESS";
export const FETCH_SESSION_USER_SUCCESS = "FETCH_SESSION_USER_SUCCESS";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const LOAD_SESSION_TRACKS = "LOAD_SESSION_TRACKS";

export const loadSessionTracks = ({ oauthToken }) => {
  return {
    type: LOAD_SESSION_TRACKS,
    oauthToken,
    tracklistId: SESSION_TRACKLIST_ID,
  };
};

export const login = () => {
  return {
    type: FETCH_OAUTH_TOKEN,
  };
};

export const loginSuccess = oauthToken => {
  return {
    type: LOGIN_SUCCESS,
    oauthToken,
  };
};

// eslint-disable-next-line camelcase
export const fetchSessionUserSuccess = ({ id, avatar_url, username }) => ({
  type: FETCH_SESSION_USER_SUCCESS,
  id,
  avatarUrl: avatar_url,
  username,
});

export const fetchSessionFollowingsSuccess = ({ followings, entities }) => ({
  type: FETCH_SESSION_FOLLOWINGS_SUCCESS,
  followings,
  entities,
});

export const fetchSessionLikesSuccess = likes => ({
  type: FETCH_SESSION_LIKES_SUCCESS,
  likes,
});

export const initAuth = dispatch => {
  const oauthToken = Cookies.get(COOKIE_PATH);
  if (oauthToken) {
    dispatch({
      type: LOGIN_SUCCESS,
      oauthToken,
    });
  }
};

export const toggleLikeRequest = ({ id, liked, oauthToken }) => {
  // const oauthToken = Cookies.get(COOKIE_PATH);
  return {
    type: TOGGLE_LIKE,
    id,
    liked,
    oauthToken,
  };
};
