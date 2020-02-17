import { call, fork, select, takeLatest } from "redux-saga/effects";
import { fetchUser, fetchUserTracks } from "../api/sagas";
import { getTracklistById } from "../tracklists/selectors";
import { getUserById } from "./selectors";

// Actions
import { LOAD_USER, LOAD_USER_TRACKS } from "./actions";

function* loadUser({ userId }) {
  const user = yield select(getUserById, userId);

  if (!user || !user.profile) {
    yield call(fetchUser, userId);
  }
}

function* loadUserTracks({ tracklistId, userId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserTracks, tracklistId, userId, tracklistId);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadUser() {
  yield takeLatest(LOAD_USER, loadUser);
}

function* watchLoadUserTracks() {
  yield takeLatest(LOAD_USER_TRACKS, loadUserTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadUser), fork(watchLoadUserTracks)];
