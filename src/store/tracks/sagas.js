import { call, fork, select, takeLatest } from "redux-saga/effects";
import { fetchSingleTrack } from "../api/sagas";
import { getTrackById } from "./selectors";
import { LOAD_SINGLE_TRACK } from "./actions";
import { API_TRACKS_URL } from "../constants";

function* loadSingleTrack({ trackId }) {
  const track = yield select(getTrackById, trackId);

  if (!track) {
    yield call(fetchSingleTrack, {
      id: trackId,
      url: `${API_TRACKS_URL}/${trackId}`,
    });
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadSingleTrack() {
  yield takeLatest(LOAD_SINGLE_TRACK, loadSingleTrack);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadSingleTrack)];
