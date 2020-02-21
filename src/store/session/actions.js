import Cookies from "js-cookie";
import { COOKIE_PATH } from "../constants";

export const FETCH_OAUTH_TOKEN = "FETCH_OAUTH_TOKEN";
export const FETCH_SESSION_FOLLOWINGS_SUCCESS =
  "FETCH_SESSION_FOLLOWINGS_SUCCESS";
export const FETCH_SESSION_LIKES_SUCCESS = "FETCH_SESSION_LIKES_SUCCESS";
export const FETCH_SESSION_USER_SUCCESS = "FETCH_SESSION_USER_SUCCESS";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";

export const login = () => {
  return {
    type: FETCH_OAUTH_TOKEN,
  };
};

export const loginSuccess = oauthToken => {
  return {
    type: LOGIN_SUCCESS,
    oauthToken: oauthToken || Cookies.get(COOKIE_PATH),
  };
};

export const fetchSessionUserSuccess = ({ id, avatarUrl, username }) => ({
  type: FETCH_SESSION_USER_SUCCESS,
  id,
  avatarUrl,
  username,
});

export const fetchSessionFollowingsSuccess = ({ collection }) => {
  return {
    type: FETCH_SESSION_FOLLOWINGS_SUCCESS,
    collection,
  };
};

export const fetchSessionLikesSuccess = collection => ({
  type: FETCH_SESSION_LIKES_SUCCESS,
  collection,
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
  return {
    type: TOGGLE_LIKE,
    id,
    liked,
    oauthToken: oauthToken || Cookies.get(COOKIE_PATH),
  };
};

export const toggleFollowRequest = ({ id, following, oauthToken }) => ({
  type: TOGGLE_FOLLOW,
  id,
  following,
  oauthToken: oauthToken || Cookies.get(COOKIE_PATH),
});
