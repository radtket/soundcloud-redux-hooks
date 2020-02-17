import { call, fork, select, take, takeLatest } from "redux-saga/effects";
import { fetchSearchResults } from "../api/sagas";
import history from "../history";
import { getTracklistById } from "../tracklists/selectors";

// Actions
import { NAVIGATE_TO_SEARCH, LOAD_SEARCH_RESULTS } from "./actions";

function* loadSearchResults({ query, tracklistId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchSearchResults, { id: tracklistId, query });
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadSearchResults() {
  yield takeLatest(LOAD_SEARCH_RESULTS, loadSearchResults);
}

function* watchNavigateToSearch() {
  while (true) {
    const { pathname, search } = yield take(NAVIGATE_TO_SEARCH);
    yield history.push({ pathname, search });
  }
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadSearchResults), fork(watchNavigateToSearch)];
