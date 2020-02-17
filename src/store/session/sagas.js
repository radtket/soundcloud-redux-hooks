import Cookies from "js-cookie";
import {
  fork,
  put,
  call,
  takeLatest,
  select,
  takeEvery,
} from "redux-saga/effects";
import { COOKIE_PATH } from "../constants";
import {
  fetchSessionFollowingsSuccess,
  fetchSessionLikesSuccess,
  fetchSessionUserSuccess,
  loginSuccess,
  FETCH_OAUTH_TOKEN,
  LOGIN_SUCCESS,
  TOGGLE_LIKE,
  LOAD_SESSION_TRACKS,
} from "./actions";
import api from "../api/api-service";
import { fetchSessionStreamTracks } from "../api/sagas";
import { getTracklistById } from "../tracklists/selectors";

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
  const { error } = yield call(api.toggleLike, { id, liked, oauthToken });
  console.log({ error });
}

function* loadSessionTracks({ tracklistId, oauthToken }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchSessionStreamTracks, { id: tracklistId, oauthToken });
  }
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

function* watchLoadSessionTracks() {
  yield takeEvery(LOAD_SESSION_TRACKS, loadSessionTracks);
}

export default [
  fork(watchLoadOAuthToken),
  fork(watchLogin),
  fork(watchToggleLike),
  fork(watchLoadSessionTracks),
];
