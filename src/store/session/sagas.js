import Cookies from "js-cookie";
import { fork, put, call, takeLatest } from "redux-saga/effects";
import { COOKIE_PATH } from "../constants";
import {
  fetchSessionFollowingsSuccess,
  fetchSessionLikesSuccess,
  fetchSessionUserSuccess,
  loginSuccess,
  FETCH_OAUTH_TOKEN,
  LOGIN_SUCCESS,
  TOGGLE_LIKE,
  TOGGLE_FOLLOW,
} from "./actions";
import api from "../api/api-service";

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

  const followings = yield call(api.fetchSessionFollowings, oauthToken);

  yield put(fetchSessionFollowingsSuccess(followings));

  const likes = yield call(api.fetchSessionLikes, oauthToken);
  yield put(fetchSessionLikesSuccess(likes));
}

function* toggleLike({ id, liked, oauthToken }) {
  const { error } = yield call(api.toggleLike, { id, liked, oauthToken });
  console.log({ error });
}

function* toggleFollow({ id, following, oauthToken }) {
  const { error, ...rest } = yield call(api.toggleFollow, {
    id,
    following,
    oauthToken,
  });
  console.log({ error, rest });
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

function* watchToggleFollow() {
  yield takeLatest(TOGGLE_FOLLOW, toggleFollow);
}

export default [
  fork(watchLoadOAuthToken),
  fork(watchLogin),
  fork(watchToggleLike),
  fork(watchToggleFollow),
];
