import { eventChannel } from "redux-saga";
import { call, fork, put, take } from "redux-saga/effects";
import mediaQuery from "./media-query";

// Actions
import appActions from "../app/actions";

const { INIT_APP } = appActions;

const subscribe = ({ media }) =>
  eventChannel(emit => mediaQuery.matches(media, emit));

export function* subscribeToMediaQueries(config) {
  const channel = yield call(subscribe, config);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

export function* watchInitApp() {
  while (true) {
    const { config } = yield take(INIT_APP);
    yield fork(subscribeToMediaQueries, config);
  }
}

//= ====================================
//  ROOT
//-------------------------------------

export const browserSagas = [fork(watchInitApp)];
