import { call, fork, select, takeLatest } from "redux-saga/effects";
import { fetchUser, fetchUserLikes, fetchUserTracks } from "../api/sagas";
import { getTracklistById } from "../tracklists/selectors";
import { getUserById } from "./selectors";

// Actions
import { tracklistActions } from "../tracklists/actions";
import { userActions } from "./actions";

const { LOAD_USER, LOAD_USER_LIKES, LOAD_USER_TRACKS } = userActions;
const { LOAD_FEATURED_TRACKS } = tracklistActions;

export function* loadUser({ userId }) {
  const user = yield select(getUserById, userId);

  if (!user || !user.profile) {
    yield call(fetchUser, userId);
  }
}

export function* loadUserLikes({ tracklistId, userId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserLikes, tracklistId, userId);
  }
}

export function* loadUserTracks({ tracklistId, userId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserTracks, tracklistId, userId);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

export function* watchLoadUser() {
  yield takeLatest(LOAD_USER, loadUser);
}

export function* watchLoadUserLikes() {
  yield takeLatest([LOAD_USER_LIKES, LOAD_FEATURED_TRACKS], loadUserLikes);
}

export function* watchLoadUserTracks() {
  yield takeLatest(LOAD_USER_TRACKS, loadUserTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export const userSagas = [
  fork(watchLoadUser),
  fork(watchLoadUserLikes),
  fork(watchLoadUserTracks),
];
