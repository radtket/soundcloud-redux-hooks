import { call, fork, select, takeLatest } from "redux-saga/effects";
import {
  fetchUser,
  fetchUserLikes,
  fetchUserTracks,
  fetchGenreResults,
} from "../api/sagas";
import { getTracklistById } from "../tracklists/selectors";
import { getUserById } from "./selectors";

// Actions
import { LOAD_FEATURED_TRACKS } from "../tracklists/actions";
import { LOAD_USER, LOAD_USER_LIKES, LOAD_USER_TRACKS } from "./actions";
import { LOAD_GENRE_TRACKS } from "../genre/actions";

function* loadUser({ userId }) {
  const user = yield select(getUserById, userId);

  if (!user || !user.profile) {
    yield call(fetchUser, userId);
  }
}

function* loadGenreTracks({ tracklistId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchGenreResults, tracklistId);
  }
}

function* loadUserLikes({ tracklistId, userId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserLikes, tracklistId, userId);
  }
}

function* loadUserTracks({ tracklistId, userId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserTracks, tracklistId, userId);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadUser() {
  yield takeLatest(LOAD_USER, loadUser);
}

function* watchLoadUserLikes() {
  yield takeLatest([LOAD_USER_LIKES, LOAD_FEATURED_TRACKS], loadUserLikes);
}

function* watchLoadUserTracks() {
  yield takeLatest(LOAD_USER_TRACKS, loadUserTracks);
}

function* watchLoadGenreTracks() {
  yield takeLatest(LOAD_GENRE_TRACKS, loadGenreTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [
  fork(watchLoadUser),
  fork(watchLoadUserLikes),
  fork(watchLoadUserTracks),
  fork(watchLoadGenreTracks),
];
