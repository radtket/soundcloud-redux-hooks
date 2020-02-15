import Cookies from "js-cookie";
import { COOKIE_PATH } from "../constants";

export const FETCH_OAUTH_TOKEN = "FETCH_OAUTH_TOKEN";
export const FETCH_SESSION_FOLLOWINGS_SUCCESS =
  "FETCH_SESSION_FOLLOWINGS_SUCCESS";
export const FETCH_SESSION_LIKES_SUCCESS = "FETCH_SESSION_LIKES_SUCCESS";
export const FETCH_SESSION_USER_SUCCESS = "FETCH_SESSION_USER_SUCCESS";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

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

export const fetchSessionUserSuccess = (id, entities) => ({
  type: FETCH_SESSION_USER_SUCCESS,
  id,
  entities,
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
