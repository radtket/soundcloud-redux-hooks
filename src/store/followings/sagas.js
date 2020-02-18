import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { fetchNextFollowings, fetchUserFollowings } from "../api/sagas";
import { getCurrenttFollowingslist, gettFollowingslistById } from "./selectors";

// Actions
import {
  LOAD_NEXT_FOLLOWINGS,
  updateTracksPagination,
  LOAD_USER_FOLLOWINGS,
} from "./actions";

function* loadNextFollowings() {
  const {
    hasNextPageInStore,
    currentPage,
    nextUrl,
    id,
    oauthToken,
  } = yield select(getCurrenttFollowingslist);

  if (hasNextPageInStore) {
    yield put(updateTracksPagination(currentPage + 1));
  } else if (nextUrl) {
    yield call(fetchNextFollowings, { id, url: nextUrl, oauthToken });
  }
}

function* loadUserTracks({ followingsListId, url, oauthToken }) {
  console.log({ followingsListId, url, oauthToken });
  const tracklist = yield select(gettFollowingslistById, followingsListId);
  if (tracklist && tracklist.isNew) {
    yield call(fetchUserFollowings, {
      id: followingsListId,
      url,
      oauthToken,
    });
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchLoadNextTracks() {
  yield takeLatest(LOAD_NEXT_FOLLOWINGS, loadNextFollowings);
}

function* watchLoadUserFollowings() {
  yield takeLatest(LOAD_USER_FOLLOWINGS, loadUserTracks);
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchLoadNextTracks), fork(watchLoadUserFollowings)];
