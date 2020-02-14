import { all } from "redux-saga/effects";

import browserSagas from "./browser/sagas";
import playerSagas from "./player/sagas";
import searchSagas from "./search/sagas";
import tracklistSagas from "./tracklists/sagas";
import userSagas from "./users/sagas";

export default function* sagas() {
  yield all([
    ...browserSagas,
    ...playerSagas,
    ...searchSagas,
    ...tracklistSagas,
    ...userSagas,
  ]);
}
