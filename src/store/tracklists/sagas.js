import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { fetchNextTracks } from "../api/sagas";
import { getCurrentTracklist } from "./selectors";

// Actions
import { LOAD_NEXT_TRACKS, updatePagination } from "./actions";

function* loadNextTracks() {
  const tracklist = yield select(getCurrentTracklist);
  if (tracklist.hasNextPageInStore) {
    yield put(updatePagination(tracklist.currentPage + 1));
  } else if (tracklist.nextUrl) {
    yield call(fetchNextTracks, tracklist.id, tracklist.nextUrl);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadNextTracks() {
  yield takeLatest(LOAD_NEXT_TRACKS, loadNextTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadNextTracks)];
