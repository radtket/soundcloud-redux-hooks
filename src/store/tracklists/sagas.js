import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { fetchNextTracks } from "../api/sagas";
import { getCurrentTracklist } from "./selectors";

// Actions
import { LOAD_NEXT_TRACKS, updateTracksPagination } from "./actions";

function* loadNextTracks() {
  const {
    hasNextPageInStore,
    currentPage,
    nextUrl,
    id,
    oauthToken,
  } = yield select(getCurrentTracklist);

  if (hasNextPageInStore) {
    yield put(updateTracksPagination(currentPage + 1));
  } else if (nextUrl) {
    yield call(fetchNextTracks, { id, url: nextUrl, oauthToken });
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
