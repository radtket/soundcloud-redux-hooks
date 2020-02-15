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

  const { followings } = yield call(api.fetchSessionFollowings, oauthToken);
  yield put(fetchSessionFollowingsSuccess({ followings }));

  const likes = yield call(api.fetchSessionLikes, oauthToken);
  yield put(fetchSessionLikesSuccess(likes));
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

export default [fork(watchLoadOAuthToken), fork(watchLogin)];
