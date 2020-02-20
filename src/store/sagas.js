import { all } from "redux-saga/effects";

import browserSagas from "./browser/sagas";
import playerSagas from "./player/sagas";
import searchSagas from "./search/sagas";
import sessionSagas from "./session/sagas";
import tracklistSagas from "./tracklists/sagas";
import userSagas from "./users/sagas";
import followingsSagas from "./followings/sagas";

export default function* sagas() {
  yield all([
    ...browserSagas,
    ...playerSagas,
    ...searchSagas,
    ...sessionSagas,
    ...tracklistSagas,
    ...userSagas,
    ...followingsSagas,
  ]);
}
