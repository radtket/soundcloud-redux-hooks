import { call, fork, select, take, takeLatest } from "redux-saga/effects";
import { fetchSearchResults } from "../api/sagas";
import history from "../history";
import { getTracklistById } from "../tracklists/selectors";

// Actions
import searchActions from "./actions";

const { NAVIGATE_TO_SEARCH, LOAD_SEARCH_RESULTS } = searchActions;

export function* loadSearchResults({ query, tracklistId }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchSearchResults, tracklistId, query);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

export function* watchLoadSearchResults() {
  yield takeLatest(LOAD_SEARCH_RESULTS, loadSearchResults);
}

export function* watchNavigateToSearch() {
  while (true) {
    const { payload, ...rest } = yield take(NAVIGATE_TO_SEARCH);
    console.log({ payload, rest });
    yield history.push(payload);
  }
}

//= ====================================
//  ROOT
//-------------------------------------

export const searchSagas = [
  fork(watchLoadSearchResults),
  fork(watchNavigateToSearch),
];
