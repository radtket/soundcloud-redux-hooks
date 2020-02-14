import { eventChannel } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";
import mediaQuery from "./media-query";

// Actions
import { INIT_APP } from "../app/actions";

const subscribe = ({ media }) =>
  eventChannel(emit => mediaQuery.matches(media, emit));

function* subscribeToMediaQueries(config) {
  const channel = yield call(subscribe, config);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchInitApp() {
  while (true) {
    const { config } = yield take(INIT_APP);
    yield fork(subscribeToMediaQueries, config);
  }
}

//= ====================================
//  ROOT
//-------------------------------------

export default [fork(watchInitApp)];
