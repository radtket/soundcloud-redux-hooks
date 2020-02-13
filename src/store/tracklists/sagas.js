import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { fetchNextTracks } from "../api/sagas";
import { getCurrentTracklist } from "./selectors";

// Actions
import { tracklistActions } from "./actions";

const { LOAD_NEXT_TRACKS } = tracklistActions;

export function* loadNextTracks() {
  const tracklist = yield select(getCurrentTracklist);
  if (tracklist.hasNextPageInStore) {
    yield put(tracklistActions.updatePagination(tracklist.currentPage + 1));
  } else if (tracklist.nextUrl) {
    yield call(fetchNextTracks, tracklist.id, tracklist.nextUrl);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

export function* watchLoadNextTracks() {
  yield takeLatest(LOAD_NEXT_TRACKS, loadNextTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export const tracklistSagas = [fork(watchLoadNextTracks)];
