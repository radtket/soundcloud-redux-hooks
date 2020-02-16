import Cookies from "js-cookie";
import { fork, put, call, takeLatest, select } from "redux-saga/effects";
import { COOKIE_PATH } from "../constants";
import {
  fetchSessionFollowingsSuccess,
  fetchSessionLikesSuccess,
  fetchSessionUserSuccess,
  loginSuccess,
  FETCH_OAUTH_TOKEN,
  LOGIN_SUCCESS,
  TOGGLE_LIKE,
} from "./actions";
import api from "../api/api-service";
import { getOauthToken } from "./selectors";

function* login() {
  const oauthToken = yield call(api.loginToSoundCloud);
  if (oauthToken) {
    Cookies.set(COOKIE_PATH, oauthToken);
    yield put(loginSuccess(oauthToken));
  }
}

function* fetchSessionData({ oauthToken }) {
  const user = yield call(api.fetchSessionUser, oauthToken);
  yield put(fetchSessionUserSuccess(user));

  const { followings } = yield call(api.fetchSessionFollowings, oauthToken);
  yield put(fetchSessionFollowingsSuccess({ followings }));

  const likes = yield call(api.fetchSessionLikes, oauthToken);
  yield put(fetchSessionLikesSuccess(likes));
}

function* toggleLike({ id, liked, oauthToken }) {
  console.log({ id, liked, oauthToken });
  const dude = yield call(api.toggleLike, id, liked, oauthToken);
  console.log({ dude });
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadOAuthToken() {
  yield takeLatest(LOGIN_SUCCESS, fetchSessionData);
}

function* watchLogin() {
  yield takeLatest(FETCH_OAUTH_TOKEN, login);
}

function* watchToggleLike() {
  yield takeLatest(TOGGLE_LIKE, toggleLike);
}

export default [
  fork(watchLoadOAuthToken),
  fork(watchLogin),
  fork(watchToggleLike),
];
