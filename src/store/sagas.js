import { all } from "redux-saga/effects";

import browserSagas from "./browser/sagas";
import followingsSagas from "./followings/sagas";
import playerSagas from "./player/sagas";
import searchSagas from "./search/sagas";
import sessionSagas from "./session/sagas";
import tracklistSagas from "./tracklists/sagas";
import trackSagas from "./tracks/sagas";
import userSagas from "./users/sagas";

export default function* sagas() {
  yield all([
    ...browserSagas,
    ...followingsSagas,
    ...playerSagas,
    ...searchSagas,
    ...sessionSagas,
    ...tracklistSagas,
    ...trackSagas,
    ...userSagas,
  ]);
}
