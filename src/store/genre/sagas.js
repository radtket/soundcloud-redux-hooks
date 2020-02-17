import { call, fork, select, takeLatest } from "redux-saga/effects";
import { fetchGenreResults } from "../api/sagas";
import { getTracklistById } from "../tracklists/selectors";
import { LOAD_GENRE_TRACKS } from "./actions";

function* loadGenreTracks({ tracklistId, query }) {
  const tracklist = yield select(getTracklistById, tracklistId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchGenreResults, { id: tracklistId, query });
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadGenreTracks() {
  yield takeLatest(LOAD_GENRE_TRACKS, loadGenreTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadGenreTracks)];
